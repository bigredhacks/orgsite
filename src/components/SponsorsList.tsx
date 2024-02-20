import SponsorsMember, { SponsorsMemberProps } from './SponsorsMember';
import { Box } from '@mui/material';
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
      justifyItems: 'center', // This centers the items in the grid
      alignItems: 'center', // This centers the items vertically
      gridRowGap: 32, // Decrease the gap to make items closer to each other
      // You can also use theme spacing for consistency, e.g., theme.spacing(1)
    }}>
      {sponsorArray.map((sponsor: SponsorsMemberProps, index: number) => (
        <SponsorsMember key={index} {...sponsor} />
      ))}
    </Box>
  );
}
