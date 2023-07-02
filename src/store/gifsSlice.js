import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, API_KEY } from '../utils/constants';

export const getSearchGifs = createAsyncThunk('gifs/getSearchGifs', async query => {
  try {
    const response = await fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=9`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const gifsSlice = createSlice({
  name: 'gifs',
  initialState: { isLoading: null, data: [] },
  reducers: {},
  extraReducers: {
    [getSearchGifs.pending](state) {
      state.isLoading = true;
    },
    [getSearchGifs.fulfilled](state, action) {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    [getSearchGifs.rejected](state) {
      state.isLoading = false;
    }
  }
});

export default gifsSlice.reducer;
