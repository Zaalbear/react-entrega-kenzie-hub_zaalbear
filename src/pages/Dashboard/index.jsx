import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"

export const Dashboard = ({ userData, setUserData }) => {
  const navigate = useNavigate()

  const exit = () => {
    localStorage.removeItem("@user_token")
    setUserData("")
    navigate("/")
  }

  return (
    <>
      <div>
        <Header/>
        <button onClick={exit}>sair</button> 
      </div>

      <div>
        <h1>Olá, {userData.name}</h1>
        <p>{userData.course_module}</p>
      </div>

      <div>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolviment, em breve teremos novidades</p>
      </div>
    </>
  )
}