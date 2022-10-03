import axios from "axios";
import { useEffect, useState } from "react";
import { ListaGames } from "../../components/ListaGames";


export default function DetalhesGame({game}) {
    return (
  
      <img src={game.bannerUrl} alt="logo" />
    
    );

}