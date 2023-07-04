import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, API_KEY } from "../utils/constants";

export const getRandom = createAsyncThunk("random/getRandom", async () => {
  try {
    const response = await fetch(`${BASE_URL}/random?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const randomSlice = createSlice({
  name: "random",
  initialState: { isLoading: null, data: {} },
  reducers: {},
  extraReducers: {
    [getRandom.pending](state) {
      state.isLoading = true;
    },
    [getRandom.fulfilled](state, action) {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    [getRandom.rejected](state) {
      state.isLoading = false;
    },
  },
});

export default randomSlice.reducer;
