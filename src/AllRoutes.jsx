import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ExamplePage from "./example/ExamplePage";
import DashboardIndex from "./layouts/DashboardIndex";
import Icons from "./components/Icons";
import Submenu from "./components/Submenu";
import Typography from "./components/Typography";
import Utilities from "./components/Utilities";
import Alert from "./components/Alert";
import Accordion from "./components/Accordion";
import Activity from "./components/Activity";
import Buttons from "./components/Buttons";
import CheckBox from "./components/CheckBox";
import KeyComponents from "./components/KeyComponents";
import Badges from "./components/Badges";
import DatePickers from "./components/DatePickers";
import Filters from "./components/Filters";
import Radios from "./components/Radio";

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
                <Route path="/alert" element={<Alert />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/checkbox" element={<CheckBox />} />
                <Route path="/key" element={<KeyComponents />} />
                <Route path="/badges" element={<Badges />} />
                <Route path="/date" element={<DatePickers />} />
                <Route path="/filter" element={<Filters />} />
                <Route path="/radio" element={<Radios />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;