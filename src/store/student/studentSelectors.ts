import { StudentState } from "./studentSlice";
import { createSelector } from "@reduxjs/toolkit";

interface PartialStudentState {
  student: StudentState;
}

const studentStateSelector = (state: PartialStudentState) => state.student;

export const StudentSelectors = {
  studentStateSelector,

  getStudentNameByIds: (ids: number[]) =>
    createSelector(studentStateSelector, ({ studentNames }) => {
      return studentNames.filter((_, index) => ids.includes(index + 1));
    }),

  getStudents: () =>
    createSelector(studentStateSelector, ({ students }) => {
      return students;
    }),

  getStudentNames: () =>
    createSelector(studentStateSelector, ({ studentNames }) => {
      return studentNames;
    }),
};
