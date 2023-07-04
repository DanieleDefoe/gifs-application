import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, API_KEY } from "../utils/constants";

export const getSearchGifs = createAsyncThunk(
  "gifs/getSearchGifs",
  async ({ searchValue, offset }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search?api_key=${API_KEY}&q=${searchValue}&limit=9&offset=${offset}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const gifsSlice = createSlice({
  name: "gifs",
  initialState: {
    isLoading: null,
    data: [],
    loadedData: [],
    offset: 0,
    totalCount: null,
    searchParams: "",
  },
  reducers: {
    updateOffset(state) {
      state.offset += 9;
    },
    updateLoadedGifs(state) {
      state.loadedData.push(...state.data);
    },
    updateSearchParams(state, action) {
      state.searchParams = action.payload;
    },
    clearSearch(state) {
      state.data = [];
      state.loadedData = [];
    },
    clearTotalCount(state) {
      state.totalCount = null;
    },
    clearLoading(state) {
      state.isLoading = null;
    },
  },
  extraReducers: {
    [getSearchGifs.pending](state) {
      state.isLoading = true;
    },
    [getSearchGifs.fulfilled](state, action) {
      const { pagination, data } = action.payload;
      state.data = data;
      state.totalCount = pagination.total_count;
      state.isLoading = false;
    },
    [getSearchGifs.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const {
  updateOffset,
  updateLoadedGifs,
  clearSearch,
  clearTotalCount,
  clearLoading,
  updateSearchParams,
} = gifsSlice.actions;
export default gifsSlice.reducer;
