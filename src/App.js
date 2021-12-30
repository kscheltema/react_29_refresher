import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavPage from "./pages/Fav";
import NewMeetupsPage from "./pages/NewMeetups";
import MainNav from "./layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorite" element={<FavPage />} />
      </Routes>
    </div>
  );
}

export default App;
