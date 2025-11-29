import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import List from "./pages/List";
import Detail from "./pages/Detail";
import Update from "./pages/Update";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-center">

          <ul className="navbar-nav d-flex flex-row justify-content-center gap-4">

            <li className="nav-item">
              <Link className="nav-link" to="/List">LIST</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Detail">DETAIL</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Update">EDIT</Link>
            </li>

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="List" element={<List />} />
        <Route path="Detail" element={<Detail />} />
        <Route path="Update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
