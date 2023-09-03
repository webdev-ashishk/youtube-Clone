import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    //nameofSlice: createSliceValue;
    app: appSlice,
  },
});

export default store;
