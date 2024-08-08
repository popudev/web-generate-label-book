"use client";

import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import generatePDF, { Margin, Resolution } from "react-to-pdf";

import { A4Page } from "@/components/A4Page";
import { A4Text } from "@/components/A4Text/A4Text";
import { AutocompleteHint } from "@/components/AutocompleteHint/AutocompleteHint";
import { BottomBar } from "@/components/BottomBar/BottomBar";
import DeleteIcon from "@mui/icons-material/Delete";
import { Lable } from "@/components/Lable";
import { TableStudent } from "@/components/TableStudent";
import { TableSubject } from "@/components/TableSubject";
import { headers } from "next/headers";
import { usePDF } from "react-to-pdf";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useRouter } from "next/navigation";

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
  let effectiveLength = calculateEffectiveLength(input);

  if (effectiveLength >= targetLength) {
    return input;
  }

  let numSpacesToAdd = targetLength - effectiveLength;
  return input + " ".repeat(numSpacesToAdd);
}
export default function Home() {
  const router = useRouter();
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    // print: async (printIframe: HTMLIFrameElement) => {
    //   // Do whatever you want here, including asynchronous work
    //   await generateAndSavePDF(printIframe);
    // },
  });

  const handleContinue = () => {
    router.push("/preview");
  };

  return (
    <main>
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          py: 2,
        }}
      >
        Tạo nhãn vỡ
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Divider>Thông tin cơ bản</Divider>
          </Grid>
          <Grid item xs={12}>
            <AutocompleteHint
              label="Trường"
              options={["Trường THCS xã Hiệp Tùng", "Trường Tiểu học xã Hiệp Tùng"]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Lớp" defaultValue={"1A"} fullWidth />
          </Grid>
          <TableStudent />
          <TableSubject />
        </Grid>
      </Container>
      <BottomBar>
        <Toolbar
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" color="success" onClick={handleContinue}>
            Tiếp tục
          </Button>
        </Toolbar>
      </BottomBar>
    </main>
  );
}
