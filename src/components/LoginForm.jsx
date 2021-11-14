import Form from "./common/Form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password",'password')}
        {this.renderButton("Login")}
      </form>
    );
  }
}

export default LoginForm;
