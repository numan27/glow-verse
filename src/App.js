import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import SkinQuiz from "../src/pages/SkinQuiz/Quiz.jsx"
import Contact from "../src/pages/Contact/Contact"
import Home from "../src/pages/Home/Home"

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/quiz" element={<SkinQuiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App