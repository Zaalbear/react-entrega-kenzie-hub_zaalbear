import { Link } from "react-router-dom"

export const Header = ( { backBttn }) => {
  return (
    <header>
        <h1>Kenzie Hub</h1>
        {backBttn ? <Link to="/"><button>voltar</button></Link> : null}
    </header>
  )
}