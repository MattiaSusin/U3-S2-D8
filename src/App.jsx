import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TopBar from './components/TopBar';
import ContentMain from "./components/ContentMain";
import MyFooter from "./components/MyFooter";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";

function App() {
  return (
    <div className="App bg-dark">
    <BrowserRouter>
      <TopBar/>
    <Routes>
      <Route path="/" element={<ContentMain/>}/>
      <Route path="/TvShows" element={<TvShows/>}/>
      <Route path="/ProfilePage" element={<ProfilePage/>}/>
    </Routes>
      <MyFooter/> 
  </BrowserRouter>
    </div>
  );
}

export default App;
