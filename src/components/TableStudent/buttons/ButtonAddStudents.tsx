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
import { studentActions } from "@/store/student/studentSlice";
import { useAppDispatch } from "@/store/hooks";

export const ButtonAddStudents = () => {
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
    dispatch(studentActions.addStudentNames(value));
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" fullWidth onClick={handleClickOpen}>
        Thêm học sinh
      </Button>
      <Dialog open={open} fullWidth maxWidth={"lg"}>
        <DialogTitle>Thêm học sinh</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Có thể nhập nhiều học sinh cùng lúc bằng cách nhập mỗi học sinh một dòng.
          </DialogContentText>
          <TextField
            multiline
            autoComplete="off"
            required
            name="fullName"
            label="Họ và tên"
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
