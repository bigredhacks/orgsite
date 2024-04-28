import { Box, Typography } from "@mui/material";
// import TeamsDropdown from "../components/TeamsDropdown";

import eventsData from "../data/eventsData.ts";
// import teamsData from "../data/teamsData.ts";
import EventsBlock from "../components/EventsBlock.tsx"
import "@fontsource/inter"; 
import "@fontsource/museomoderno";
export default function EventsPage() {
  return (
    <Box sx={{ width: "80vw", mx: "auto", maxWidth: "690px" }}>
      <Typography variant="h3" sx={{ fontFamily: 'MuseoModerno, sans-serif', mb: 2 }}>events</Typography>
      <Typography variant="body1" sx={{mb:2, fontFamily: 'Inter, sans-serif', }}>
      BigRed//Hacks is the organization behind the annual BigRed//Hacks hackathon during the Fall and the LittleRed//Hacks or BigRed//Makeathon during the spring!
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: 'MuseoModerno, sans-serif', mb: 2, mt: 3}}>upcoming</Typography>
      <Box><EventsBlock {...eventsData[0]}/></Box>
      <Typography variant="h3" sx={{ fontFamily: 'MuseoModerno, sans-serif', mb: 2, mt: 3}}>past</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {eventsData.slice(1).map((props) => (
          <EventsBlock {...props} />
        ))}
      </Box>
    </Box>
  )
}
