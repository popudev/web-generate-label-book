import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Subject = {
  id: string;
  title: string;
  subjectNames: string[];
};

export type SubjectState = {
  subjectNames: string[];
  subjects: Subject[];
};

const initialState: SubjectState = {
  subjectNames: [],
  subjects: [],
};

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    addSubjectNames: (state, action: PayloadAction<string>) => {
      const names = action.payload
        .split("\n")
        .flatMap((name) => name.split("\t"))
        .map((name) => name.trim());

      state.subjectNames = [...state.subjectNames, ...names].sort((a, b) => a.localeCompare(b));
    },

    removeSubjectNames: (state, action: PayloadAction<number[]>) => {
      state.subjectNames = state.subjectNames.filter((_, index) => !action.payload.includes(index + 1));
    },

    updateSubjectName: (state, action) => {
      state.subjectNames = state.subjectNames.map((name, index) => {
        if (index === action.payload.id - 1) {
          return action.payload.subjectName.trim();
        }
        return name;
      });
    },

    setSubjectNames: (state, action: PayloadAction<string[]>) => {
      state.subjectNames = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const subjectActions = subjectSlice.actions;
export { subjectSlice };
