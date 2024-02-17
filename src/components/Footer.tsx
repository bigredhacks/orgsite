import { Box, Stack, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box id="footer-wrapper" sx={{
      width: "100%",
      position: "absolute",
      bottom: "0px",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#22262C",
    }}>
      <Stack spacing={1} mt="10px" mb="10px">
        <Typography variant="h6" alignSelf="center" color="white">
          contact us!
        </Typography>
        <Stack sx={{ display: 'flex', justifyContent: 'center', gap: '5px', flexDirection: 'row' }}>
          <IconButton aria-label="Email">
            <a href="mailto:bigredhacks@cornell.edu">
              <EmailIcon sx={{ color: 'white', fontSize: '25px' }} />
            </a>
          </IconButton>
          <IconButton aria-label="Instagram">
            <a href="https://www.instagram.com/bigredhacks/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ color: 'white', fontSize: '25px' }} />
            </a>
          </IconButton>
          <IconButton aria-label="LinkedIn">
            <a href="https://www.linkedin.com/in/bigred-hacks-698107269" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ color: 'white', fontSize: '25px' }} />
            </a>
          </IconButton>
        </Stack>
        <Typography variant="h6" alignSelf="center" color="white">
          made with 💙 by the BRH team
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer;