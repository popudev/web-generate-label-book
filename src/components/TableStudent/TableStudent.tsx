"use client";

import { Box, Button, Divider, Grid } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { ButtonAddStudents } from "./buttons/ButtonAddStudents";
import { ButtonDeleteStudents } from "./buttons/ButtonDeleteStudents";
import { ButtonLoadStudents } from "./buttons/ButtonLoadStudents";
import { LabelSelectors } from "@/store/label/labelSelector";
import { StudentSelectors } from "@/store/student/studentSelectors";
import { labelActions } from "@/store/label/labelSlice";
import { studentActions } from "@/store/student/studentSlice";

export const TableStudent = () => {
  const studentIds = useAppSelector(LabelSelectors.getStudentIds());
  const studentNames = useAppSelector(StudentSelectors.getStudentNames());

  const rows = useMemo(() => {
    return studentNames.map((studentName, index) => ({
      id: index + 1,
      studentName,
    }));
  }, [studentNames]);

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(studentActions.removeStudentNames(studentIds));
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Divider>Danh sách học sinh</Divider>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={6}>
          <ButtonLoadStudents />
        </Grid>

        <Grid item xs={6}>
          <ButtonAddStudents />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth>
            Lưu
          </Button>
        </Grid>
        <Grid item xs={6}>
          <ButtonDeleteStudents onDelete={handleDelete} />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={[
                { field: "id", headerName: "STT" },
                {
                  field: "studentName",
                  headerName: "Họ và tên",
                  width: 200,
                  editable: true,
                },
              ]}
              checkboxSelection
              slots={{ toolbar: CustomToolbar }}
              processRowUpdate={(params) => {
                const { id, studentName } = params;
                dispatch(studentActions.updateStudentName({ id: id, studentName: studentName }));
                return params;
              }}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                dispatch(labelActions.setStudentIds(newRowSelectionModel as number[]));
              }}
              rowSelectionModel={studentIds}
              disableRowSelectionOnClick
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ px: 2 }}>
      <GridToolbarQuickFilter
        sx={{
          width: "100%",
        }}
        placeholder="Tìm kiếm..."
      />
    </GridToolbarContainer>
  );
}
