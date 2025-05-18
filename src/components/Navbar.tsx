import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between">
        <span className="text-xl font-bold text-primary-700">Ìmọ̀Ifá</span>
        <div className="space-x-4">
          <Link to="/bookstore">Bookstore</Link>
          <Link to="/orisha-shop">Orisha Shop</Link>
          <Link to="/directory">Directory</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}