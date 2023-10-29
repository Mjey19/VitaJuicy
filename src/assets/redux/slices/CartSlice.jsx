import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartOpen: false,
};
const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCartOpen(state, action) {
      state.cartOpen = action.payload;
    },
  },
});

export const { setCartOpen } = CartSlice.actions;

export default CartSlice.reducer;
