import "./styles.css";

import { Box, Grid } from "@mui/material";
import React, { PropsWithChildren, forwardRef } from "react";

import { Lable } from "../Lable";

type Props = {
  page: {
    schoolName: string;
    className: string;
    studentName: string;
    subjectName: string;
    yearDisplay: string;
  }[];
};

export const A4Page: React.FC<Props> = ({ page }) => {
  return (
    <Box
      sx={{
        width: "792.96px",
        height: "1122.24px",
        border: "2px solid #000",
        overflow: "hidden",
        p: "20px",
        transform: "scale(1)",
        mb: "20px",
      }}
    >
      <Grid container spacing={"20px"}>
        {page.map((lable, index) => (
          <Grid key={index} item xs={6}>
            <Lable
              school={lable.schoolName || " ".repeat(33)}
              fullName={lable.studentName || " ".repeat(25)}
              subject={lable.subjectName || " ".repeat(20)}
              class={lable.className || " ".repeat(5)}
              year={lable.yearDisplay}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
