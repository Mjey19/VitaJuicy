import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const DrawerSlice = createSlice({
  name: "DrawerSlice",
  initialState,
  reducers: {
    AddCard(state, action) {
      const findItem = state.items.find((obj) => obj.name === action.payload);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    DeleteCard(state, action) {
     state.items = state.items.filter((obj) => obj.name != action.payload);
    },
  },
});

export const { AddCard, DeleteCard } = DrawerSlice.actions;

export default DrawerSlice.reducer;
