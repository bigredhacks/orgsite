import { Box, Typography } from "@mui/material";
import TeamsDropdown, { TeamsDropdownProps } from "../components/TeamsDropdown";

const teamsData: TeamsDropdownProps[] = [
  {
    sx: { backgroundColor: "#4361EE" },
    imgSrc: "/placeholder.png",
    teamName: "Logistics",
    description:
      "This team does logistics things, like providing words and images and handling stuff.",
    topLeft: true,
  },
  {
    sx: { backgroundColor: "#4CC9F0" },
    imgSrc: "/placeholder.png",
    teamName: "Software",
    description:
      "Our software developers make these website possible by implementing code.",
    topRight: true
  },
  {
    sx: { backgroundColor: "#FF77BB" },
    imgSrc: "/placeholder.png",
    teamName: "Design",
    description:
      "The design team provides assets, wireframes, and prototypes. We also make merchandise!",
    topLeft: true
  },
  {
    sx: { backgroundColor: "#EEFE65" },
    imgSrc: "/placeholder.png",
    teamName: "Sponsorship",
    description:
      "This team reaches out to established companies, within and beyond the technology industry.",
    topRight: true
  },
];

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
              {...{ topLeft, topRight, bottomLeft, bottomRight }}
            />
          )
        )}
      </Box>
    </Box>
  );
}
