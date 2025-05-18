import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Bookstore from "./components/Bookstore";
import Shop from "./components/Shop";
import Directory from "./components/Directory";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/bookstore" element={<Bookstore />} />
            <Route path="/orisha-shop" element={<Shop />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}