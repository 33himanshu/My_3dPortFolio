import React, { useState } from 'react';
import { navLinks } from '../constants';

const NavItems = () => {
  return (
    <ul className="nav-ul flex flex-col sm:flex-row">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li my-2 sm:my-0 sm:ml-5">
          <a href={href} className="nav-li_a text-neutral-400 hover:text-blue-600 transition-colors">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-blue-600 transition-colors"
          >
            Himanshu Singh
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`nav-sidebar sm:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
