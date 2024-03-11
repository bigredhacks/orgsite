import { Box, Typography } from "@mui/material";
import TeamsDropdown from "../components/TeamsDropdown";

import teamsData from "../data/teamsData.ts";
import "@fontsource/inter"; 
import "@fontsource/museomoderno";

export default function TeamsPage() {
  return (
    <Box sx={{ width: "80vw", mx: "auto", maxWidth: "690px" }}>
      <Typography variant="h3" sx={{ fontFamily: 'MuseoModerno, sans-serif', mb: 2 }}>teams</Typography>
      <Typography variant="body1" sx={{mb:2}}>
      BigRed//Hacks is the organization behind the annual BigRed//Hacks hackathon during the Fall and the LittleRed//Hacks or BigRed//Makeathon during the spring! Our sub-teams include Logistics, Sponsorships, WebDev, and Design. As one of the largest undergraduate hackathons in the country, we bring in over 400+ students from across the Northeast to Cornell University each fall. Our organization strive to encourage students of all experience level to hack in our event and create a collaborative and inclusive environment for everyone!
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {teamsData.map((props) => (
          <TeamsDropdown {...props} />
        ))}
      </Box>
    </Box>
  );
}
