import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { AType, DataAct } from './activitiesType';

export const fetchActivities = createAsyncThunk<
    AType[],
    string,
    {
        rejectValue: SerializedError | Error | unknown;
    }
>(
    'activities/fetchActivities',
    async (url: string, { rejectWithValue }) => {
        try {
            const { data } = await axios.get<void | unknown, DataAct>(url);
            console.log(data);
            return data;
        } catch (err) {
            return rejectWithValue(err);
        }

    }
)

interface ActivitiesState {
    activities?: AType[];
    loading: boolean;
    error: SerializedError | null;
}

const ActivityState: ActivitiesState = {
    activities: undefined,
    loading: false,
    error: null
}

export const activitiesSlice = createSlice({
    name: 'activities',
    initialState: ActivityState,
    reducers: {
        setActivities: (state, action) => {
            state.activities = action.payload;
        }
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchActivities.pending, (state, action) => {
            state.loading = true;
        });
        addCase(fetchActivities.fulfilled, (state, action) => {
            state.loading = false;
            state.activities = action.payload;       
        });
        addCase(fetchActivities.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }
})