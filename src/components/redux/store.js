import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: CounterReducer
    },
})