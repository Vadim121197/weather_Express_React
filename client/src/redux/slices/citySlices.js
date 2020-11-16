import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    weather: {},
    error: null,
    isLoading: false,
}

export const cityWeatherFetch = createAsyncThunk('cityweateher', ({ city }) => {
    return fetch(`/api/weather/${city}`)
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText))
            }
            return Promise.resolve(response)
        })
        .then(res => res.json())
        .catch(error => error)
})

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},

    extraReducers: {
        [cityWeatherFetch.pending.type]: state => {
            state.isLoading = true
        },
        [cityWeatherFetch.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.weather = action.payload
        },
        [cityWeatherFetch.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export const { addCityName } = citySlice.actions

export default citySlice.reducer
