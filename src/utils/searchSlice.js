import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},

  reducers: {
    cacheResults: (state, action) => {
      //   state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
/*
 * Cache : 

    Time complexit to search in array = 0(n)
    time complexity to search in Object = 0(1)
    array.indexOf()
 
    using Object would be the good option  also we can use new Map()
 */
