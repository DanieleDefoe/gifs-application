import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, API_KEY } from '../utils/constants';

export const getSearchGifs = createAsyncThunk('gifs/getSearchGifs', async ({ searchValue, offset }) => {
  try {
    const response = await fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${searchValue}&limit=9&offset=${offset}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const gifsSlice = createSlice({
  name: 'gifs',
  initialState: { isLoading: null, data: [], loadedData: [], offset: 0 },
  reducers: {
    updateOffset(state) {
      state.offset += 9
    },
    updateLoadedGifs(state) {
      state.loadedData.push(...state.data)
    }
  },
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

export const { updateOffset, updateLoadedGifs } = gifsSlice.actions
export default gifsSlice.reducer;
