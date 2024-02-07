import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
        <Link to="/teams">
          <Button variant="secondary" sx={{ height: "100%" }}>
            <Typography>Teams</Typography>
          </Button>
        </Link>

        <Link to="/events">
          <Button variant="secondary" sx={{ height: "100%" }}>
            <Typography>Events</Typography>
          </Button>
        </Link>

        <Link to="/faq">
          <Button variant="secondary" sx={{ height: "100%" }}>
            <Typography>FAQ</Typography>
          </Button>
        </Link>

        <Link to="/sponsors">
          <Button variant="secondary" sx={{ height: "100%" }}>
            <Typography>Sponsors</Typography>
          </Button>
        </Link>

        <Link to="/apply">
          <Button
            variant="primary"
            sx={{
              backgroundColor: "#FF3225",
              px: "1rem",
            }}
          >
            <Typography>Apply</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
