import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
// import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Persistlogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const refresh = useRefreshToken();
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axiosPrivate(); //testar se é isso mesmo.
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    !auth?.accessToken ? verifyToken() : setIsLoading(false);
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default Persistlogin;
