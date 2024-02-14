import { Card, SxProps, Theme } from "@mui/material";
import React from "react";

export interface InfoCardProps {
  sx?: SxProps<Theme>;
  topLeft?: boolean;
  topRight?: boolean;
  bottomRight?: boolean;
  bottomLeft?: boolean;

  children?: React.ReactNode;
}

/**
 * Basic style component taken from Figma. borderRadius is customizable
 * with the existence of `topLeft`, `topRight`, `bottomRight`, `bottomLeft` props.
 * 
 * Example: <InfoCard topLeft bottomRight>{child}</InfoCard>
 */
export default function InfoCard(props: InfoCardProps) {
  const styles = {
    padding: "1rem",
    border: "3px black solid",
    borderRadius: [
      props?.topLeft ? "3em" : "0.5em",
      props?.topRight ? "3em" : "0.5em",
      props?.bottomRight ? "3em" : "0.5em",
      props?.bottomLeft ? "3em" : "0.5em",
    ].join(" "),
    ...props.sx,
  };

  return <Card sx={styles}>{props.children}</Card>;
}
