import { configureStore } from '@reduxjs/toolkit'
import city from '../slices/citySlices'

const reducer = {
    city,
}

export const store = configureStore({
    reducer,
})
