import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ExamplePage from "./example/ExamplePage";
import DashboardIndex from "./layouts/DashboardIndex";
import Icons from "./components/Icons";
import Submenu from "./components/Submenu";
import Typography from "./components/Typography";

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardIndex />} >
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<ExamplePage />} />
                <Route path="/icons" element={<Icons />} />
                <Route path="/submenu" element={<Submenu />} />
                <Route path="/typography" element={<Typography />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;