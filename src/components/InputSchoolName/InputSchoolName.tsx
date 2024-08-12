"use client";

import { AutocompleteHint } from "../AutocompleteHint/AutocompleteHint";
import { LabelSelectors } from "@/store/label/labelSelector";
import { labelActions } from "@/store/label/labelSlice";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";

export const InputSchoolName = () => {
  const dispatch = useDispatch();
  const schoolName = useAppSelector(LabelSelectors.getSchoolName());
  return (
    <AutocompleteHint
      label="Trường"
      initialValue={schoolName}
      options={["Trường THCS xã Hiệp Tùng", "Trường Tiểu học xã Hiệp Tùng"]}
      onChange={(value) => {
        dispatch(labelActions.setSchoolName(value));
      }}
    />
  );
};
