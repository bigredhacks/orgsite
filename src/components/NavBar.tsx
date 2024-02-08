import { Box } from "@mui/material";
import NavBarButton from "./NavBarButton";
import NavBarIcon from "./NavBarIcon";
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
      <Link to="/">
        <NavBarIcon />
      </Link>
      <Box
        id="navbar-links"
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <NavBarButton
          text="Teams"
          variant="secondary"
          sx={{ height: "100%" }}
        />
        <NavBarButton
          text="Events"
          variant="secondary"
          sx={{ height: "100%" }}
        />
        <NavBarButton text="FAQ" variant="secondary" sx={{ height: "100%" }} />
        <NavBarButton
          text="Sponsors"
          variant="secondary"
          sx={{ height: "100%" }}
        />
        <NavBarButton
          text="Apply"
          variant="primary"
          sx={{
            backgroundColor: "#FF3225",
            px: "1rem",
          }}
        />
      </Box>
    </Box>
  );
}
