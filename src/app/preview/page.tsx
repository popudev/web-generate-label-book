"use client";

import { Box, Button, Toolbar, Typography } from "@mui/material";

import { A4Page } from "@/components/A4Page";
import { BottomBar } from "@/components/BottomBar/BottomBar";
import { LableSelectors } from "@/store/lable/lableSelector";
import { StudentSelectors } from "@/store/student/studentSelectors";
import { SubjectSelectors } from "@/store/subject/subjectSelectors";
import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Preview() {
  const router = useRouter();
  const { studentIds, subjectIds, className, schoolName } = useAppSelector(LableSelectors.getLableState());

  const students = useAppSelector(StudentSelectors.getStudentNameByIds(studentIds));
  const subjects = useAppSelector(SubjectSelectors.getSubjectNameByIds(subjectIds));

  const yearDisplay = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    return `${currentYear} - ${nextYear}`;
  }, []);

  const pages = useMemo(() => {
    const labels: any[] = [];
    const pages: any[] = [];
    // Create pairs of studentName and subjectName
    students.forEach((studentName) => {
      subjects.forEach((subjectName) => {
        labels.push({
          schoolName,
          className,
          studentName,
          subjectName,
          yearDisplay,
        });
      });
    });

    // Split labels into pages of 10 items each
    for (let i = 0; i < labels.length; i += 10) {
      const page = labels.slice(i, i + 10);

      // Add empty labels if the page has fewer than 10 items
      while (page.length < 10) {
        page.push({ studentName: "", subjectName: "", schoolName, className, yearDisplay });
      }

      pages.push(page);
    }

    return pages;
  }, [students, subjects]);

  return (
    <main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            py: 2,
          }}
        >
          Bản xem trước
        </Typography>
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
          }}
        >
          {pages.map((page, index) => (
            <A4Page key={index} page={page} />
          ))}
        </Box>
        <BottomBar>
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              color="info"
              onClick={() => {
                router.back();
              }}
            >
              Chỉnh sửa
            </Button>
            <Button variant="contained" color="success">
              Tải về
            </Button>
          </Toolbar>
        </BottomBar>
      </Box>
    </main>
  );
}
