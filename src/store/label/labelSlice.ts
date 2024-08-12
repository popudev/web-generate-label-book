import { createSlice } from "@reduxjs/toolkit";

export type LabelState = {
  label: {
    schoolName: string;
    className: string;
    studentIds: number[];
    subjectIds: number[];
  };
};

const initialState: LabelState = {
  label: {
    schoolName: "",
    className: "",
    studentIds: [],
    subjectIds: [],
  },
};

const labelSlice = createSlice({
  name: "label",
  initialState,
  reducers: {
    setStudentIds: (state, action) => {
      state.label.studentIds = action.payload;
    },
    setSubjectIds: (state, action) => {
      state.label.subjectIds = action.payload;
    },
    setSchoolName: (state, action) => {
      state.label.schoolName = action.payload;
    },
    setClassName: (state, action) => {
      state.label.className = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const labelActions = labelSlice.actions;
export { labelSlice };
