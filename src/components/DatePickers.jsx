import React, { useState } from 'react';
import DatePicker, { RangePicker } from '../../../blendx-ui/src/DatePicker';

const DatePickers = () => {

    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <main>
            <div className="py-3">
                <div>
                    <h1>DatePickers</h1>
                    <p>DatePickers content goes here.</p>
                </div>
                <div className="d-flex">
                    <DatePicker marked={new Date()} className="mr-6" date={date} setDate={setDate} />
                    <RangePicker marked={new Date()} className="mr-6" startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
                </div>
                <div>
                    {/* Display the dates */}
                    <p>Selected Date: {date.toDateString()}</p>
                    <p>Selected Start Date: {startDate.toDateString()}</p>
                    <p>Selected End Date: {endDate.toDateString()}</p>
                </div>
            </div>
        </main>
    )
}

export default DatePickers;