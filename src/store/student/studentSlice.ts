import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { formatCapitalize } from "@/utils/formatCapitalize";

export type Student = {
  id: string;
  title: string;
  studentNames: string[];
};

export type StudentState = {
  studentNames: string[];
  students: Student[];
};

const initialState: StudentState = {
  studentNames: [],
  students: [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudentNames: (state, action: PayloadAction<string>) => {
      // Hàm để lấy phần tên từ chuỗi họ tên
      const getLastName = (fullName) => {
        const parts = fullName.split(" ");
        return parts[parts.length - 1];
      };

      const names = action.payload.split("\n").map((name) => formatCapitalize(name.trim()));

      state.studentNames = [...state.studentNames, ...names].sort((a, b) => {
        return getLastName(a).localeCompare(getLastName(b), undefined, { sensitivity: "base" });
      });
    },
    removeStudentNames: (state, action: PayloadAction<number[]>) => {
      state.studentNames = state.studentNames.filter((_, index) => !action.payload.includes(index + 1));
    },
    updateStudentName: (state, action) => {
      state.studentNames = state.studentNames.map((name, index) => {
        if (index === action.payload.id - 1) {
          return formatCapitalize(action.payload.studentName.trim());
        }
        return name;
      });
    },
  },
  extraReducers: (builder) => {},
});

export const studentActions = studentSlice.actions;
export { studentSlice };
