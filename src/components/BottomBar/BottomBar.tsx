import { AppBar, Box, Button, Toolbar } from "@mui/material";

export const BottomBar = ({ children }) => {
  return (
    <Box>
      <Toolbar />
      <AppBar
        sx={{
          bgcolor: "#fff",
          bottom: 0,
          top: "unset",
        }}
      >
        {children}
      </AppBar>
    </Box>
  );
};
