import { Box, Button, Typography } from "@mui/material";
import InfoCard, { InfoCardProps, BorderSpec } from "./InfoCard";

import "./TeamMemberList.css"

export interface EventsPageProps extends InfoCardProps {
  imgSrc: string;
  eventName: string;
  date: string;
  description: string;
  placeImgRight?: boolean;
  borderSpecList?: BorderSpec[];
}

export default function EventsBlock(props: EventsPageProps) {
  const { sx, imgSrc, eventName, date, description, placeImgRight, borderSpecList } =
    props;
  // Change the order of text and image
  const flexDir = placeImgRight ? "row-reverse" : "row";

  return (
    <>
      <InfoCard
        sx={{
          display: "flex",
          flexDirection: flexDir,
          height: "300px",
          ...sx,
        }}
        borderSpecList={borderSpecList}
      >
        <Box sx={{ maxHeight: "fit-content" }}>
          {/* TODO: Mobile responsiveness is wack */}
          <img src={imgSrc} style={{ maxHeight: "150px", border: "5px solid #000", borderRadius: "25px", margin: "10px", aspectRatio: "1", objectFit: "cover"}}></img>
        </Box>
        <Box sx={{ textAlign: "left", marginLeft:"20px"}}>
          <Button
            variant="primary"
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
              width: "50%",
              marginBottom: "1rem",
            }}
          >
            <Typography>{eventName}</Typography>
          </Button>
            <Typography sx={{color: "white", marginLeft: "10px"}}>{date}</Typography>
          <Typography sx={{ paddingTop: "25px", paddingLeft: "10px", paddingRight:"10px"}}>{description}</Typography>
        </Box>
      </InfoCard>
    </>
  );
}
