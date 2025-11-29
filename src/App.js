import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import myData from "./my_data.json";

import List from "./pages/List";
import Detail from "./pages/Detail";
import Update from "./pages/Update";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  // 🔥 my_data.json의 GAME 배열을 state로 관리
  const [list, setList] = useState(myData.GAME);

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
        <Route path="/List" element={<List list={list} />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Update" element={<Update list={list} setList={setList} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
