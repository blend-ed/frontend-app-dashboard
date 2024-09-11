import React from 'react';
import Filter from '../../../blendx-ui/src/Filter';
import Button, { ButtonGroup, IconButton } from '../../../blendx-ui/src/Button';

const Filters = () => {
    return (
        <main>
            <div className="p-3 vw-75">
                <div>
                    <h1>Filters</h1>
                    <p>
                        Filters are used to narrow down the results based on the selected criteria.
                    </p>
                </div>
                <Filter>
                    <div>
                        <Filter.Dropdown id={"filter-1"}>
                            <Filter.Toggle title={"Filter 1"} />
                            <Filter.Menu defaultActiveKey={2}>
                                < Filter.Nav >
                                    <Filter.Nav.Link title={"Filter 2"} icon={"filter-1"} />
                                    <Filter.Nav.Link title={"Filter 3"} icon={"filter-1"} />
                                    <Filter.Nav.Link title={"Filter 4"} icon={"filter-1"} />
                                </Filter.Nav>
                                <Filter.Content>
                                    <Filter.Pane>
                                        Filter 2 content goes here.
                                    </Filter.Pane>
                                    <Filter.Pane>
                                        Filter 3 content goes here.
                                    </Filter.Pane>
                                    <Filter.Pane>
                                        Filter 4 content goes here.
                                    </Filter.Pane>
                                </Filter.Content>
                            </Filter.Menu>
                        </Filter.Dropdown>
                    </div>
                    <div>
                        <Filter.Dropdown id={"filter-3"}>
                            <Filter.Toggle icon={"filter-3"} />
                            <Filter.Menu>
                                <Filter.Nav>
                                    <Filter.Nav.Link title={"Filter 5"} icon={"filter-3"} eventKey={1} />
                                    <Filter.Nav.Link title={"Filter 6"} icon={"filter-3"} />
                                    <Filter.Nav.Link title={"Filter 7"} icon={"filter-3"} />

                                </Filter.Nav>
                                <Filter.Content>
                                    <Filter.Pane eventKey={1}>
                                        Filter 5 content goes here.
                                    </Filter.Pane>
                                    <Filter.Pane>
                                        Filter 6 content goes here.
                                    </Filter.Pane>
                                    <Filter.Pane>
                                        Filter 7 content goes here.
                                    </Filter.Pane>
                                </Filter.Content>
                            </Filter.Menu>
                        </Filter.Dropdown>
                        <Filter.Dropdown id={"filter-4"}>
                            <Filter.Toggle icon={"filter-3"} title={"Filter 9"} />
                            <Filter.Menu defaultActiveKey={1}>
                                <Filter.Nav>
                                    <Filter.Nav.Link title={"Filter 10"} icon={"filter-3"} eventKey={1} />
                                    <Filter.Nav.Link title={"Filter 11"} icon={"filter-3"} eventKey={2} />
                                    <Filter.Nav.Link title={"Filter 12"} icon={"filter-3"} eventKey={3} />
                                </Filter.Nav>
                                <Filter.Content>
                                    <Filter.Pane eventKey={1}>
                                        <Filter.Pane.Header onClear={() => { console.log("Filter 10 cleared") }} icon={"filter-3"} title={"Filter 10"} />
                                        <Filter.Pane.Body>
                                            <div>
                                                <ButtonGroup>
                                                    <Button>Button 1</Button>
                                                    <Button>Button 2</Button>
                                                    <Button>Button 3</Button>
                                                </ButtonGroup>
                                                <IconButton icon={"filter-3"} />

                                                <h3>Filter 10 content goes here.</h3>
                                                <p>Filter 10 content goes here.</p>
                                                <p>Filter 10 content goes here.</p>
                                            </div>
                                        </Filter.Pane.Body>
                                        <Filter.Pane.Footer onApply={() => { console.log("Filter 10 applied") }} onClear={() => { console.log("Filter 10 cleared") }} />
                                    </Filter.Pane>
                                    <Filter.Pane eventKey={2}>
                                        <Filter.Pane.Header onClear={() => { console.log("Filter 11 cleared") }} icon={"filter-3"} title={"Filter 11"} />
                                        <Filter.Pane.Body>
                                            Filter 11 content goes here.
                                        </Filter.Pane.Body>
                                        <Filter.Pane.Footer onApply={() => { console.log("Filter 11 applied") }} />
                                    </Filter.Pane>
                                    <Filter.Pane eventKey={3}>
                                        !
                                    </Filter.Pane>
                                </Filter.Content>
                            </Filter.Menu>
                        </Filter.Dropdown>
                    </div>
                </Filter>
            </div >
        </main >
    );
}

export default Filters;