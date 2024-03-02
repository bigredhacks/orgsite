import SponsorsMember, { SponsorsMemberProps } from './SponsorsMember';
import { Box, Grid } from '@mui/material';
import sponsors from '../data/sponsors';

export interface SponsorsListProps {
  numColumns?: number;
}

export default function SponsorsList({ numColumns = 3 }: SponsorsListProps) {
  const sponsorArray = Object.values(sponsors).flat();

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
      gridTemplateRows: 'auto',
      justifyItems: 'center', 
      alignItems: 'center', 
      gridRowGap: 32, 
    }}>
      {sponsorArray.map((sponsor: SponsorsMemberProps, index: number) => (
        <SponsorsMember key={index} {...sponsor} />
      ))}
    </Box>
  );
}
