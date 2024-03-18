import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TopBorder } from "./components/Borders";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ApplyPage from "./pages/apply";
import EventsPage from "./pages/events";
import FAQPage from "./pages/faq";
import HomePage from "./pages/home";
import SponsorsPage from "./pages/sponsors";
import TeamsPage from "./pages/teams";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
        <Box mt={10}>
          <TopBorder />
          <Footer />
        </Box>
      </main>
    </>
  );
}

export default App;
