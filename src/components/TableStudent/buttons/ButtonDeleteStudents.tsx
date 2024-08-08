"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import React from "react";

export const ButtonDeleteStudents = ({ onDelete }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onDelete();
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="error" fullWidth onClick={handleClickOpen}>
        Xóa học sinh
      </Button>
      <Dialog open={open} fullWidth maxWidth={"lg"}>
        <DialogTitle> Xóa học sinh</DialogTitle>
        <DialogContent>
          <DialogContentText>Bạn có chắc chắn muốn xóa ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="warning">
            Đồng ý
          </Button>
          <Button onClick={handleClose}>Hủy</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
