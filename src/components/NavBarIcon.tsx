import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBarIcon() {
  return (
    <Box sx={{ flex: 1, textAlign: "left" }}>
      <Link to="/">
        <img
          src="/brh-logo.png"
          style={{
            width: "2rem",
            height: "2rem",
            padding: "0.75rem",
            border: "2px solid #DDDDDD",
            borderRadius: "25%",
          }}
        />
      </Link>
    </Box>
  );
}
