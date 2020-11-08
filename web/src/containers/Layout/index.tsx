import React from "react";

import { Dashboard } from "../Dashboard";

import { ProtectRoute, useAuth } from "../../contexts/auth";

const Layout: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return (
    <ProtectRoute>
      {isAuthenticated ? <Dashboard>{children}</Dashboard> : <>{children}</>}
    </ProtectRoute>
  );
};

export default Layout;
