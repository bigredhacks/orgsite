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
        Anim incididunt magna elit fugiat fugiat. Sit occaecat qui aliqua ea
        magna in ex eu commodo ipsum ad. Irure dolore do occaecat et cillum
        anim.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {teamsData.map((props) => (
          <TeamsDropdown {...props} />
        ))}
      </Box>
    </Box>
  );
}
