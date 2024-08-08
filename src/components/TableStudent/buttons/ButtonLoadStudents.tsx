"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

import React from "react";

export const ButtonLoadStudents = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" fullWidth onClick={handleClickOpen}>
        Tải danh sách
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"lg"}>
        <DialogTitle>Thêm học sinh</DialogTitle>
        <DialogContent>
          <TextField required name="fullName" label="Họ và tên" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button>Lưu</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
