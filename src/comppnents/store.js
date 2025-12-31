import { configureStore } from '@reduxjs/toolkit'
import reduxApi from '../pages/reduxPage/reduxslice.js'

export const store = configureStore({
    reducer: {
        reduxApi: reduxApi
    },
})
