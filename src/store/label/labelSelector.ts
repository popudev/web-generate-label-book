import { LabelState } from "./labelSlice";
import { createSelector } from "@reduxjs/toolkit";
import { get } from "http";

interface PartialLabelState {
  label: LabelState;
}

const labelStateSelector = (state: PartialLabelState) => state.label;

export const LabelSelectors = {
  labelStateSelector,

  getSchoolName: () =>
    createSelector(labelStateSelector, ({ label }) => {
      return label.schoolName;
    }),

  getClassName: () =>
    createSelector(labelStateSelector, ({ label }) => {
      return label.className;
    }),

  getLabelState: () =>
    createSelector(labelStateSelector, ({ label }) => {
      return label;
    }),

  getStudentIds: () =>
    createSelector(labelStateSelector, ({ label }) => {
      return label.studentIds;
    }),

  getSubjectIds: () =>
    createSelector(labelStateSelector, ({ label }) => {
      return label.subjectIds;
    }),
};
