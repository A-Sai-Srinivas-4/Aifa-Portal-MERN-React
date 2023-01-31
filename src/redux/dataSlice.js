import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  Data: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchedData = createAsyncThunk('redux/fetchedData', () => {
  return axios
    .get('http://localhost:8000/api/resources')
    .then(response => response.data)
})

const DataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchedData.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchedData.fulfilled, (state, action) => {
      state.loading = false
      state.Data = action.payload
      state.error = ''
    })
    builder.addCase(fetchedData.rejected, (state, action) => {
      state.loading = false
      state.Data = []
      state.error = action.error.message
    })
  }
})

export default DataSlice.reducer