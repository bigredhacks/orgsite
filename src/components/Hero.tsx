import "@fontsource/museomoderno";
import { Box, Stack, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Stack spacing={5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background:
            "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 185, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
        }}
      >
        <img style={{ display: "block" }} src="/hero.svg"></img>
        <Typography
          fontFamily="MuseoModerno, sans-serif"
          fontSize="70px"
          align="right"
          lineHeight={2}
          fontWeight="400"
        >
          big <br /> <span style={{ color: "red" }}>red</span> <br /> hacks
        </Typography>
      </Box>

      <Box px={20}>
        <Typography variant="h6">
          Each year, we host{" "}
          <Typography variant="h6" fontWeight={"bold"} display={"inline"}>
            BigRed//Hacks
          </Typography>
          , a student-run hackathon where you can learn new skills, build your
          portfolio, attend fun sessions and connect with other hackers in the
          Cornell community.
        </Typography>
      </Box>
    </Stack>
  );
};
