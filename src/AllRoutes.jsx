import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ExamplePage from "./example/ExamplePage";
import DashboardIndex from "./layouts/DashboardIndex";

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardIndex />} >
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<ExamplePage />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;