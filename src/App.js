import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import "./assets/css/styles.css"
import SkinQuiz from "../src/pages/english/SkinQuiz/Quiz.jsx"
import Contact from "../src/pages/english/Contact/Contact"
import Shop from "./pages/english/Shop/Shop"
import Home from "../src/pages/english/Home/Home"
import FAQs from "../src/pages/english/FAQs/FAQs.jsx"

import HomeArabic from "./pages/arabic/Home/HomeArabic"
import ContactArabic from "./pages/arabic/Contact/ContactArabic"
import FAQsArabic from "./pages/arabic/FAQs/FAQsArabic"
import ShopArabic from "./pages/arabic/Shop/ShopArabic"
import SkinQuizArabic from "./pages/arabic/SkinQuiz/QuizArabic"

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/quiz" element={<SkinQuiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/shop" element={<Shop />} />q
        <Route path="/" element={<Home />} />

        {/* Arabic */}
        <Route path="/arabic-quiz" element={<SkinQuizArabic />} />
        <Route path="/arabic-contact" element={<ContactArabic />} />
        <Route path="/arabic-faq" element={<FAQsArabic />} />
        <Route path="/arabic-shop" element={<ShopArabic />} />
        <Route path="/arabic-home" element={<HomeArabic />} />
      </Routes>
    </Router>
  );
}

export default App