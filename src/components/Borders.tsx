import { Box } from "@mui/material";
import ZigZag from "/zigzag-bg.svg";

export const TopBorder = () => {
  return (
    <Box sx={{ width: "100%", mb: -2 }} component="img" src={ZigZag}></Box>
  );
};

export const BottomBorder = () => {
  return (
    <Box sx={{ width: "100%", mb: -2, transform: "rotate(180deg)" }} component="img" src={ZigZag}></Box>
  );
};