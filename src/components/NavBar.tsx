import { Box, Typography, Button } from "@mui/material";

export default function NavBar() {
  return (
    <Box
      id="navbar-wrapper"
      sx={{
        width: "100%",
        position: "absolute",
        top: "0px",
        right: "0px",
        display: "flex",
      }}
    >
      <Box sx={{ flex: "1" }}>
        <img
          src="/MLH.png"
          style={{ width: "7rem", position: "absolute", left: "3rem" }}
        />
      </Box>
      <Box
        id="navbar-links"
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button variant="secondary">
          <Typography>Teams</Typography>
        </Button>
        <Button variant="secondary">
          <Typography>Events</Typography>
        </Button>
        <Button variant="secondary">
          <Typography>FAQ</Typography>
        </Button>
        <Button variant="secondary">
          <Typography>Sponsors</Typography>
        </Button>

        <Button
          variant="primary"
          sx={{
            backgroundColor: "#FF3225",
            px: "1rem",
          }}
        >
          <Typography>Apply</Typography>
        </Button>
      </Box>
    </Box>
  );
}
