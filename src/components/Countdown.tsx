import React from 'react';
import useCountdown from '../hooks/useCountdown'
import DateTimeDisplay from './DateTimeDisplay'

const HackathonStarted = () => {
  return (
    <div>
      <p>Hackathon started!</p>
      <span>Happy hacking!</span>
    </div>
  )
}

export type dateInfo = {
  days : number,
  hours : number,
  minutes : number,
  seconds : number
}

const ShowCounter = ({days, hours, minutes, seconds}: dateInfo) => {
  return (
    <div>
      <DateTimeDisplay value={days} type={'Days'} />
      <DateTimeDisplay value={hours} type={'Hours'} />
      <DateTimeDisplay value={minutes} type={'Minutes'} />
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  )
}

export type countdownTimerProp = {targetDate: number}

const CountdownTimer = ({targetDate} : countdownTimerProp) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <HackathonStarted />;
  } else {
    return (
      <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds} />
    )
  }
}

export default CountdownTimer;
