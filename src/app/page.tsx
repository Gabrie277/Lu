import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Produto from "./components/produto";
import Skills from "./components/Skills";



export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Produto />
      <Contacts />
   
    </main>
  );
}


