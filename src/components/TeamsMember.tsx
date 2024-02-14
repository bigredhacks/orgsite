import { Card, Typography, Box } from "@mui/material";

export interface TeamsMemberProps {
  imgSrc: string;
  name: string;
  position?: string;
  size: string;
}

export default function TeamsMember(props: TeamsMemberProps) {
  const { imgSrc, name, position, size } = props;

  return (
    <Box sx={{maxWidth: size, textAlign: "left"}}>
      <Card
        style={{
          borderRadius: "20%",
          border: "2px #4361EE solid",
          width: size,
          height: size
        }}
      >
        <img src={imgSrc} style={{width: "100%", height: "100%"}} />
      </Card>
      <Typography sx={{fontWeight: "bold", mt: "5px"}}>{name}</Typography>
      <Typography>{position}</Typography>
    </Box>
  );
}
