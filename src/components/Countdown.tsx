import useCountdown from "../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import { Typography, Grid, Box } from "@mui/material";
import "@fontsource/inter"; 
import "@fontsource/museomoderno";

const HackathonStarted = () => {
  return (
    <div>
      <p>Hackathon started!</p>
      <span>Happy hacking!</span>
    </div>
  );
};

export type dateInfo = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ShowCounter = ({ days, hours, minutes, seconds }: dateInfo) => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: 'MuseoModerno, sans-serif',
          fontSize: "50px",
          textAlign: "center",
          lineHeight: "79.5px",
          mb: 4,
        }}
        fontWeight={400}
        color="black"
      >
        countdown
      </Typography>
      <Box
        component="section"
        sx={{
          width: "60%",
          borderRadius: "70px",
          bgcolor: "#EEFD63",
          display: "flex",
          margin: "auto",
          mb:4,
          padding: 7,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item lg={2.5} sm={5}>
            <DateTimeDisplay value={days} type={"days"} />
          </Grid>
          <Grid item lg={2.5} sm={5}>
            <DateTimeDisplay value={hours} type={"hours"} />
          </Grid>
          <Grid item lg={2.5} sm={5}>
            <DateTimeDisplay value={minutes} type={"mins"} />
          </Grid>
          <Grid item lg={2.5} sm={5}>
            <DateTimeDisplay value={seconds} type={"sec"} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export type countdownTimerProp = { targetDate: number };

const CountdownTimer = ({ targetDate }: countdownTimerProp) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <HackathonStarted />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
