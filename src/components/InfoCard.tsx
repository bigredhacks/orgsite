import { Box, SxProps, Theme } from "@mui/material";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export enum BorderSpec {
  TopLeft = 0,
  TopRight = 1,
  BottomRight = 2,
  BottomLeft = 3,
}

function processBorderSpecList(
  borderSpecList: BorderSpec[] | undefined
): string {
  if (borderSpecList == undefined) {
    return "";
  }

  const borderCorners: ("3em" | "0.5em")[] = [
    "0.5em",
    "0.5em",
    "0.5em",
    "0.5em",
  ];

  for (const spec of borderSpecList) {
    borderCorners[spec] = "3em";
  }

  return borderCorners.join(" ");
}

export interface InfoCardProps {
  sx?: SxProps<Theme>;
  borderSpecList?: BorderSpec[];

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
    border: "5px black solid",
    borderRadius: processBorderSpecList(props.borderSpecList),
    ...props.sx,
  };

  return <Box sx={styles}>{props.children}</Box>;
}
