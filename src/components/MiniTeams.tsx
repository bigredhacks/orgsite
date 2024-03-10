import { Box } from "@mui/material";
import teamsData from "../data/teamsData.ts";
import "@fontsource/inter";
import "@fontsource/museomoderno";
import UprightTeamsDropdown from "./UprightTeamsDropdown.tsx";

export default function MiniTeams() {
  return (
    <>
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
