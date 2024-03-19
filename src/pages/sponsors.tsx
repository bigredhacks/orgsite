import "@fontsource/inter";
import "@fontsource/museomoderno";
import { Box, Link, Typography } from "@mui/material";
import SponsorsList from "../components/SponsorsList";

export default function SponsorsPage() {
  const rainbowColors = [
    "#FF0000",
    "#FF7F00",
    "#FFD700",
    "#77dd77",
    "#0000FF",
    "#4B0082",
    "#9400D3",
  ];
  const letters = "past partners".split("");

  return (
    <Box
      id="sponsors"
      sx={{
        mx: 12,
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
        Email us at{" "}
        <Link href="mailto:bigredhacks@cornell.edu">
          bigredhacks@cornell.edu
        </Link>
        !
      </Typography>
    </Box>
  );
}
