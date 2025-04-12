import React from 'react';

export default function Camisa() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md text-center">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_693612-MLB80024068076_102024-O-camisa-social-masculina-manga-longa-slim-fit-tricoline-luxo.webp"
          alt="Camisa Social Masculina azul"
          className="rounded-xl mb-4 w-full object-cover"
        />
        <h2 className="text-2xl font-semibold mb-2">Camisa Social Masculina Azul</h2>
        <p className="text-gray-700">
          Uma camisa elegante e moderna feita em tricoline de alta qualidade.
        </p>
      </div>
    </div>
  );
}