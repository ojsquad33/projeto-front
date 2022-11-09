import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Aula from "./pages/Aula";
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
        <Route path="home" element={<Header text="Trilhas Orange Evolution" />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="aula/:pag/:trilha/:curso" element={<Header text="" />}>
          <Route path="" element={<Aula />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
