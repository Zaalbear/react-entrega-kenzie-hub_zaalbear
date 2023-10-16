export const Select = ( { name,  children } ) => {
  return (
    <>
        <label>Selecionar Modulo</label>
        <select name={name}>
            { children }
        </select>
    </>
  )
}