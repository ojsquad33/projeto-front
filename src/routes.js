import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Aula from "./pages/Aula";
import Header from "./components/Header";
import trilhas from "./services/database";

function ProtectedRoutes({ redirectTo }) {
  const estaAutenticado = true;
  return estaAutenticado ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoutes redirectTo={"/"} />}>
        <Route path="home" element={<Header text="Trilhas Orange Evolution" />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="aula/:pag/:trilha/:curso" element={<Header text="" />}>
          <Route path="" element={<Aula />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  );
}
