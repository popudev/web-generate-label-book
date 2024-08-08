import { SubjectState } from "./subjectSlice";
import { createSelector } from "@reduxjs/toolkit";

interface PartialSubjectState {
  subject: SubjectState;
}

const subjectStateSelector = (state: PartialSubjectState) => state.subject;

export const SubjectSelectors = {
  subjectStateSelector,

  getSubjectNameByIds: (ids: number[]) =>
    createSelector(subjectStateSelector, ({ subjectNames }) => {
      return subjectNames.filter((_, index) => ids.includes(index + 1));
    }),

  getSubjects: () =>
    createSelector(subjectStateSelector, ({ subjects }) => {
      return subjects;
    }),

  getSubjectNames: () =>
    createSelector(subjectStateSelector, ({ subjectNames }) => {
      return subjectNames;
    }),
};
