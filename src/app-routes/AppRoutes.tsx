import { Redirect, Route, Switch } from "react-router";
import { Landing } from "../landing/Landing";
import { routes } from "./routes";

export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path={routes.landing} component={Landing}></Route>
            <Redirect to={routes.landing} />
        </Switch>
    );
};

export default AppRoutes;
