"use client";

import { AutocompleteHint } from "../AutocompleteHint/AutocompleteHint";
import { LabelSelectors } from "@/store/label/labelSelector";
import { labelActions } from "@/store/label/labelSlice";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";

export const InputClassName = () => {
  const dispatch = useDispatch();
  const className = useAppSelector(LabelSelectors.getClassName());
  return (
    <AutocompleteHint
      initialValue={className}
      label="Lớp"
      options={["1A", "2A", "3A", "4A", "5A", "6", "7", "8", "9"]}
      onChange={(value) => {
        dispatch(labelActions.setClassName(value));
      }}
    />
  );
};
