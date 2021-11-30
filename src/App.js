import "./App.scss";
import { useLocation, useParams } from "react-router";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Detailswrapper from "./details/Detailswrapper";

function App(props) {
  return (
    <div className="App">
      <div className="bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--offset-lg-2 bx--col-lg-8">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/details/:id" element={<Detailswrapper />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
