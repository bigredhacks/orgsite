import { Box, Button, Typography } from "@mui/material";
import InfoCard, { InfoCardProps, BorderSpec } from "./InfoCard";
import TeamMemberList from "../components/TeamMemberList.tsx";
import { useState } from "react";

import "./TeamMemberList.css"

export interface TeamsDropdownProps extends InfoCardProps {
  imgSrc: string;
  teamName: string;
  description: string;
  placeImgRight?: boolean;
  borderSpecList?: BorderSpec[];
}

export default function TeamsDropdown(props: TeamsDropdownProps) {
  const { sx, imgSrc, teamName, description, placeImgRight, borderSpecList } =
    props;
  const [showMembers, setShowMembers] = useState(false);

  // Change the order of text and image
  const flexDir = placeImgRight ? "row-reverse" : "row";

  return (
    <>
      <InfoCard
        sx={{
          display: "flex",
          flexDirection: flexDir,
          ...sx,
        }}
        borderSpecList={borderSpecList}
      >
        <Box sx={{ maxHeight: "fit-content" }}>
          {/* TODO: Mobile responsiveness is wack */}
          <img src={imgSrc} style={{ maxHeight: "150px" }}></img>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Button
            variant="primary"
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
              width: "50%",
              marginBottom: "1rem",
            }}
          >
            <Typography>{teamName}</Typography>
          </Button>
          <Typography>{description}</Typography>
          <Button
            variant="secondary"
            sx={{ px: "0" }}
            onClick={() => setShowMembers(!showMembers)}
          >
            <Typography style={{ textDecoration: "underline" }}>
              Click here to meet the {teamName} team &#x25BC;
            </Typography>
          </Button>
        </Box>
      </InfoCard>

      <Box
        className={showMembers ? "dropdown revealed" : "dropdown"}
        sx={{ overflow: "hidden" }}
      >
        <TeamMemberList teamName={teamName} />
      </Box>
    </>
  );
}
