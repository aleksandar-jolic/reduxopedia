import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    destinations: [{name: 'Paris', description: 'The city of lights.'}],
}   

export const destinationSlice = createSlice({
    name: 'destination',
    initialState,
    reducers: {
        addDestination: (state, action) => {
            if (!state.destinations.some(dest => dest.name === action.payload.name)) {
                state.destinations.push(action.payload);
                console.log(action);
            }
        },
        removeDestination: (state, action) => {
            state.destinations = state.destinations.filter(dest => dest.name !== action.payload)
        },
    }
})

export const { addDestination, removeDestination } = destinationSlice.actions
export const destinationReducer = destinationSlice.reducer