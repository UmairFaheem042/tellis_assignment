import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import Start from "./pages/Start";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/start" element={<Start />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
