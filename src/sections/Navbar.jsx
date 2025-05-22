import { useState } from "react";
import { motion } from "framer-motion";

function Navigation({ currentPage, setPage }) {
  const pages = ["home", "about", "work", "contact"];
  return (
    <ul className="nav-ul flex flex-wrap justify-center gap-2 sm:gap-4 bg-neutral-800 rounded-full px-4 py-2 shadow-lg">
      {pages.map((page) => (
        <li key={page} className="nav-li">
          <button
            onClick={() => setPage(page)}
            className={`nav-link px-4 py-1 rounded-full text-sm sm:text-base transition-colors duration-300 ${
              currentPage === page
                ? "bg-white text-black"
                : "text-white hover:bg-white/20"
            }`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}

const Navbar = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Ali
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation currentPage={currentPage} setPage={setPage} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation currentPage={currentPage} setPage={setPage} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
