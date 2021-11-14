const Input = ({ type,onChange,error, value, name, label }) => {
  return (
    <div className="mb-3">
      <label htmlFor="username">{label}</label>
      <input

        onChange={onChange}
        name={name}
        value={value}
        id={name}
        type={type}
        className="form-control"
      />
      {error&&<div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
