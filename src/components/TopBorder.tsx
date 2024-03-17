import { Box } from "@mui/material";
import ZigZag from "../../public/zigzag-bg.svg";

export const TopBorder = () => {
  return (
    <Box sx={{ width: "100%", mb: -2 }} component="img" src={ZigZag}></Box>
  );
};
