import { Card, Typography, Box } from "@mui/material";

export interface SponsorsMemberProps {
  imgSrc: string;
  name: string;
  size?: string;
}

export default function SponsorsMember(props: SponsorsMemberProps) {
  const { imgSrc, name } = props;
  const size = props.size ?? "inherit";

  return (
    <Box sx={{maxWidth: size, textAlign: "center"}}>
      <Card
        style={{
          width: size,
          height: size
        }}
      >
        <img src={imgSrc} style={{width: "100%", height: "100%"}} alt={name} />
      </Card>
      <Typography sx={{ mt: "5px"}}>{name}</Typography>
    </Box>
  );
}
