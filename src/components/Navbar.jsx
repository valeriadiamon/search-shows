import { BrowserRouter as Router, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <Router>
            <Link to='/' >
                <span className="navbar-brand mb-0 h1">Search Shows</span>
            </Link>
            </Router>
            <p>By: Valeria Díaz</p>
        </div>
    </nav>
  )
}

export default Navbar