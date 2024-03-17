import { Link, Typography } from "@mui/material";

type Props = {
  img: string;
  year: string;
  date: string;
  url?: string;
};

export const EventPhoto = ({ img, year, date, url }: Props) => {
  return (
    <Link
      href={url}
      sx={{ textDecoration: "none", color: "inherit", textAlign: "left", lineHeight: "40px" }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          paddingLeft: "30px",
          fontWeight: "600",
        }}
      >
        {year}
      </Typography>
      <Typography
        sx={{
          fontSize: "30px",
          paddingLeft: "30px",
          fontWeight: "400",
          paddingBottom: "30px",
        }}
      >
        {date}
      </Typography>
      <img
        src={img}
        alt={year}
        style={{
          borderRadius: 50,
          width: "100%",
          height: "undefined",
          aspectRatio: 1,
          objectFit: "cover",
          display: "block",
        }}
      />
    </Link>
  );
};
