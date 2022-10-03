import { LockClosedIcon } from "@radix-ui/react-icons";
import { HTMLAttributes, useState } from "react";

type BoxLoginType =  HTMLAttributes<HTMLDivElement>

export type BoxLoginProps = {
  onSubmitData: (data: {nickname: string, password: string}) => void
  errorMessage: string
} & BoxLoginType;


export function BoxLogin({onSubmitData, errorMessage}: BoxLoginProps) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (): void => {
    const data = {nickname, password};
    onSubmitData(data);
  } 
  
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Faça Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                placeholder="Email"
                value={nickname}
                onChange={({target}) => setNickname(target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                placeholder="Senha"
                value={password}
                onChange={({target}) => setPassword(target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-white"
              >
                Mantenha-me Conectado
              </label>
            </div>
          </div>

          <div>
            <button
            value="Entrar"
            onClick={handleSubmit}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-green-500 group-hover:text-green-400"
                  aria-hidden="true"
                />
              </span>
              Entrar
            </button>

            <div className="text-sm mt-2">
              <a
                href="#"
                className="font-medium  text-white hover:text-green-500"
              >
                Ainda não possui conta? CLIQUE AQUI PARA CRIAR
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
