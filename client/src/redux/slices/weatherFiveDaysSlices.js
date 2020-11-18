import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    weather: {},
    error: null,
    isLoading: false,
}

export const cityWeatherFetchFiveDays = createAsyncThunk(
    'cityweateherfivedays',
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

const weatherFiveDaysSlices = createSlice({
    name: 'weatherFiveDays',
    initialState,
    reducers: {},

    extraReducers: {
        [cityWeatherFetchFiveDays.pending.type]: state => {
            state.isLoading = true
        },
        [cityWeatherFetchFiveDays.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.weather = action.payload
            // if (action.payload.message) {
            //     state.error = action.payload.message
            //     state.weather = {}
            // }
        },
        [cityWeatherFetchFiveDays.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action
        },
    },
})

export default weatherFiveDaysSlices.reducer
