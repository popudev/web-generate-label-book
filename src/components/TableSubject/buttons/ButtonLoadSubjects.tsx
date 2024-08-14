"use client";

import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import React from "react";
import { subjectActions } from "@/store/subject/subjectSlice";
import { title } from "process";
import { useAppDispatch } from "@/store/hooks";

const data = [
  {
    title: "Lớp 1, 2",
    subjectNames: [
      "Tiếng Việt tập 1",
      "Tiếng Việt tập 2",
      "Toán",
      "TN & XH",
      "Đạo đức",
      "Âm nhạc",
      "Mỹ thuật",
      "HĐ trải nghiệm",
      "GDTC",
      "VBT Tiếng việt 1",
      "VBT Tiếng việt 2",
      "VBT Toán 1",
      "VBT Toán 2",
      "Tập viết 1",
      "Tập viết 2",
      "VBT Mỹ thuật",
      "Tiếng Anh",
    ],
  },
  {
    title: "Lớp 3",
    subjectNames: [
      "Tiếng Việt tập 1",
      "Tiếng Việt tập 2",
      "Toán",
      "TN & XH",
      "Đạo đức",
      "Âm nhạc",
      "Mỹ thuật",
      "HĐ trải nghiệm",
      "GDTC",
      "VBT Tiếng việt 1",
      "VBT Tiếng việt 2",
      "VBT Toán 1",
      "VBT Toán 2",
      "Tập viết 1",
      "Tập viết 2",
      "VBT Mỹ thuật",
      "Tiếng Anh 1",
      "Tiếng Anh 2",
      "Công nghệ",
      "Tin học",
    ],
  },
  {
    title: "Lớp 4, 5",
    subjectNames: [
      "Tiếng Việt tập 1",
      "Tiếng Việt tập 2",
      "Toán",
      "Khoa học",
      "Đạo đức",
      "Âm nhạc",
      "Mỹ thuật",
      "HĐ trải nghiệm",
      "GDTC",
      "VBT Toán 1",
      "VBT Toán 2",
      "VBT Tiếng việt 1",
      "VBT Tiếng việt 2",
      "VBT Mỹ thuật",
      "Lịch sử & Địa lí",
      "Tiếng Anh 1",
      "Tiếng Anh 2",
      "Công nghệ",
      "Tin học",
    ],
  },

  {
    title: "Lớp 6, 7, 8, 9",
    subjectNames: [
      "Toán 1",
      "Toán 2",
      "Ngữ văn 1",
      "Ngữ văn 2",
      "LS&ĐL",
      "Khoa học TN",
      "GDCD",
      "Công nghệ",
      "GDTC",
      "Âm nhạc",
      "Mỹ thuật",
      "HĐTN-Hướng nghiệp",
      "Tin học",
      "Anh văn",
    ],
  },

  {
    title: "Vở bài tập thêm cho THCS",
    subjectNames: [
      "Bài soạn Ngữ Văn",
      "Bài học Ngữ Văn",
      "Bài soạn Anh Văn",
      "Bài học Anh Văn",
      "Bài soạn Lịch Sử",
      "Bài học Lịch Sử",
      "Bài soạn Địa Lý",
      "Bài học Địa Lý",
      "Toán",
      "Toán",
      "Hoá",
      "Lý",
      "Sinh học",
      "Công nghệ",
      "Tin học",
      "GDCD",
      "HĐTN, HN",
      "Mỹ thuật",
      "Âm nhạc",
    ],
  },
];

export const ButtonLoadSubjects = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const apiRef = React.useRef<any>(null);

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
        <DialogTitle>Tải danh sách tập</DialogTitle>
        <DialogContent>
          <Autocomplete
            ref={apiRef}
            options={data}
            fullWidth
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => {
              dispatch(subjectActions.setSubjectNames(newValue?.subjectNames || []));
              handleClose();
            }}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            renderInput={(params) => <TextField {...params} label="Tập" />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
