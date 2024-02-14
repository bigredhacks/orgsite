import { Box, Typography } from "@mui/material";
import TeamsDropdown from "../components/TeamsDropdown";

import teamsData from "../data/teamsData.ts";
import TeamMemberList from "../components/TeamMemberList.tsx";
import { useState } from "react";

export default function TeamsPage() {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <Box sx={{ width: "80vw", mx: "auto", maxWidth: "690px" }}>
      <Typography variant="h1">teams</Typography>
      <Typography variant="body1">
        Anim incididunt magna elit fugiat fugiat. Sit occaecat qui aliqua ea
        magna in ex eu commodo ipsum ad. Irure dolore do occaecat et cillum
        anim.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {teamsData.map((props) => (
          <>
            <TeamsDropdown {...props} />
            {showMembers ? <TeamMemberList teamName={props.teamName} /> : <></>}
          </>
        ))}
      </Box>
    </Box>
  );
}
