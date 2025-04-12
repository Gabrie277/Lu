"use client";
import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="bg-gray-800 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Lu Variedades</h1>

        {/* Botão hamburguer */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
          onClick={toggleMenu}
        >
          <span className="text-3xl">☰</span>
        </button>

        {/* Menu - desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-gray-300">Início</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Somos</a></li>
            <li><a href="#produtos" className="hover:text-gray-300">Produtos</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </nav>
      </div>

      {/* Menu mobile como sidebar à direita */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          menuAberto ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-5">
          <button onClick={toggleMenu} className="text-white text-2xl mb-4">×</button>
          <ul className="flex flex-col space-y-4">
            <li><a href="#hero" className="hover:text-gray-300" onClick={toggleMenu}>Início</a></li>
            <li><a href="#skills" className="hover:text-gray-300" onClick={toggleMenu}>Somos</a></li>
            <li><a href="#produtos" className="hover:text-gray-300" onClick={toggleMenu}>Produtos</a></li>
            <li><a href="#contact" className="hover:text-gray-300" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </div>
      </div>

      {/* Sombra escura atrás do menu mobile */}
      {menuAberto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
