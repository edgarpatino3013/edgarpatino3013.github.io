import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center p-5 bg-background text-text shadow-lg border-b border-surface-light">
      <Link to="/" className="text-lg font-bold text-primary">Edgar Patino</Link>
      <div className="space-x-6">
        <Link to="/" className={`hover:text-accent ${location.pathname === '/' ? 'text-primary border-b-2 border-primary' : ''}`}>Home</Link>
        <Link to="/about" className={`hover:text-accent ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary' : ''}`}>About</Link>
        <Link to="/projects" className={`hover:text-accent ${location.pathname === '/projects' ? 'text-primary border-b-2 border-primary' : ''}`}>Projects</Link>
        <Link to="/contact" className={`hover:text-accent ${location.pathname === '/contact' ? 'text-primary border-b-2 border-primary' : ''}`}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

