import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "video",
  initialState: {
    currentVideo: null,
  },
  reducers: {
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
  },
});

export const { setCurrentVideo } = videosSlice.actions;

export default videosSlice.reducer;
