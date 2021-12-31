import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavPage from "./pages/Fav";
import NewMeetupsPage from "./pages/NewMeetups";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/all-meetups" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorite" element={<FavPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
