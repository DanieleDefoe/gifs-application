import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, API_KEY } from '../utils/constants';

export const getTrendings = createAsyncThunk('trendings/getTrendings', async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending?api_key=${API_KEY}&limit=9`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const trendingsSlice = createSlice({
  name: 'trendings',
  initialState: { isLoading: null, data: [] },
  reducers: {},
  extraReducers: {
    [getTrendings.pending](state) {
      state.isLoading = true;
    },
    [getTrendings.fulfilled](state, action) {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    [getTrendings.rejected](state) {
      state.isLoading = false;
    }
  }
});

export default trendingsSlice.reducer;
