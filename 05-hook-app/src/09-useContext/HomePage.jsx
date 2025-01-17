import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const {user} = useContext( UserContext );

    return (
      <>
          <h1 className="font-display text-4xl font-extrabold">Home Page <small>{user?.name}</small></h1>
          <hr/>

          <pre aria-label="pre">
            {
                JSON.stringify(user, null,3)
            }
          </pre>
      </>
    )
  }