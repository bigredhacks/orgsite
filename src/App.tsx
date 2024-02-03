import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import TeamsPage from "./pages/teams";
import "./App.css";
import EventsPage from "./pages/events";
import FAQPage from "./pages/faq";
import SponsorsPage from "./pages/sponsors";
import ApplyPage from "./pages/apply";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="team" element={<TeamsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="apply" element={<ApplyPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
