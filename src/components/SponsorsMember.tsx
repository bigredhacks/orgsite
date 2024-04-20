import { Card, Box } from "@mui/material";
export interface SponsorsMemberProps {
  imgSrc: string;
  name: string;
  size?: string;
  color: string;
}
export default function SponsorsMember(props: SponsorsMemberProps) {
  const { imgSrc, name } = props;
  const size = props.size ?? "inherit";
  const color = props.color;
  return (
    <Box sx={{
      maxWidth: size,
      textAlign: "center",}}>
      <Box
        sx={{
          width: 250,
          height: 120,
          backgroundColor: "white",
          boxSizing: "border-box",
          border: 4,
          borderColor: "#22262C",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 60,
          overflow: "hidden",
          alignItems: "center",
          position: "relative",
          zIndex: 500,
        }}
      >
        <img src={imgSrc} style={{overflow: 'hidden', width: "80%", height: "80%", objectFit: "contain", paddingTop: 10}} alt={name} />
      </Box>
      <Card
        sx={{
          width: 250,
          height: 110,
          backgroundColor: color,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 15,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 60,
          overflow: "hidden",
          left: 2,
          top: 13,
          position: "absolute",
        }}>
      </Card>
    </Box>
  );
}