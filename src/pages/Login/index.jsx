import { useHistory } from "react-router";
import "./style.css"

const Login = () => {
  const history = useHistory();

  return (
    <div className="loginContainer">
      <span>I'm under construction...</span>
      <p>Coming soon!</p>
      <button onClick={() => history.push("/")}>Back to Home</button>
    </div>
  );
};

export default Login;
