import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./types/routes";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";



const Router = () => {
	return (
		<Routes>
			<Route path={RoutePath.LOGIN} element={<Login />} />
			<Route path={RoutePath.HOME} element={<Home />} />
		</Routes>
	);
};

export default Router;