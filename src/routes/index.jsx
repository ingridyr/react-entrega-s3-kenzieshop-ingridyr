import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login"
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
