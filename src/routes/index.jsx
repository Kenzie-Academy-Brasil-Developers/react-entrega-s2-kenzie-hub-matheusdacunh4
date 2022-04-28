import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("KenzieHub:token");
    if (token) {
      setAuthorized(true);
    }
  }, [authorized]);
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={authorized ? "/dashboard" : "/login"} />
      </Route>
      <Route exact path="/login">
        <Login authorized={authorized} setAuthorized={setAuthorized} />
      </Route>
      <Route exact path="/cadastro">
        <Cadastro authorized={authorized} />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          authorized={authorized}
          setAuthorized={setAuthorized}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
