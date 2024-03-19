import { Theme } from "@emotion/react";
import { Button, SxProps, Typography } from "@mui/material";
import { HashLink } from 'react-router-hash-link';

export interface NavBarButtonProps {
  variant: string;
  bg: string;
  text: string;
  to?: string;
  sx?: SxProps<Theme>;
}

/**
 * For use in conjunction with `NavBar` component.
 */
export default function NavBarButton(props: NavBarButtonProps) {
  // Because typescript can't recognize variant unions correctly
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fixVariant: any = props.variant;

  return (
    <Button
      variant={fixVariant}
      sx={{
        blockSize: "fit-content",
        backgroundColor: props.bg,
        "&:hover": { backgroundColor: props.bg },
        ...props.sx,
      }}
      disableRipple
    >
      <HashLink
        to={"/" + (props.to ?? props.text.toLowerCase())}
        style={{ color: "inherit" }}
      >
        <Typography variant="body1" sx={{ margin: 0 }}>
          {props.text}
        </Typography>
      </HashLink>
    </Button>
  );
}
