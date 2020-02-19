import React from 'react'
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';

import './Home.css'
import { getSchedule, getRoutes, getFare, getStations } from "../store/actions";

const Schedule = () => {
    const history = useHistory();
    const { schedule } = useSelector(state => ({
        schedule: state.trains.schedule
    }), shallowEqual);
    const dispatch = useDispatch();
     return (
         <div>
             <h1>TRAIN SCHEDULE!</h1>
             <div className="schedule-list">
                 <ul>
                     {schedule ? schedule.map(schedule => (
                         <button onClick={()=> {console.log("hello")}} key={`${schedule.route}-${schedule.time}`}>{`${schedule.route} ${schedule.time}`}</button>
                     )): null}
                 </ul>
             </div>

         </div>
     )
}

export default Schedule