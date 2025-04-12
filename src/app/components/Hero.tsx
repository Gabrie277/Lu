const Hero = () => {
  return (
    <section
      id="hero"
      className="text-white h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/parede.jpg')" }} // Certifique-se de que bg-parede.jpg está na pasta public
    >
      {/* Camada escura para dar contraste */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Conteúdo sobre a imagem */}
      <div className="text-center px-5 relative z-10">
        <img
          src="/foto.png" // Certifique-se de que foto.png também está na pasta public
          alt="Minha foto"
          className="w-60 h-60 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Lu Variedades</h1>
        <p className="text-xl mb-6 drop-shadow-md">
          Roupas e acessórios femininos com estilo, charme e variedade pra você!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-600 transition"
          >
            Veja nossos produtos
          </a>
          <a
            href="/catalogo.pdf"
            download
            className="bg-white text-pink-600 px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
          >
            Baixar Catálogo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
