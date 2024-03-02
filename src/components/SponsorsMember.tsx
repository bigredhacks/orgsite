import { Box, Typography } from "@mui/material";

export interface SponsorsMemberProps {
  imgSrc: string;
  name: string;
  size?: string;
}

export default function SponsorsMember(props: SponsorsMemberProps) {
  const { imgSrc, name } = props;
  const size = props.size ?? "inherit";

  return (
    <Box sx={{ maxWidth: size, textAlign: "center", margin: 5 }}>
      <img src={imgSrc} style={{ width: "100%", height: "100%", maxHeight:"100px" }} alt={name} />
      <Typography sx={{ mt: "5px" }}>{name}</Typography>
    </Box>
  );
}
