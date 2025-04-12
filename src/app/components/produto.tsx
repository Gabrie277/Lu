"use client";

import { useEffect, useState } from "react";

interface Produto {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  link: string;
}

const Produtos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/produtos")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="produtos" className="bg-text-black py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 bg-text-black-10">Produtos</h2>

      {loading ? (
        <p className="text-center">Carregando produtos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <a href={produto.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  onError={(e) => {
                    e.currentTarget.src = "/fallback.jpg";
                  }}
                  className="w-full h-85 object-cover rounded mb-3"
                />
                <h3 className="text-lg font-semibold">{produto.nome}</h3>
                <p className="text-blue-600 font-bold mt-2">
                  R$ {produto.preco.toFixed(2)}
                </p>
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Produtos;
