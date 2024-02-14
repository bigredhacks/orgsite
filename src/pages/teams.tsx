import { Box, Typography } from "@mui/material";
import TeamsDropdown from "../components/TeamsDropdown";

import teamsData from "../data/teams.ts";

export default function TeamsPage() {
  return (
    <Box sx={{ width: "80%", mx: "auto", maxWidth: "690px" }}>
      <Typography variant="h1">teams</Typography>
      <Typography variant="body1">
        Anim incididunt magna elit fugiat fugiat. Sit occaecat qui aliqua ea
        magna in ex eu commodo ipsum ad. Irure dolore do occaecat et cillum
        anim.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {teamsData.map(
          ({
            sx,
            imgSrc,
            teamName,
            description,
            placeImgRight,
            topLeft,
            topRight,
            bottomLeft,
            bottomRight,
          }) => (
            <TeamsDropdown
              key={teamName}
              sx={sx}
              imgSrc={imgSrc}
              teamName={teamName}
              description={description}
              {...{ topLeft, topRight, bottomLeft, bottomRight, placeImgRight }}
            />
          )
        )}
      </Box>
    </Box>
  );
}
