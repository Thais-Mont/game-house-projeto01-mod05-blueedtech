import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from "react";

import axios from "axios";
import { ListaGames } from '../../components/ListaGames';
import { CreateNewGame } from '../../components/CreateNewGame';
import { CreateAdModal } from '../../components/CreateAdModal';
import { matchByText } from "../../helpers/utils";
import SearchBar from '../../components/SearchBar';
import DetalhesGame from '../DetalhesGame/DetalhesGame';



interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  genero: string;
  _count: {
    ads: number;
  };
}

const filterGames = (games: any[], query: string) => {
  if (!query) {
      return games;
  }

  return games.filter((game) => {
      const gameTitle = game.title.toLowerCase();
      return gameTitle.includes(query);
  });
};

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  // const [jogosFiltrados, setJogosFiltrados] = useState([]);
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get('s');
  // const [searchQuery, setSearchQuery] = useState(query || '');
  // const filteredGames = filterGames(games, searchQuery);
  


  useEffect(() => {
    axios("http://localhost:3333/games").then(response => {
        setGames(response.data);
      });
  }, []);



  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
    <h1 className="text-6xl text-white font-black mt-20">
    Seu{" "}
    <span className="bg-clip-text text-transparent bg-font-gradient">
      jogo
    </span>{" "}
    está aqui.
  </h1>

    <div>
      {/* <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
       />      */}
      {/* <ul>
        {filteredGames.map(game =>(
          <div key={game.key}>{game.title}</div>
        ))}
        </ul>  */}
    </div>

  <div className="grid grid-cols-6 gap-6 mt-16">
    {games.map((game) => {
      return (
        <ListaGames
          key={game.id}
          bannerUrl={game.bannerUrl}
          title={game.title}
          genero={game.genero}
          adsCount={game._count.ads}
        />
      );
    })}



  </div>
    <Dialog.Root>
      <CreateNewGame />
     <CreateAdModal />
    </Dialog.Root>
  
</div>
  )
}