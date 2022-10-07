import { CreateEditAdModal } from "./CreateEditAdModal";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  genero: string;
  _count: {
    ads: number;
  };
}


interface GameBannerProps {
  game: Game;
  onEdit: (game: Game) => void;
}
export function ListaGames(props: GameBannerProps) {
  return (
      
      <div className="relative rounded-lg overflow-hidden" onClick={() => props.onEdit(props.game)}>
        <img src={props.game.bannerUrl} alt="logo" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">
            {props.game.title}
          </strong>
          <span className="text-zinc-300 text-sm block mt-1">{props.game.genero}</span>
        </div>
      </div>
  )
}