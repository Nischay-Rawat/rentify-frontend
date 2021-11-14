import { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const { data } = this.state;
    const tempError = {};
    const { error } = Joi.validate(data, this.schema, { abortEarly: false });
    if (!error) return null;
    for (let item of error.details) {
      tempError[item.path] = item.message;
    }
    return tempError;
  };
  validateProperty = ({ name, value }) => {
    const schemaobj = { [name]: this.schema[name] };
    const obj = { [name]: value };
    const { error } = Joi.validate(obj, schemaobj);

    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();

    this.setState({ error: error || {} });

    if (error) return;
    console.log("Submited");
  };
  handleChange = ({ currentTarget }) => {
    const error = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) error[currentTarget.name] = errorMessage;
    else delete error[currentTarget.name];

    this.setState({ errors: error });

    const tempAccount = { ...this.state.data };
    tempAccount[currentTarget.name] = currentTarget.value;
    this.setState({ data: tempAccount });
  };

  renderButton(label) {
    return <button disabled={this.validate()} className="btn btn-primary">
      {label}
    </button>;
  }
  renderInput(name,label,type='text'){
   return  <Input
    onChange={this.handleChange}
    error={this.state.errors[name]}
    name={name} 
    label={label}
    value={this.state.data[name]}
    autoFocus
    type={type}
  />
  }
}

export default Form;
