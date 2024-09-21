import React from 'react';
import { Drawer, Icon } from '@blend-ed/blendx-ui';
import { Link } from 'react-router-dom';
import EventCard from '../../components/EventCard';

const EventDrawer = ({ showDrawer, handleCloseDrawer, todaysEvents, upcomingEvents }) => {
    return (
        <Drawer show={showDrawer} onClose={handleCloseDrawer} className="events-drawer" size="lg">
            <Drawer.Header title={'Events'} className="events-drawer-header" />
            <Drawer.Body className="events-drawer-body">
                <div className="events-list">
                    <div className="events-list-title">Today</div>
                    <div className="events-list-content">
                        {todaysEvents.length > 0 ? todaysEvents.map((event, index) => (
                            <EventCard key={index} title={event.title} date={event.date} variant={event.variant} link={event.link} />
                        ))
                            : <div className="no-events">No events today</div>}
                    </div>
                </div>
                <div className="events-list">
                    <div className="events-list-title">Upcoming</div>
                    <div className="events-list-content">
                        {upcomingEvents.length > 0 ? upcomingEvents.map((event, index) => (
                            <div key={index} className={`event-item event-${event.variant}`}>
                                <div className="event-item-header">
                                    <div className="event-item-date">
                                        <Icon icon='calendar' type='line' className="event-item-icon" size='md' />
                                        {new Date(event.date).toLocaleDateString()}
                                    </div>
                                    <div className="event-item-time">
                                        <Icon icon='time' type='line' className="event-item-icon" size='md' />
                                        {new Date(event.date).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                                    </div>
                                </div>
                                <div className="event-item-body">
                                    <div className="event-item-title">{event.title}</div>
                                    {event.link && <Link className="event-item-link" to={event.link}>
                                        <Icon icon='link' className="event-item-icon" size='md' />
                                        join meeting
                                    </Link>}
                                </div>
                            </div>
                        ))
                            : <div className="no-events">No upcoming events</div>}
                    </div>
                </div>
            </Drawer.Body>
        </Drawer>
    )
}

export default EventDrawer;