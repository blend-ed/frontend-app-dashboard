import { Col, Image, Row, Truncate } from "@openedx/paragon";
import { ChevronLeft, ChevronRight, KeyboardArrowDown } from "@openedx/paragon/icons";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardIndex = () => {

    const [navOpen, setNavOpen] = useState(false);
    const handleNavToggle = () => {
        setNavOpen(!navOpen);
    }

    return (
        <div>
            <Row className="m-0">
                <div className={`px-2 bg-light border-right vh-100 pt-4 nav-col ${navOpen ? 'open' : ''} nav-transition`}>
                    <nav>
                        <ul className="list-unstyled">
                            <li>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <div className="nav-box" />
                                        {navOpen && <h4 className={`ml-2 mb-0 text-nowrap`}>Blend-ed</h4>}
                                    </div>
                                    <div className="arrow-box ml-2 mr-n3" onClick={handleNavToggle}>
                                        {navOpen ?
                                            <ChevronLeft />
                                            :
                                            <ChevronRight />
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="img-box">
                                    <div className="d-flex align-items-center">
                                        <Image src="https://api.dicebear.com/9.x/lorelei/svg?seed=Zoey" alt="avatar" fluid style={{ height: '2rem' }} />
                                        {navOpen && <div className={`ml-2`}>
                                            <h5 className="mb-n1">Zoey</h5>
                                            <span className="micro">Student</span>
                                        </div>}
                                    </div>
                                    {navOpen && <KeyboardArrowDown />}
                                </div>
                            </li>
                        </ul>
                        <ul className="list-unstyled d-flex flex-column ml-3">
                            <li>
                                <div className="nav-box-sm" />
                            </li>
                            <li>
                                <div className="nav-box-sm" />
                            </li>
                            <li>
                                <div className="nav-box-sm" />
                            </li>
                            <li>
                                <div className="nav-box-sm" />
                            </li>
                        </ul>
                    </nav>
                </div>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </div >
    )
}

export default DashboardIndex;