import "./styles/main.css";
import logoImg from "./assets/logo1.png";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Router from './router';


const queryClient = new QueryClient();

function App() {
  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <img src={logoImg} alt="logo" />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
