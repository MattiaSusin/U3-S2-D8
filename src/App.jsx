import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TopBar from './components/TopBar';
import ContentMain from "./components/ContentMain";
import MyFooter from "./components/MyFooter";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <TopBar/>
    <Routes>
      <Route path="/" element={<ContentMain/>}/>
      <Route path="/ProfilePage" element={<ProfilePage/>}/>
      <MyFooter/> 
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
