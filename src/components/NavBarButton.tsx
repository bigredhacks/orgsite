import { Theme } from "@emotion/react";
import { Button, SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface propTypes {
  variant: string;
  text: string;
  to?: string;
  sx?: SxProps<Theme>;
}

/**
 * For use in conjunction with `NavBar` component.
 */
export default function NavBarButton(props: propTypes) {
  // Because typescript can't recognize variant unions correctly
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fixVariant: any = props.variant;

  return (
    <Button
      variant={fixVariant}
      sx={{ blockSize: "fit-content", ...props.sx }}
      disableRipple
    >
      <Link
        to={"/" + (props.to ?? props.text.toLowerCase())}
        style={{ color: "inherit" }}
      >
        <Typography sx={{ margin: 0 }}>{props.text}</Typography>
      </Link>
    </Button>
  );
}
