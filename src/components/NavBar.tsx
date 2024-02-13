import { Box } from "@mui/material";
import NavBarButton from "./NavBarButton";
import NavBarIcon from "./NavBarIcon";

export default function NavBar() {
  return (
    <Box
      id="navbar-wrapper"
      sx={{
        width: "100%",
        position: "absolute",
        top: "0px",
        right: "0px",
        paddingTop: "2rem",
        display: "flex",
      }}
    >
      <NavBarIcon />
      <Box
        id="navbar-links"
        sx={{
          paddingRight: "2rem",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <NavBarButton text="Teams" variant="secondary" />
        <NavBarButton text="Events" variant="secondary" />
        <NavBarButton text="FAQ" variant="secondary" />
        <NavBarButton text="Sponsors" variant="secondary" />
        <NavBarButton
          text="Apply"
          variant="primary"
          sx={{
            backgroundColor: "#FF3225",
            transform: "translateY(-2px)"
          }}
        />
      </Box>
    </Box>
  );
}
