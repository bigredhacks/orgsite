// import Countdown from "../components/Countdown";
import { Box, Stack } from "@mui/material";
import Events from "../components/Events";
import { Hero } from "../components/Hero";
import MiniTeams from "../components/MiniTeams";
import { TopBorder } from "../components/TopBorder";
import FAQPage from "../pages/faq";
import SponsorsPage from "../pages/sponsors";

export default function HomePage() {
  return (
    <Stack useFlexGap spacing={10}>
      <Hero />
      <MiniTeams />


      <Box>
        <TopBorder />
        <Events />
        <FAQPage />
      </Box>

      <SponsorsPage />
      {/* <Countdown targetDate={1709960400000}></Countdown> */}
    </Stack>
  );
}
