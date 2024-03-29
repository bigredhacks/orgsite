import teamMembers from "../data/teamMembers.ts";
import TeamsMember from "../components/TeamsMember.tsx";
import { SxProps, Theme, Box } from "@mui/material";

export interface TeamMemberListProps {
  teamName: string;
  sx?: SxProps<Theme>;
  numElements?: number;
}

export default function TeamMemberList(props: TeamMemberListProps) {
  const {teamName, sx} = props;

  const numElements = props.numElements ?? 4;

  return (
    <>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${numElements}, 1fr)`,
        gridAutoRows: '1fr',
        gap: "5px",
        alignItems: "start",
        justifyItems: "center", 
        ...sx
      }}>
        {teamMembers[teamName].map((props2) => (
          
          <TeamsMember {...props2} />
        ))}
      </Box>
    </>
  );
}
