import Header from "@blend-ed/frontend-component-vertical-navbar";
import { Outlet } from "react-router-dom";

const DashboardIndex = () => {

    return (
        <div>
            <div className="d-flex">
                <Header intl={null} mainMenuItems={[]} secondaryMenuItems={[]} userMenuItems={[]} />
                <div>
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default DashboardIndex;