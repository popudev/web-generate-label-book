"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

import React from "react";
import { subjectActions } from "@/store/subject/subjectSlice";
import { useAppDispatch } from "@/store/hooks";

export const ButtonAddSubjects = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    dispatch(subjectActions.addSubjectNames(value));
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" fullWidth onClick={handleClickOpen}>
        Thêm tập
      </Button>
      <Dialog open={open} fullWidth maxWidth={"lg"}>
        <DialogTitle>Thêm tập</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Có thể nhập nhiều tập cùng lúc bằng cách nhập mỗi tập một dòng.
          </DialogContentText>
          <TextField
            multiline
            autoComplete="off"
            required
            label="Tên tập"
            fullWidth
            variant="standard"
            sx={{ mt: 2 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleSave}>Lưu</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
