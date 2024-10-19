import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/calendar";
import DashboardIndex from "./layouts/DashboardIndex";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Course from "./pages/course";
import WishList from "./pages/wishlist";
import CourseSingle from "./pages/courseSingle";
import ProgramSingle from "./pages/programSingle"
import Progress from "./pages/progress";

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardIndex />} >
                <Route path="/" element={<Home />} />
                <Route path="/course" element={<Course />} />
                <Route path="/course/:id" element={<CourseSingle />} />
                <Route path="/program/:id" element={<ProgramSingle />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;