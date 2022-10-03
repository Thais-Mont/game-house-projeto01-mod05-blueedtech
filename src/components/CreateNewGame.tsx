import { PlusCircle } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateNewGame() {
  return (
    <div className=" mt-8 pt-1.5 bg-font-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#1c281c] py-6 px-8 flex justify-between items-center">
        <div>
          <strong className="text-2xl font-black text-white block">
            Não encontrou seu jogo?
          </strong>
          <span className="text-zinc-300 text-sm block mt-1">
            Cadastre na plataforma e divirta-se
          </span>
        </div>
        <Dialog.Trigger className="py-3 px-4 bg-green-800 hover:bg-green-600 text-white rounded flex items-center gap-3">
          <PlusCircle size={24} />
          Cadastrar novo Jogo
        </Dialog.Trigger>
      </div>
    </div>
  );
}
