import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/calendar";
import DashboardIndex from "./layouts/DashboardIndex";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Course from "./pages/course";
import WishList from "./pages/wishlist";
import CourseSingle from "./pages/course-single";
import ProgramSingle from "./pages/program-single"
import Discover from "./pages/discover";

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardIndex />} >
                <Route path="/" element={<Home />} />
                <Route path="/course" element={<Course />} />
                <Route path="/course/:id" element={<CourseSingle />} />
                <Route path="/program/:id" element={<ProgramSingle />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/discover" element={<Discover />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;