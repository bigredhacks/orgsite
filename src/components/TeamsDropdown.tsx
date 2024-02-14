import { Box, Button, Typography } from "@mui/material";
import InfoCard, { InfoCardProps } from "./InfoCard";

export interface TeamsDropdownProps extends InfoCardProps {
  imgSrc: string;
  teamName: string;
  description: string;
}

export default function TeamsDropdown(props: TeamsDropdownProps) {
  const { sx, imgSrc, teamName, description } = props;
  const { topLeft, topRight, bottomLeft, bottomRight } = props;

  return (
    <InfoCard
      sx={{
        display: "flex",
        ...sx,
      }}
      {...{ topLeft, topRight, bottomLeft, bottomRight }}
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
        <Button variant="secondary" sx={{ px: "0" }}>
          <Typography style={{ textDecoration: "underline" }}>
            Click here to meet the {teamName} team &#x25BC;
          </Typography>
        </Button>
      </Box>
    </InfoCard>
  );
}
