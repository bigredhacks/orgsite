import { Hero } from "../components/Hero";
import FAQPage from "../pages/faq"
import SponsorsPage from "../pages/sponsors"
import EventsPage from "./events";
import Countdown from "../components/Countdown"

export default function HomePage() {
  return (
    <>
  <Hero></Hero>
  <EventsPage></EventsPage>
  <FAQPage></FAQPage>
  <SponsorsPage></SponsorsPage>
  <Countdown targetDate={0o03022024}></Countdown>
  </>
  )
}