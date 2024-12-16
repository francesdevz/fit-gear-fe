const InputField = ({ label, type, value, onChange, placeholder }) => (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        autoComplete=""
      />
    </div>
  );

  export default InputField