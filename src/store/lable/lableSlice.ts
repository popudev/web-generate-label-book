import { createSlice } from "@reduxjs/toolkit";

export type LableState = {
  lable: {
    schoolName: string;
    className: string;
    studentIds: number[];
    subjectIds: number[];
  };
};

const initialState: LableState = {
  lable: {
    schoolName: "",
    className: "",
    studentIds: [],
    subjectIds: [],
  },
};

const lableSlice = createSlice({
  name: "lable",
  initialState,
  reducers: {
    setStudentIds: (state, action) => {
      state.lable.studentIds = action.payload;
    },
    setSubjectIds: (state, action) => {
      state.lable.subjectIds = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const lableActions = lableSlice.actions;
export { lableSlice };
