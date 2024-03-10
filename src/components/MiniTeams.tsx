import { Box } from "@mui/material";
import teamsData from "../data/teamsData.ts";
import "@fontsource/inter";
import "@fontsource/museomoderno";
import UprightTeamsDropdown from "./UprightTeamsDropdown.tsx";

export default function MiniTeams() {
  return (
    <>
      <Box sx={{
        marginTop: "3em",
        display: "grid",
        gridTemplateColumns: "6fr 6fr",
        gridColumnGap: "1em",
        gridRowGap: "5em",
        px: "1em"
       }}>
        {teamsData.map((props) => (
          <UprightTeamsDropdown {...props} />
        ))}
      </Box>
    </>
  );
}
