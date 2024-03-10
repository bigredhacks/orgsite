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
            ...sx,
          }}
          borderSpecList={borderSpecList}
        >
          <Box
            sx={{ maxHeight: "fit-content", marginTop: "-100px" }}
          >
            {/* TODO: Mobile responsiveness is wack */}
            <img
              src={imgSrc}
              style={{
                maxHeight: "150px",
              }}
            ></img>
          </Box>

          <Box sx={{ textAlign: "center" }}>
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
          </Box>
        </InfoCard>
      </Box>
    </>
  );
}
