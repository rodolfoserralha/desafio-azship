import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Episodes from "./pages/Episodes";
import EpisodeDetails from "./pages/EpisodeDetails";
import FavoriteEpisodes from "./pages/FavoriteEpisodes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<EpisodeDetails />} />
        <Route path="/episodes/favorites" element={<FavoriteEpisodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
