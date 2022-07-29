import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Episodes from "./components/Episodes";
import Home from "./components/Home";
import Cast from "./components/Cast";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/episodes/:id" element={<Episodes/>}/>
          <Route path="/cast/:id" element={<Cast/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>    
  )
}

export default App
