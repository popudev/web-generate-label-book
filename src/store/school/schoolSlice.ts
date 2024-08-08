import { createSlice } from "@reduxjs/toolkit";

export type Subject = {
  id: string;
  title: string;
  subjects: string[];
};

export type SubjectState = {
  subject: Subject | null;
  subjects: Subject[];
};

const initialState: SubjectState = {
  subject: null,
  subjects: [],
};

const subjectSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const subjectActions = subjectSlice.actions;
export { subjectSlice };
