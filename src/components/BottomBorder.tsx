import { Box } from "@mui/material";
import ZigZag from "../../public/zigzag-bg.svg";

export const BottomBorder = () => {
  return (
    <Box sx={{ width: "100%", mb: -2, transform: "rotate(180deg)" }} component="img" src={ZigZag}></Box>
  );
};
