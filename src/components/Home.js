import React from 'react'
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';
import './Home.css'
import { getSchedule, getRoutes, getFare, getStations } from "../store/actions";

const Home = () => {
    const history = useHistory();
    const { stations,  } = useSelector(state => ({
        stations: state.trains.stations,
    }), shallowEqual);
    const dispatch = useDispatch();
     return (
         <div>
             <h1>Welcome to the NEXT MUSIC!</h1>
             <button onClick={()=> dispatch(getStations())}> Get Stations </button>
             <div className="schedule-list">
                 <ul>
                     {stations ? stations.map(station => (
                         <button onClick={()=>{ dispatch(getSchedule(station.id));  history.push('/Schedule')} } key={station.id}>{station.name}</button>
                     )): null}
                 </ul>
             </div>

         </div>
     )
}

export default Home