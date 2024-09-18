import { Route, Routes } from "react-router-dom";
import Calendar from "./components/calendar";
import DashboardIndex from "./layouts/DashboardIndex";
import Home from "./components/home";
import Progress from "./components/progress";

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardIndex />} >
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/Progress" element={<Progress />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;