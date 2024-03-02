import { Hero } from "../components/Hero";
import FAQPage from "../pages/faq"
import SponsorsPage from "../pages/sponsors"
import EventsPage from "./events";
import Countdown from "../components/countdown"

export default function HomePage() {
  return (
    <>
  <Hero></Hero>
  <EventsPage></EventsPage>
  <FAQPage></FAQPage>
  <SponsorsPage></SponsorsPage>
  <Countdown></Countdown>
  </>
  )
}