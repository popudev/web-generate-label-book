import { LableState } from "./lableSlice";
import { createSelector } from "@reduxjs/toolkit";

interface PartialLableState {
  lable: LableState;
}

const lableStateSelector = (state: PartialLableState) => state.lable;

export const LableSelectors = {
  lableStateSelector,

  getLableState: () =>
    createSelector(lableStateSelector, ({ lable }) => {
      return lable;
    }),

  getStudentIds: () =>
    createSelector(lableStateSelector, ({ lable }) => {
      return lable.studentIds;
    }),

  getSubjectIds: () =>
    createSelector(lableStateSelector, ({ lable }) => {
      return lable.subjectIds;
    }),
};
