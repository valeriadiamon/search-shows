import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Episodes from "./components/Episodes";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/episodes/:id" element={<Episodes/>}/>
        </Routes>
      </Router>
        {/*<Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </Router>*/}
    </div>    
  )
}

export default App
