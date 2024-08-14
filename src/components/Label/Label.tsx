import { Box, Grid } from "@mui/material";

import { A4Text } from "../A4Text/A4Text";
import React from "react";

type Props = {
  index: number;
  school: string;
  fullName: string;
  class: string;
  year: string;
  subject: string;
};

function calculateEffectiveLength(input: string): number {
  let length = 0;
  for (const char of input) {
    if (char >= "A" && char <= "Z") {
      length += 2; // Chữ viết hoa tính bằng 2 ký tự thường
    } else {
      length += 1; // Chữ thường tính bằng 1 ký tự
    }
  }
  return length;
}

function padString(input: string, targetLength: number): string {
  let effectiveLength = input.length;

  if (effectiveLength >= targetLength) {
    return input;
  }

  let numSpacesToAdd = targetLength - effectiveLength;
  return input + " ".repeat(numSpacesToAdd);
}

export const Label: React.FC<Props> = ({ index, school, fullName, class: className, year, subject }) => {
  return (
    <Box
      sx={{
        position: "relative",
        lineHeight: 0,
      }}
    >
      <img src={`labels/1/${index + 1}.jpg`} width={"100%"} height={"100%"} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pl: "50px",
          pt: "50px",
          pr: "35px",
        }}
      >
        <A4Text label="Trường" fontSize={9}>
          {` ${school} `}
        </A4Text>
        <A4Text
          label="Họ tên"
          fontSize={12}
          style={{
            fontFamily: "HP001_4_hang_1_o_ly_bold",
          }}
        >
          {` ${fullName} `}
        </A4Text>
        <Grid container>
          <Grid item xs={calculateEffectiveLength(subject) > 12 ? 8 : 6}>
            <A4Text label="Tập" fontSize={10}>
              {` ${subject} `}
            </A4Text>
          </Grid>
          <Grid item xs={calculateEffectiveLength(subject) > 12 ? 4 : 6}>
            <A4Text
              label="Lớp"
              fontSize={10}
              style={{
                // backgroundColor: "green",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 100,
                overflow: "hidden",
              }}
            >
              {` ${padString(className, 3)} `}
            </A4Text>
          </Grid>
        </Grid>
        <A4Text label="Năm học" fontSize={10}>
          {` ${year} `}
        </A4Text>
      </Box>
    </Box>
  );
};
