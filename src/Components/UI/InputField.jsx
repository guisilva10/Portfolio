const InputField = ({
  id, 
  onChange, 
  onBlur, 
  hasError,
  label, 
  isTextarea = false
}) => {

  const commonProps = {
    id,
    name : id,
    onChange: (e) => onChange(e.target.value),
    onBlur: () => onBlur(true),
  };


  return (
    <div className='field'>
    <label htmlFor={id}>{label}</label>
    {!isTextarea && <input type="text" {...commonProps} /> }
    {isTextarea &&  <textarea {...commonProps} rows="10"></textarea>}
   { hasError &&  (
    <span className='error'>Ops !!, o campo está incorreto.</span>
   )}
  </div>
  )
}

export default InputField;
