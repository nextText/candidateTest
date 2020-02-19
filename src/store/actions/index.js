import API  from "../../api"
import * as types from "../actions/types";

export const getStations = () =>{
    return function(dispatch) {
        dispatch({ type: types.FETCH_STATIONS });
        return API.getStations().then(res => {
            dispatch({ type: types.STATIONS_RECEIVED, payload: res });
        });
    };
};

export const getSchedule = (stationAbbr) => {
    return function(dispatch) {
        dispatch({ type: types.FETCH_SCHEDULE });
        return API.getSchedule(stationAbbr).then(res => {
            dispatch({ type: types.SCHEDULE_RECEIVED, payload: res });
        });
    };
};

export const getRoutes = routes =>  {
    return function(dispatch) {
        dispatch({ type: types.FETCH_ROUTES });
        return API.getRoutes().then(res => {
            dispatch({ type: types.ROUTES_RECEIVED, payload: res });
        });
    };
};

export const getFare = fare => {
    return function(dispatch) {
        dispatch({ type: types.FETCH_FARE });
        return API.getFare(fare).then(res => {
            dispatch({ type: types.FARE_RECEIVED, payload: res });
        });
    };
};




