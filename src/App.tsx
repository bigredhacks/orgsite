import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import TeamsPage from "./pages/teams";
import "./App.css";
import EventsPage from "./pages/events";
import FAQPage from "./pages/faq";
import SponsorsPage from "./pages/sponsors";
import ApplyPage from "./pages/apply";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
