import { Box, Typography } from "@mui/material";
import teamsData from "../data/teamsData.ts";
import "@fontsource/inter";
import "@fontsource/museomoderno";
import UprightTeamsDropdown from "./UprightTeamsDropdown.tsx";

export default function MiniTeams() {
  return (
    <>
    <Box sx={{ width: "100vw", mx: "auto", maxWidth: "800px", mt: "2"}}>
      <Typography variant="body1" sx={{mb:2}}>
      Each year, we host BigRed//Hacks, a student-run hackathon where you can learn new skills, 
      build your portfolio, attend fun sessions and connect with other hackers in the Cornell community.
      </Typography>
      </Box>
      <Box sx={{
        marginTop: "10vw",
        display: "grid",
        gridTemplateColumns: "6fr 6fr",
        gridColumnGap: "1em",
        gridRowGap: "10vw",
        px: "10vw"
       }}>
        {teamsData.map((props) => (
          <UprightTeamsDropdown {...props} />
        ))}
      </Box>
    </>
  );
}
