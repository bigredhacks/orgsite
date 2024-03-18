import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22262C",
    },
  },
  typography: {},
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            color: "black",
            border: "5px black solid",
            p: 2,
            borderRadius: "1.25em",
            boxShadow: "0.2em 0.3em 0px 0.2em black",
            "&:hover": {
              border: "5px black solid",
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            color: "black",
          },
        },
        {
          props: { variant: "apply" },
          style: {
            color: "black",
            borderRadius: "1em",
            border: "2px black solid",
            boxShadow: "0.2em 0.3em 0px 0.2em black",
          },
        },
      ],
    },
  },
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    apply: true;
  }
}

export default theme;
