import { Globe2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-darkRed backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe2 className="text-red-500 h-8 w-8" />
          <span className="text-xl font-bold">RedTilt</span>
        </div>

        <div className="w-full hidden md:flex items-center justify-between space-x-8">
          <div className="flex flex-1 justify-center items-center gap-4">
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              Reviews
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link">
              Jobs
            </a>
          </div>

          <div>
            <button className="btn-primary">Start a project</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
