import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  linkId: -1,
  type: ""
};

const linkSlice = createSlice({
  name: "navLink",
  initialState,
  reducers: {
    SetLinkId(state, action) {
      state.linkId = action.payload;
    },
    SetFilterCatalog(state,action){
      state.type = action.payload
    }
  },
});

export const { SetLinkId, SetFilterCatalog } = linkSlice.actions;

export default linkSlice.reducer;
