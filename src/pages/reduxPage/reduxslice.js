import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAllTodo = createAsyncThunk(
    'api/getAllTodo',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        return res.json()
    }
)

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTodo.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getAllTodo.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(getAllTodo.rejected, (state) => {
                state.loading = false
                state.error = 'ошибка'
            })
    },
})

export default apiSlice.reducer
