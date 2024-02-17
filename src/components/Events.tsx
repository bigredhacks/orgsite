import { Card, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { EventPhoto } from './EventPhoto';
import event2019 from "../assets/org-2019.jpg"
import event2021 from "../assets/org-2018.jpeg"
import event2017 from "../assets/org-2017.jpeg"

export default function Events() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const cardStyle = isMobile 
  const typographyStyle = isMobile ?
    { mt: 3 } :
    {};
  return (
      <><Typography style={{ fontSize: '50px', textAlign: 'center', paddingTop: '100px', lineHeight: '79.5px' }} fontWeight={400} color="black" sx={typographyStyle}>
      events
    </Typography><Grid container spacing={5} justifyContent="center" sx={{ mt: -1 }}>

        <Grid item lg={3} sm={4}>
          <EventPhoto img={event2017} year="Upcomming" date="March 9th/10th"></EventPhoto>
        </Grid>
        <Grid item lg={3} sm={4}>
          <EventPhoto img={event2021} year="2021" date="Space" url="https://fantastic-kheer-738e55.netlify.app/"></EventPhoto>
        </Grid>
        <Grid item lg={3} sm={4}>
          <EventPhoto img={event2019} year="2019" date="Theme"></EventPhoto>
        </Grid>
      </Grid></>
  )
}