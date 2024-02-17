import React from 'react';

export type dateTimeType = {
  value: number,
  type: string
}

const DateTimeDisplay = ({value, type}: dateTimeType) => {
return (
  <div>
    <p>{value}</p>
    <span>{type}</span>
  </div>
)
}

export default DateTimeDisplay;
