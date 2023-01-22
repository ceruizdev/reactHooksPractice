import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import { Navbar } from "./Navbar"

export const Login = () => {
    const { user, setUser } = useContext(UserContext);

    return (
      <>
          <h1>Login</h1>
          <Navbar />  
          <hr />
          <pre>
            {JSON.stringify(user, null, 3)}
          </pre>

          <button className="btn btn-primary" onClick={() => setUser({name: 'Carlos', id: 123, 'email': 'carlos@gmail.com'})}>Set User</button>
      </>
    )
  }
  