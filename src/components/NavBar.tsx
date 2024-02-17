import { Box } from "@mui/material";
import NavBarButton from "./NavBarButton";
import NavBarIcon from "./NavBarIcon";

export default function NavBar() {
  return (
    <Box
      id="navbar-wrapper"
      sx={{
        width: "100%",
        position: "relative",
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
        <NavBarButton bg="none" text="Teams" variant="secondary" />
        <NavBarButton bg="none" text="Events" variant="secondary" />
        <NavBarButton bg="none" text="FAQ" variant="secondary" />
        <NavBarButton bg="none" text="Sponsors" variant="secondary" />
        <NavBarButton
          bg="#FF3225"
          text="Apply"
          variant="primary"
          sx={{
            // Align text with rest of buttons, accounting for borders
            transform: "translateY(-2px)",
          }}
        />
      </Box>
    </Box>
  );
}
