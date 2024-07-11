import { useRoutes } from "react-router-dom";
import { routes } from "src/routes";
import { Home } from "./pages/home";

function App() {
    const element = useRoutes([{ path: "/", element: <Home /> }, ...routes]);

    return element;
}

export default App;
