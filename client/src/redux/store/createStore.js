import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import city from '../slices/citySlices'
import weatherFiveDays from '../slices/weatherFiveDaysSlices'

const reducer = {
    city,
    weatherFiveDays,
}

export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})
