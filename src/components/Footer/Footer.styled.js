import { Grid, Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(() => ({
  border: "1px solid black",
  width: "8rem",
  height: "3.75rem",
  display: "flex",
  justifyContent: "center",
}));
export const StyledGrid = styled(Grid)(() => ({
  height: "6.25rem",
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));