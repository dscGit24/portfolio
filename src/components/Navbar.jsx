import ThemeToggle from "../theme/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold shadow-md">
              DC
            </div>

            <div>
              <h1 className="font-semibold text-slate-900">Disha Chotai</h1>

              <p className="text-xs text-slate-500">
                Java Full Stack Developer
              </p>
            </div>
          </div>
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 font-medium text-slate-700">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>







            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>

            <a href="#project" className="hover:text-blue-600">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
