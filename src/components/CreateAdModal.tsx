import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { GameController } from "phosphor-react";
import { useState, useEffect, FormEvent } from "react";
import { Input } from "./Form/Input";
import { ListaGames } from "./ListaGames";

interface Game {
  id: string;
  title: string;
  genero: string;
}

interface Genero {
  name: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [generos] = useState<Genero[]>([
    {
      name: "Ação",
    },
    {
      name: "Aventura",
    },
    {
      name: "Jogo de tiro",
    },
    {
      name: "Estratégia",
    },
  ]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  async function handleCreateGame(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    try { 
      await axios.post("http://localhost:3333/games/new-game", {
        title: data.title,
        bannerUrl: data.bannerUrl,
        genero: data.genero,
      })
      alert('Jogo criado com Sucesso!')
    } catch(err) {
      console.log(err)
      alert('Erro ao criar novo jogo')
    }
   
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#3c5645] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
        <Dialog.Title className="txt-3xl font-black text-center">
          CADASTRE UM NOVO JOGO
        </Dialog.Title>
        <form onSubmit={handleCreateGame} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold text-xs">
              Qual o Game?
            </label>
            <Input name="title" id="game" placeholder="Nome do Jogo" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="bannerUrl" className="font-semibold text-xs">
              Imagem Banner
            </label>
            <Input
              name="bannerUrl"
              id="bannerUrl"
              type="text"
              placeholder="Link da Imagem"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="genero" className="font-semibold text-xs">
              Gênero{" "}
            </label>
            <select
              name="genero"
              className="bg-zinc-900 py-2 px-4 rounded text-sm placeholder:text-zinc-500"
              required
            >
              <option disabled selected value="">
                Selecione um gênero
              </option>
              {generos.map((genero) => {
                return (
                  <option key={genero.name} value={genero.name}>
                    {genero.name}
                  </option>
                );
              })}
            </select>
          </div>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold"
            >
              Cancelar
            </Dialog.Close>
            <button
              className="bg-green-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-green-700"
              type="submit"
            >
              <GameController size={24} />
              Cadastrar
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
