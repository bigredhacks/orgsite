import { Card, Typography, Box } from "@mui/material";

export interface TeamsMemberProps {
  imgSrc: string;
  name: string;
  position?: string;
  size?: string;
}

export default function TeamsMember(props: TeamsMemberProps) {
  const { imgSrc, name, position } = props;
  // const size = props.size ?? "inherit";

  return (
    <Box sx={{ maxWidth: "150px", textAlign: "left" }}>
      <Card
        style={{
          borderRadius: "20%",
          border: "2px #4361EE solid",
          width: "150px",
          height: "150px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={imgSrc} style={{ width: "100%" }} />
      </Card>
      <Typography sx={{ fontWeight: "bold", mt: "5px", ml: "5px" }}>
        {name}
      </Typography>
      <Typography sx={{ ml: "5px" }}> {position}</Typography>
    </Box>
  );
}
