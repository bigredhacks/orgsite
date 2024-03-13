import "@fontsource/museomoderno";
import { Box, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background:
          "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 185, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
      }}
    >
      <img style={{ display: "block" }} src="/hero_bears.png"></img>
      <Typography
        fontFamily="MuseoModerno, sans-serif"
        fontSize="70px"
        align="right"
        lineHeight={2}
        fontWeight="400"
      >
        Big <br /> <span style={{ color: "red" }}>Red</span> <br /> Hacks
      </Typography>
    </Box>
  );
};
