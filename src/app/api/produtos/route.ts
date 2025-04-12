import { NextResponse } from "next/server";

export async function GET() {
  const produtos = [
    {
      id: "1",
      nome: "jaqueta masculina com bolso lapela bege",
      preco: 129.99,
      imagem: "https://cea.vtexassets.com/arquivos/ids/59220968-1600-auto?v=638787803319300000&width=1600&height=auto&aspect=true",
      link: "/app/camisa",
    },
    {
      id: "2",
      nome: "calça de sarja cargo wide preto",
      preco: 189.90,
      imagem: "https://cea.vtexassets.com/arquivos/ids/54658056-1600-auto?v=637897983882700000&width=1600&height=auto&aspect=true",
      link: "#",
    },
    {
      id: "3",
      nome: "calça wide leg jeans feminina cintura alta azul",
      preco: 299.00,
      imagem: "https://cea.vtexassets.com/arquivos/ids/55293305-800-auto?v=638227998391970000&width=800&height=auto&aspect=true",
      link: "#",
    },
    {
      id: "4",
      nome: "sapatilha bico fico com pedras oneself off white",
      preco: 89.90,
      imagem: "https://cea.vtexassets.com/arquivos/ids/58690178-1600-auto?v=638530434551530000&width=1600&height=auto&aspect=true",
      link: "#",
    },
    {
      id: "5",
      nome: "conjunto infantil de moletom curto patrulha canina azul",
      preco: 349.90,
      imagem: "https://cea.vtexassets.com/arquivos/ids/59196338-1600-auto?v=638725700281330000&width=1600&height=auto&aspect=true",
      link: "#",
    },
    {
      id: "6",
      nome: "mochila de rodinha infantil avengers azul marinho - Único",
      preco: 279.90,
      imagem: "https://cea.vtexassets.com/arquivos/ids/58347122-1600-auto?v=638369757796470000&width=1600&height=auto&aspect=true",
      link: "#",
    },
    {
      id: "7",
      nome: "blusa com reflexivo nos ombros esportiva ace preta",
      preco: 89.99,
      imagem: "https://cea.vtexassets.com/arquivos/ids/58936631-1600-auto?v=638597827882130000&width=1600&height=auto&aspect=true",
      link: "#",
    },
    {
      id: "8",
      nome: "camiseta de algodão manga curta mindset preta",
      preco: 45.90,
      imagem: "https://cea.vtexassets.com/arquivos/ids/58875617-1600-auto?v=638579680257230000&width=1600&height=auto&aspect=true",
      link: "#",
    }
  ];

  return NextResponse.json(produtos);
}