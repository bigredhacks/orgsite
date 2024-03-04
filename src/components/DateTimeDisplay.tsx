import React from "react";
import { Box, Typography } from "@mui/material";

export type dateTimeType = {
  value: number;
  type: string;
};

const DateTimeDisplay = ({ value, type }: dateTimeType) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ fontSize: "70px" }} fontWeight={600}>
        {String(value).padStart(2, "0")}
      </Typography>
      <Typography sx={{ fontSize: "40px" }} fontWeight={600}>{type}</Typography>
    </Box>
  );
};

export default DateTimeDisplay;
