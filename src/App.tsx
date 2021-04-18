import Shell from "./shell/Shell";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./app-routes/AppRoutes";

export const App = () => {
    return (
        <Router>
            <Shell>
                <AppRoutes />
            </Shell>
        </Router>
    );
};

export default App;
