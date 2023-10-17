export const Option = ( { value, name, text } ) => {
  return (
    <option value={value} name={name}>{text}</option>
  )
}