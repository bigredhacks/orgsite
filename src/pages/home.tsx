// import Countdown from "../components/Countdown";
import { Hero } from "../components/Hero";
import MiniTeams from "../components/MiniTeams";
import FAQPage from "../pages/faq"
import SponsorsPage from "../pages/sponsors"
import EventsPage from "./events";

export default function HomePage() {
  return (
    <>
  <Hero></Hero>
  <MiniTeams />
  <EventsPage></EventsPage>
  <FAQPage></FAQPage>
  <SponsorsPage></SponsorsPage>
  {/* <Countdown targetDate={1709960400000}></Countdown> */}
  </>
  )
}
