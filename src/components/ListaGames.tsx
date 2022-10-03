import DetalhesGame from "../pages/DetalhesGame/DetalhesGame";

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  genero: string;
  adsCount: number;
}
export function ListaGames(props: GameBannerProps) {
  return (
    <div className="relative rounded-lg overflow-hidden">
    <img src={props.bannerUrl} alt="logo" />
    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block">
      {props.title}
      </strong>
      <span className="text-zinc-300 text-sm block mt-1">{props.genero}</span>
    </div>
  </div>
  )
}