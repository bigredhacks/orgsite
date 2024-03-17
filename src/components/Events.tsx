import "@fontsource/inter";
import "@fontsource/museomoderno";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import event2017 from "../assets/org-2017.jpeg";
import event2021 from "../assets/org-2018.jpeg";
import event2019 from "../assets/org-2019.jpg";
import { EventPhoto } from "./EventPhoto";

export default function Events() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const cardStyle = isMobile;
  const typographyStyle = isMobile ? { mt: 3 } : {};
  return (
    <Box>
      <Typography
        style={{
          fontSize: "50px",
          textAlign: "center",
          fontFamily: "MuseoModerno, sans-serif",
        }}
        fontWeight={400}
        color="black"
        sx={typographyStyle}
      >
        events
      </Typography>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ mt: 0, mb: 4 }}
      >
        <Grid item lg={3} sm={4}>
          <EventPhoto
            img={event2017}
            year="Upcoming"
            date="March 9th/10th"
          ></EventPhoto>
        </Grid>
        <Grid item lg={3} sm={4}>
          <EventPhoto
            img={event2021}
            year="2021"
            date="Space"
            url="https://fantastic-kheer-738e55.netlify.app/"
          ></EventPhoto>
        </Grid>
        <Grid item lg={3} sm={4}>
          <EventPhoto img={event2019} year="2019" date="Theme"></EventPhoto>
        </Grid>
      </Grid>
    </Box>
  );
}
