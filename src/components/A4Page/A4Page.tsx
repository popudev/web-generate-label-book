import "./styles.css";

import { Box, Grid } from "@mui/material";
import React, { PropsWithChildren, forwardRef } from "react";

import { Label } from "../Label";

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
      }}
    >
      <Grid container spacing={"20px"}>
        {page.map((label, index) => (
          <Grid key={index} item xs={6}>
            <Label
              index={index}
              school={label.schoolName || " ".repeat(33)}
              fullName={label.studentName || " ".repeat(25)}
              subject={label.subjectName || " ".repeat(20)}
              class={label.className || " ".repeat(5)}
              year={label.yearDisplay}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
