import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    getApiConfiguration: (store, action) => {
      store.url = action.payload;
    },
    getGenres: (store, action) => {
      store.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;
export default homeSlice.reducer;
