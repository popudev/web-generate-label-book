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
              school={label.schoolName || String.fromCharCode(160).repeat(33)}
              fullName={label.studentName || String.fromCharCode(160).repeat(25)}
              subject={label.subjectName || String.fromCharCode(160).repeat(20)}
              class={label.className || String.fromCharCode(160).repeat(5)}
              year={label.yearDisplay}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
