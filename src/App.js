import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import "./assets/css/styles.css"
import SkinQuiz from "../src/pages/SkinQuiz/Quiz.jsx"
import Contact from "../src/pages/Contact/Contact"
import Shop from "./pages/Shop/Shop"
import Home from "../src/pages/Home/Home"
import FAQs from "../src/pages/FAQs/FAQs.jsx"

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/quiz" element={<SkinQuiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App