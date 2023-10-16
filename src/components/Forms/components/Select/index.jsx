import { forwardRef } from "react"

export const Select = forwardRef(( { name,  children }, ref ) => {
  return (
    <>
        <label>Selecionar Modulo</label>
        <select name={name} ref={ref}>
            { children }
        </select>
    </>
  )
})