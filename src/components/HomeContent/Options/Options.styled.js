import { Typography, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";

export const ConnectCreateFindBox = styled(Box)(() => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  paddingLeft: "2rem",
  paddingRight: "3.2rem",
  height: "18rem",
  width: "22rem",
  borderRadius: "0.75rem",
  background: "rgba(229, 231, 248, 0.12)",
}));
export const BoldTypography = styled(Typography)(() => ({
  color: "#FFFFFF",
  boxSizing: "border-box",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: {
    md: 56,
    sm: 48,
    xs: 40,
  },

  lineHeight: { xs: 40, sm: 48, md: 66 },
}));
export const StandartTypography = styled(Typography)(() => ({
  color: "#E5E7F8",
  boxSizing: "border-box",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "133%",
}));
export const StyledPaper = styled(Paper)(() => ({
  width: "46rem",
  height: "5.5rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0",

  background: "#FFFFFF",
  boxShadow: "0px 12px 44px -8px rgba(64, 79, 216, 0.24)",
  borderRadius: "12px",
  paddingLeft: "1.5rem",
}));
