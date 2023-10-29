import { configureStore } from '@reduxjs/toolkit'
import NavLink from './slices/NavLink'
import RegionSlice from './slices/RegionSlice'
import CartSlice from './slices/CartSlice'
import DrawerSlice from './slices/DrawerSlice'
const store = configureStore({
  reducer: {
    NavLink,
    RegionSlice,
    CartSlice,
    DrawerSlice
  },
})

export default store