import "./styles.css";

import { Box, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  label?: string;
  style?: React.CSSProperties;
  fontSize: number;
};
export const A4Text: React.FC<Props> = ({ label, children, style, fontSize }) => {
  return (
    <Box
      style={{
        width: "fit-content",
        height: "fit-content",
        ...style,
      }}
    >
      <label
        className="a4_label"
        style={{
          fontSize: 12,
          marginRight: 5,
        }}
      >
        {label}:
      </label>
      <span
        className="a4_text"
        style={{
          fontSize: fontSize * 1.5,
          lineHeight: fontSize * 1.5 * 2 + "px",
          whiteSpace: "pre-wrap",
        }}
      >
        {children}
      </span>
      <div />
    </Box>
  );
};
