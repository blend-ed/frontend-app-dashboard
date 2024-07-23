import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ExamplePage from "./example/ExamplePage";
import DashboardIndex from "./layouts/DashboardIndex";
import Icons from "./components/Icons";
import Submenu from "./components/Submenu";
import Typography from "./components/Typography";
import Utilities from "./components/Utilities";
import Modals from "./components/Modals";

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardIndex />} >
                <Route path="*" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<ExamplePage />} />
                <Route path="/icons" element={<Icons />} />
                <Route path="/submenu" element={<Submenu />} />
                <Route path="/typography" element={<Typography />} />
                <Route path="/utilities" element={<Utilities />} />
                <Route path="/modals" element={<Modals />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;