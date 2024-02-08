import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function NavBarIcon() {
  const location = useLocation();

  return (
    <Box sx={{ flex: 1, textAlign: "left" }}>
      {location.pathname == "/" ? (
        <img
          src="/MLH.png"
          style={{ width: "7rem", position: "absolute", left: "3rem" }}
        />
      ) : (
        <img
          src="/brh-logo.png"
          style={{
            width: "3rem",
            height: "3rem",
            marginLeft: "2rem",
            marginTop: "2rem",
            padding: "0.75rem",
            border: "2px solid #DDDDDD",
            borderRadius: "25%",
          }}
        />
      )}
    </Box>
  );
}