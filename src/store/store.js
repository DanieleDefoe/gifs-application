import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import gifsSlice from './gifsSlice';
import randomSlice from './randomSlice';
import trendingsSlice from './trendingsSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
    gifs: gifsSlice,
    trendings: trendingsSlice,
    random: randomSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
