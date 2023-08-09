import styled from "styled-components";
import { AppBar, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

export const CustomizedAppBar = styled(AppBar)({
  // position: "static",
  // position: "relative !important",
  // top: "1px !important",
  backgroundColor: "white !important",
  color: "black !important",
});
export const CustomizedLoginButton = styled(Button)({
  width: "100% !important",
  color: "#ffffff !important",
  fontSize: "14px !important",
  padding: "8.75px 28px !important",
  backgroundColor: "#000000 !important",
  textTransform: "capitalize !important",
  marginBottom: "15px !important",
  border: "1px solid red !important",
  borderRadius: "10px !important",
  "&:hover": {},
});
export const CustomizedRegisterButton = styled(Button)({
  width: "100% !important",
  color: "#000000 !important",
  fontSize: "14px !important",
  padding: "8.75px 28px !important",
  backgroundColor: "#ffffff !important",
  textTransform: "capitalize !important",
  border: "1px solid red !important",
  borderRadius: "10px !important",
  "&:hover": {
    backgroundColor: "#000000 !important",
    color: "#ffffff !important",
  },
});
export const CustomizedBackButton = styled(Button)({
  display: "flex !important",
  justifyContent: "flex-start !important",
  alignItems: "center !important",
  color: "#000000 !important",
  fontWeight: "bold !important",
  // marginBottom: "40px !impotrant",
  marginTop: "10px !important",
  background: "none !important",
});
export const CustomizedTypography = styled(Typography)({
  width: "18.75rem",
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0px",
});
export const CustomizedMultiLingualButton = styled(Button)({
  color: "#000000 !important",
  fontSize: "11px !important",
  fontWeight: "100 !important",
  textTransform: "capitalize !important",
  "&:hover": {
    backgroundColor: "transparent !important",
  },
});
