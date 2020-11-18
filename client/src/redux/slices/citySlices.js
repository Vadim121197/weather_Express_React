import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    weather: {},
    error: null,
    isLoading: false,
    locations: {}
}

export const cityWeatherFetch = createAsyncThunk(
    'cityweateher',
    async ({ city }) => {
        try {
            return await fetch(`/api/weather/${city}`)
                .then(response => {
                    if (response.status !== 200) {
                        return Promise.reject(new Error(response.statusText))
                    }
                    return Promise.resolve(response)
                })
                .then(res => res.json())
        } catch (error) {
            console.log(error)
        }
    }
)

export const cityWeatherFetchByCoord = createAsyncThunk(
    'cityweateher',
    async ( {latitude, longitude} ) => {
        
        try {
            return await fetch(`/api/weather/coordinats/${latitude}/${longitude}`)
                .then(response => {
                    if (response.status !== 200) {
                        return Promise.reject(new Error(response.statusText))
                    }
                    return Promise.resolve(response)
                })
                .then(res => res.json())
        } catch (error) {
            return error
        }
    }
)

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
    addLocation : (state, action) => {
            state.locations = action.payload
        }
    },

    extraReducers: {
        [cityWeatherFetch.pending.type]: state => {
            state.isLoading = true
        },
        [cityWeatherFetch.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.weather = action.payload
            if (action.payload.message) {
                state.error = action.payload.message
                state.weather = {}
            }
        },
        [cityWeatherFetch.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action
        },
    },
})

export const { addLocation } = citySlice.actions

export default citySlice.reducer
