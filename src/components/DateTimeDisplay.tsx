import React from 'react';
import { Typography } from '@mui/material';


export type dateTimeType = {
  value: number,
  type: string
}

const DateTimeDisplay = ({value, type}: dateTimeType) => {
return (
  <>
  <Typography style={{ fontSize: '70px', textAlign: 'center', paddingTop: '50px', lineHeight: '85px'}} fontWeight={600} color="black">
    {value}
  </Typography><Typography style={{ fontSize: '40px', textAlign: 'center', paddingTop: '5px' }} fontWeight={600} color="black">
      {type}
    </Typography>
  </>
)
}

export default DateTimeDisplay;
