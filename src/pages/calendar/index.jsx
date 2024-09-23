import React, { useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dummyEvents from './dummyData';
import EventDrawer from './EventDrawer';

const Calendar = () => {

    const [showDrawer, setShowDrawer] = useState(false);

    const events = dummyEvents

    const todaysEvents = events.filter(event => new Date(event.date).toDateString() === new Date().toDateString());
    const upcomingEvents = events.filter(event => new Date(event.date) > new Date());

    const calendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        initialView: 'dayGridMonth',
        dayMaxEventRows: true, // for all non-TimeGrid views
        views: {
            dayGridMonth: {
                buttonText: 'Month',
            },
            timeGridDay: {
                buttonText: 'Day'
            },
        },
        buttonText: {
            today: 'Today',
            listWeek: 'Show events',
        },
        headerToolbar: {
            left: 'prev,next title',
            right: 'dayGridMonth,timeGridDay today showEvents',
        },
        droppable: false,
        editable: false,
        eventResizableFromStart: true,
        dayMaxEvents: 5,
        navLinks: true,
        events: events,
        fixedWeekCount: false,
        eventClassNames: function ({ event }) {
            return [
                `fc-${event.extendedProps.variant}`
            ]
        },
        customButtons: {
            showEvents: {
                text: 'Show events',
                click: function () {
                    setShowDrawer(true);
                }
            }
        },
    };

    const handleCloseDrawer = () => {
        setShowDrawer(false);
    }

    return (
        <main>
            <div className="calendar">
                <FullCalendar {...calendarOptions} />
            </div>
            <EventDrawer showDrawer={showDrawer} handleCloseDrawer={handleCloseDrawer} todaysEvents={todaysEvents} upcomingEvents={upcomingEvents} />
        </main >
    )
}

export default Calendar;