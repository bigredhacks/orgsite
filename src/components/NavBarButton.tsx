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
    <Link to={"/" + (props.to ?? props.text.toLowerCase())}>
      <Button variant={fixVariant} sx={props.sx}>
        <Typography>{props.text}</Typography>
      </Button>
    </Link>
  );
}