import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser = createAsyncThunk(
    'demo/fetchUser',
    async () => {
        const response = await axios.get('https://random-data-api.com/api/users/random_user?size=10')
        return response.data
    }
)

export interface DemoState {
    users: Array<any>
    isLoading: boolean
}

const initialState: DemoState = {
    users: [],
    isLoading: false
}

export const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false
        }).addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true
        }).addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false
        })
    },
})

export const { } = demoSlice.actions

export default demoSlice.reducer