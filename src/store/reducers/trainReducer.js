
import * as types from "../actions/types";

const INITIAL_DATA = []

const TrainReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case types.STATIONS_RECEIVED:
            return Object.assign({}, state, {stations: action.payload})
        case types.SCHEDULE_RECEIVED:
            return Object.assign({}, state, {schedule: action.payload})
        case types.FARE_RECEIVED:
            return Object.assign({}, state, {fare: action.payload})
        case types.ROUTES_RECEIVED:
            return Object.assign({}, state, {routes: action.payload})
        default:
            return state
    }
}

export default TrainReducer