/**
 * A reusable input field component for forms.
 * 
 * This component renders an input field with a label, allowing users to input text 
 * or other values. It is customizable via props for different types, placeholders, 
 * and styling.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.label - The label text to display next to the input field.
 * @param {string} props.type - The type of the input field (e.g., 'text', 'password', 'email').
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The callback function to handle input changes.
 * @param {string} props.placeholder - The placeholder text displayed when the input is empty.
 * @param {Object} [props.styles] - An optional object to apply custom inline styles to the input field.
 * @param {string} [props.className] - An optional class name to apply custom CSS classes to the input element.
 * 
 * @returns {JSX.Element} The rendered input field component.
 */
const InputField = ({ label, type, value, onChange, placeholder, styles, className }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={false}
      autoComplete="off"
      style={styles}
      className={className}
    />
  </div>
);

export default InputField;
