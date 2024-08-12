"use client";

import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useMemo, useRef } from "react";

import { A4Page } from "@/components/A4Page";
import { BottomBar } from "@/components/BottomBar/BottomBar";
import { LabelSelectors } from "@/store/label/labelSelector";
import { StudentSelectors } from "@/store/student/studentSelectors";
import { SubjectSelectors } from "@/store/subject/subjectSelectors";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useAppSelector } from "@/store/hooks";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";

const generatePDF = () => {
  const input = document.getElementById("label-book");

  if (!input) return;

  html2canvas(input, { useCORS: true }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4"); // Portrait mode, millimeters, A4 size

    // Lấy kích thước của phần tử HTML
    const elementWidth = input.offsetWidth;
    const elementHeight = input.offsetHeight;

    // Kích thước của trang PDF A4
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Tính toán tỷ lệ để điều chỉnh kích thước hình ảnh
    const scale = pdfWidth / elementWidth;
    const imgWidth = pdfWidth;
    const imgHeight = elementHeight * scale;

    // Nếu hình ảnh dài hơn trang A4, tạo nhiều trang
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("document.pdf");
  });
};

export default function Preview() {
  const componentRef = useRef<any>();

  const router = useRouter();
  const { studentIds, subjectIds, className, schoolName } = useAppSelector(LabelSelectors.getLabelState());

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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownload = () => {
    // generatePDF();
  };

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
          <Box ref={componentRef} id="label-book">
            {pages.map((page, index) => (
              <A4Page key={index} page={page} />
            ))}
          </Box>
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
            <Button variant="contained" color="warning" onClick={handlePrint}>
              In
            </Button>
            <Button variant="contained" color="success" onClick={handleDownload}>
              Tải về
            </Button>
          </Toolbar>
        </BottomBar>
      </Box>
    </main>
  );
}
