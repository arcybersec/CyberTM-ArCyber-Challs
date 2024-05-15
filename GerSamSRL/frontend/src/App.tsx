import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import InfoPage from "./pages/InfoPage";
import FlagPage from "./pages/FlagPage";
import CarsPage from "./pages/CarsPage";
import CarPage from "./pages/CarPage";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/info" element={<InfoPage/>}/>
          <Route path="/flag" element={<FlagPage/>}/>
          <Route path="/cars" element={<CarsPage/>}/>
          <Route path="/cars/:id" element={<CarPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
  )
}

export default App
