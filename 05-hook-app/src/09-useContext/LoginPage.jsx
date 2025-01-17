import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const {user, setUser} = useContext( UserContext );

    return (
      <>
          <h1 className="font-display text-4xl font-extrabold">Login Page</h1>
          <hr/>
          <pre aria-label="pre">
            {JSON.stringify(user, null,3)}
          </pre>
          <button onClick={ () => setUser({id: 123, name: 'Alberto', email:"@google.com"})}>Set User</button>
      </>
    )
  }