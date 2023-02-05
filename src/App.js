import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/friend/:friendId" element={<FriendDetail/>} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
