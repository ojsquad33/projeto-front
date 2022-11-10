import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
// import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const Persistlogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await auth?.accessToken;
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
