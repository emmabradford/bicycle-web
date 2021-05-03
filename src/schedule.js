import React from 'react';
import Scheduler from 'devextreme-react/scheduler'
import {events} from './events.js'

const currDate = new Date(2021, 4, 3);
const view = ['agenda'];
class Schedule extends React.Component
{
    render()
    {
        return (
            <Scheduler
                timeZone="America/Chicago"
                dataSource=
                {
                    events
                }
                views=
                {
                    view
                }
                currentView="agenda"
                defaultCurrentDate=
                {
                    currDate
                }
                height = 
                {
                    300
                }
                startDayHour=
                {
                    9
                }
            />
        );
    }
}

export default Schedule;
