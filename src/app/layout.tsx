import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import BiaChatWidget from "@/app/components/BiaChatWidget";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Lu Variedades</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Roupas e acessórios femininos com muito estilo. Confira a Lu Variedades!"
        />
        <link rel="icon" href="/ynnothivix.jpg" type="image/jpg" />
      </head>
      <body className="relative min-h-screen flex flex-col bg-white text-gray-900">
        <header>
          <Header />
        </header>

        <main id="content" role="main" className="flex-1">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>

        <BiaChatWidget />
      </body>
    </html>
  );
}
