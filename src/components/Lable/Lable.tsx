import { Box, Grid } from "@mui/material";

import { A4Text } from "../A4Text/A4Text";
import React from "react";

type Props = {
  school: string;
  fullName: string;
  class: string;
  year: string;
  subject: string;
};

export const Lable: React.FC<Props> = ({ school, fullName, class: className, year, subject }) => {
  return (
    <Box
      sx={{
        position: "relative",
        lineHeight: 0,
      }}
    >
      <img src="temp.jpg" width={"100%"} height={"100%"} />
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
          <Grid item xs={8}>
            <A4Text label="Tập" fontSize={10}>
              {` ${subject} `}
            </A4Text>
          </Grid>
          <Grid item xs={4}>
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
              {` ${className} `}
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
