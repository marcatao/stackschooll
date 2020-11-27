import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { api } from "../services/api";
import { UserLogin } from "../model/login";

import Loading from "../containers/Loading";
import { Profile } from "../model/profile";

import { MenuItemProps, AllowItem } from "../components/Menu";

import CheckNotificationSVG from "../assets/images/icons/check-notification-svg.svg";
import UserParentSVG from "../assets/images/icons/user-parent-svg.svg";
import StudentSVG from "../assets/images/icons/students-svg.svg";
import HomeSVG from "../assets/images/icons/home-icon-svg.svg";

type Session = {
  isAuthenticated: boolean;
  user: Profile;
  menu: MenuItemProps[];
  loading: boolean;
  onLogin: (login: UserLogin) => Promise<void>;
  onLogout: () => void;
  onShowLoading: (value: boolean) => void;
  onSetMenu: (menu: MenuItemProps[]) => void;
};

const AuthContext = createContext<Partial<Session>>({});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Profile>(null);
  const [menu, setMenu] = useState<MenuItemProps[]>();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        const { data: user } = await api.get("api/profile");
        if (user) {
          const {
            cpf_cnpj: cpfcnpj,
            user_name: username,
            profile_photo_url: profilePhotoUrl,
            ...rest
          } = user;

          setUser({ ...rest, cpfcnpj, username, profilePhotoUrl });
        }
      } else {
        await router.push("/");
      }

      setLoading(false);
    }

    loadUserFromCookies();
  }, []);

  useEffect(() => {
    if (user) {
      onLoadMenu(user.profile);
    }
  }, [user]);

  const onLoadMenu = (profile: string): void => {
    const items: MenuItemProps[] = [
      {
        name: "home",
        title: "Início",
        link: "/dashboard",
        selected: true,
        authorization: [AllowItem.escola, AllowItem.responsavel],
        icon: <HomeSVG />
      },
      {
        name: "notifications",
        title: "Notificações",
        link: "/dashboard/notifications",
        selected: false,
        authorization: [AllowItem.escola, AllowItem.responsavel],
        icon: <CheckNotificationSVG />
      },
      {
        name: "parents",
        title: "Responsáveis",
        link: "/dashboard/parents",
        selected: false,
        authorization: [AllowItem.escola],
        icon: <UserParentSVG />
      },
      {
        name: "students",
        title: "Alunos",
        link: "/dashboard/students",
        selected: false,
        authorization: [AllowItem.escola],
        icon: <StudentSVG />
      }
    ];

    const allowItems = items.filter((item: MenuItemProps) =>
      item.authorization.includes(AllowItem[profile])
    );

    setMenu(allowItems);
  };

  const onShowLoading = (value: boolean) => {
    setLoading(value);
  };

  const onSetMenu = (value: MenuItemProps[]) => {
    setMenu(value);
  };

  const onLogin = async (login: UserLogin) => {
    setLoading(true);

    try {
      const { data, status } = await api.post("api/login", {
        ...login,
        device_name: "device_name"
      });

      if (data && status === 200) {
        Cookies.set("token", data, { expires: 60 });
        window.location.pathname = "/dashboard";
        api.defaults.headers.Authorization = `Bearer ${data}`;

        const { data: user } = await api.get("api/profile");
        setUser(user);
      }

      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
      // window.location.pathname = "/";
    }
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
        menu,
        onSetMenu,
        onLogin,
        loading,
        onLogout,
        onShowLoading
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
    return <Loading />;
  }

  if (!isAuthenticated) {
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/recovery" &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/success"
    ) {
      return <Loading />;
    }
  }

  return <>{children}</>;
};
