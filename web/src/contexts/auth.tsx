import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { api } from "../services/api";
import { UserLogin } from "../model/login";

type Session = {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  onLogin: (login: UserLogin) => Promise<void>;
  onLogout: () => void;
};

const AuthContext = createContext<Partial<Session>>({});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");

      if (token) {
        console.log("Token is load");
        api.defaults.headers.Authorization = `Bearer ${token}`;

        const { data: user } = await api.get("api/profile");
        if (user) {
          setUser(user);
        }
      } else {
        await router.push("/");
      }

      setLoading(false);
    }

    loadUserFromCookies();
  }, []);

  const onLogin = async (login: UserLogin) => {
    setLoading(true);

    const { data: token } = await api.post<string>("api/login", {
      ...login,
      device_name: "device_name"
    });

    if (token) {
      Cookies.set("token", token, { expires: 60 });
      window.location.pathname = "/dashboard";
      api.defaults.headers.Authorization = `Bearer ${token}`;

      const { data: user } = await api.get("api/profile");
      setUser(user);
      console.log("Got user ", user);
    }

    setLoading(false);
  };

  const onLogout = () => {
    Cookies.remove("token");
    setUser(null);

    delete api.defaults.headers.Authorization;
    window.location.pathname = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        onLogin,
        loading,
        onLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): Partial<Session> => useContext(AuthContext);

export const ProtectRoute: React.FC = ({ children }): JSX.Element => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <span>Loading ...</span>;
  }

  if (!isAuthenticated) {
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/recovery" &&
      window.location.pathname !== "/register"
    ) {
      // return <LoadingScreen />;
      return <span>Loading ...</span>;
    }
  }

  return <>{children}</>;
};
