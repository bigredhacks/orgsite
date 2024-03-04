import { Typography, Box } from "@mui/material";
import SponsorsList from "../components/SponsorsList";
import "@fontsource/inter";
import "@fontsource/museomoderno";

export default function SponsorsPage() {
  const rainbowColors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#9400D3",
  ];
  const letters = "past partners".split("");

  return (
    <Box
      sx={{
        color: "#22262C",
        padding: 12,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom fontFamily={"museomoderno"}>
        meet our{" "}
        {letters.map((letter, index) => (
          <span
            key={index}
            style={{ color: rainbowColors[index % rainbowColors.length] }}
          >
            {letter}
          </span>
        ))}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3, fontFamily: "inter" }}>
        Nothing would be possible without the support of our sponsors.
      </Typography>
      <SponsorsList numColumns={3} />
      <Typography variant="body1" sx={{ marginTop: 3, fontFamily: "inter" }}>
        Interested in sponsoring BigRed//Hacks 2024?
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "inter" }}>
        Email us at bigredhacks@cornell.edu!
      </Typography>
    </Box>
  );
}
