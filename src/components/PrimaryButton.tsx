import { Button, styled } from "@mui/material";

const PrimaryButton = styled(Button)({
  color: "black",
  border: "2px black solid",
  borderRadius: "1em",
  boxShadow: "0.2em 0.3em 0px 0.2em black",
  "&:hover": {
    border: "2px black solid"
  },
});

export default PrimaryButton;