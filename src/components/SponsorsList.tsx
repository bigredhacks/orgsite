import SponsorsMember, { SponsorsMemberProps } from './SponsorsMember';
import { Grid, ListItem} from '@mui/material';
import sponsors from '../data/sponsors';
export default function SponsorsList() {
  const sponsorArray = Object.values(sponsors).flat();
  return (
    <Grid container
      columnGap={2}
      rowGap={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      gridTemplateColumns="repeat(3, 1fr)">
      {sponsorArray.map((sponsor: SponsorsMemberProps, index: number) => (
          <Grid item sx={{justifyContent: "center", alignItems: "center"}}>
            <ListItem> <SponsorsMember key={index} {...sponsor} /> </ListItem>
          </Grid>
      ))}
    </Grid>
  );
}