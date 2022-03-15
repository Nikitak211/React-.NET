import { combineReducers } from '@reduxjs/toolkit';
import { activitiesSlice } from '../features/activities';



const rootReducer = combineReducers({
    activities: activitiesSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer