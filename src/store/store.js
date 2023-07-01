import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import gifsSlice from "./gifsSlice";

const store = configureStore({
  reducer: {
    form: formSlice,
    gifs: gifsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store
