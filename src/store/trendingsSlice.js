import { createSlice } from "@reduxjs/toolkit";

const trendingsSlice = createSlice({
  name: 'trendings',
  initialState: { isLoading: null, data: [] },
  reducers: {},
  extraReducers: {},
})

export const { } = trendingsSlice.actions
export default trendingsSlice.reducer
