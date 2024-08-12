import { configureStore } from "@reduxjs/toolkit";
import { labelSlice } from "./label/labelSlice";
import { studentSlice } from "./student/studentSlice";
import { subjectSlice } from "./subject/subjectSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      subject: subjectSlice.reducer,
      student: studentSlice.reducer,
      label: labelSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
