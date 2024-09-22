import { Container, Typography, Box } from '@mui/material';
import SponsorsList from "../components/SponsorsList";
import "@fontsource/inter"; 
import "@fontsource/museomoderno";

export default function SponsorsPage() {
  const textColors = ['#fe3126', '#fe3126', '#4cc9f0', '#4cc9f0', '#eeff65', '#eeff65', '#ff77bb', '#ff77bb'];
  const letters = 'partners'.split('');

  return (
    <Container>
      <Box sx={{ backgroundColor: "#22262C", color: 'white', padding: 4, textAlign: 'center' }}>

        <Typography variant="h3" gutterBottom fontFamily={"museomoderno"}>
          meet our{' '}
          {letters.map((letter, index) => (
            <span key={index} style={{ color: textColors[index % textColors.length] }}>
              {letter}
            </span>
          ))}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3, fontFamily: "inter"}}>
          Nothing would be possible without the support of our sponsors.
        </Typography>
        <SponsorsList/>
        <Typography variant="body1" sx={{ marginTop: 3 , fontFamily: "inter"}}>
          Interested in sponsoring BigRedHacks 2023?
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "inter"}}>
          Email us at bigredhacks@cornell.edu!
        </Typography>
      </Box>
    </Container>
  );
}