import { Link } from "react-router-dom"
import { Input } from "../components/Input"

export const LoginForm = () => {
    return (
            <form>

                <div>
                    <h2>Login</h2>
                </div>

                <Input name="Email" placeholder="Digite seu E-mail" />
                <Input name="Senha" placeholder="Digite sua senha"/>

                <Link to="/dashboard"><button>Entrar</button></Link>
            </form>
    )
}