import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/calendar";
import DashboardIndex from "./layouts/DashboardIndex";
import Home from "./pages/home";

import Profile from "./pages/Profile";

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardIndex />} >
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;