import React from 'react'
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    regionId: -1,
}

const regionSlice = createSlice({
    name: "region",
    initialState,
    reducers: {
        setRegion(state, action) {
            state.regionId = action.payload
        },
    }
})


export const { setRegion } = regionSlice.actions

export default regionSlice.reducer;