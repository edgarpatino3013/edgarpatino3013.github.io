import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
      <Link to="/" className="text-lg font-bold text-blue-500">Edgar Patino</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-green-500">Home</Link>
        <Link to="/about" className="hover:text-green-500">About</Link>
        <Link to="/projects" className="hover:text-green-500">Projects</Link>
        <Link to="/contact" className="hover:text-green-500">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

