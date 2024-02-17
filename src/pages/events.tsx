import Events from "../components/Events";
import Countdown from "../components/Countdown";

export default function EventsPage() {
  return <>
  <Events />
  <Countdown targetDate={1709960400000} />
  </>;
}
