"use client";

import { Box, Button, Divider, Grid } from "@mui/material";
import {
  DataGrid,
  GridRowSelectionModel,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { ButtonAddSubjects } from "./buttons/ButtonAddSubjects";
import { ButtonDeleteSubjects } from "./buttons/ButtonDeleteSubjects";
import { ButtonLoadSubjects } from "./buttons/ButtonLoadSubjects";
import { LableSelectors } from "@/store/lable/lableSelector";
import { SubjectSelectors } from "@/store/subject/subjectSelectors";
import { lableActions } from "@/store/lable/lableSlice";
import { subjectActions } from "@/store/subject/subjectSlice";

export const TableSubject = () => {
  const subjectIds = useAppSelector(LableSelectors.getSubjectIds());
  const subjectNames = useAppSelector(SubjectSelectors.getSubjectNames());

  const rows = useMemo(() => {
    return subjectNames.map((subjectName, index) => ({
      id: index + 1,
      subjectName,
    }));
  }, [subjectNames]);

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(subjectActions.removeSubjectNames(subjectIds));
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Divider sx={{ py: 1 }}>Danh sách tập</Divider>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={6}>
          <ButtonLoadSubjects />
        </Grid>

        <Grid item xs={6}>
          <ButtonAddSubjects />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth>
            Lưu
          </Button>
        </Grid>
        <Grid item xs={6}>
          <ButtonDeleteSubjects onDelete={handleDelete} />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={[
                { field: "id", headerName: "STT" },
                {
                  field: "subjectName",
                  headerName: "Tên tập",
                  width: 200,
                  editable: true,
                },
              ]}
              checkboxSelection
              slots={{ toolbar: CustomToolbar }}
              processRowUpdate={(params) => {
                const { id, subjectName } = params;
                dispatch(subjectActions.updateSubjectName({ id: id, subjectName: subjectName }));
                return params;
              }}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                dispatch(lableActions.setSubjectIds(newRowSelectionModel as number[]));
              }}
              rowSelectionModel={subjectIds}
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
