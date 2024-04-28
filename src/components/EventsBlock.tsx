import { Box, Button, Typography } from "@mui/material";
import InfoCard, { InfoCardProps, BorderSpec } from "./InfoCard";

import "./TeamMemberList.css"

export interface EventsPageProps extends InfoCardProps {
  imgSrc: string;
  teamName: string;
  description: string;
  placeImgRight?: boolean;
  borderSpecList?: BorderSpec[];
}

export default function EventsBlock(props: EventsPageProps) {
  const { sx, imgSrc, teamName, description, placeImgRight, borderSpecList } =
    props;
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
          <img src={imgSrc} style={{ maxHeight: "150px", border: "5px solid #000", borderRadius: "25px", margin: "10px", aspectRatio: "1", objectFit: "cover"}}></img>
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
            // onClick={() => }
          >
            <Typography style={{ textDecoration: "underline" }}>
              Click here to meet the {teamName} team &#x25BC;
            </Typography>
          </Button>
        </Box>
      </InfoCard>
    </>
  );
}
