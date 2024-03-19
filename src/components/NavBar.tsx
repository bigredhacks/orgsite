import { Box } from "@mui/material";
import NavBarButton from "./NavBarButton";
import NavBarIcon from "./NavBarIcon";

export default function NavBar() {
  return (
    <Box
      id="navbar-wrapper"
      sx={{
        top: "0px",
        right: "0px",
        padding: 1.5,
        px: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <NavBarIcon />
      <Box
        id="navbar-links"
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <NavBarButton bg="none" text="Teams" variant="secondary" />
        <NavBarButton bg="none" text="#events" variant="secondary" />
        <NavBarButton bg="none" text="#faq" variant="secondary" />
        <NavBarButton bg="none" text="#sponsors" variant="secondary" />
        <NavBarButton
          bg="#FF3225"
          text="Apply"
          variant="apply"
          sx={{
            // Align text with rest of buttons, accounting for borders
            transform: "translateY(-2px)",
          }}
        />
      </Box>
    </Box>
  );
}
