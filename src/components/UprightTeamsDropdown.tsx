import { Box, Button, Typography } from "@mui/material";
import InfoCard, { InfoCardProps, BorderSpec } from "./InfoCard";

import "./TeamMemberList.css";

export interface UprightTeamsDropdownProps extends InfoCardProps {
  imgSrc: string;
  teamName: string;
  description: string;
  borderSpecList?: BorderSpec[];
}

export default function UprightTeamsDropdown(props: UprightTeamsDropdownProps) {
  const { sx, teamName, imgSrc, description, borderSpecList } = props;

  return (
    <>
      <Box sx={{ mx: "auto" }}>
        <InfoCard
          sx={{
            display: "flex",
            width: "30vw",
            minHeight: "20vw",
            flexDirection: "column",
            height: "calc(100% - 2vw)",
            ...sx,
          }}
          borderSpecList={borderSpecList}
        >
          <Box sx={{ maxHeight: "fit-content", marginTop: "-11vw" }}>
            {/* TODO: Mobile responsiveness is wack */}
            <img
              src={imgSrc}
              style={{
                maxWidth: "20vw",
              }}
            ></img>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="primary"
              sx={{
                backgroundColor: "white",
                "&:hover": { backgroundColor: "white" },
                width: "90%",
                marginBottom: "1rem",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontfamily: "inter" }}>{teamName}</Typography>
            </Button>
            <Typography sx={{fontfamily: "inter"}}>{description}</Typography>
          </Box>
        </InfoCard>
      </Box>
    </>
  );
}
