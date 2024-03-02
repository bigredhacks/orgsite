import Countdown from "../components/Countdown";
import { Hero } from "../components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Countdown targetDate={1709960400000} />
    </>
  );
}
