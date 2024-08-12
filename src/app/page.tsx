"use client";

import { Button, Container, Divider, Grid, Toolbar, Typography } from "@mui/material";

import { BottomBar } from "@/components/BottomBar/BottomBar";
import { InputClassName } from "@/components/InputClassName";
import { InputSchoolName } from "@/components/InputSchoolName";
import { TableStudent } from "@/components/TableStudent";
import { TableSubject } from "@/components/TableSubject";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
            <InputSchoolName />
          </Grid>
          <Grid item xs={12}>
            <InputClassName />
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
