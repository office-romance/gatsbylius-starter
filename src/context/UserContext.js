import React from "react";

export const defaultUserContext = {
  loading: false,
  error: false,
  discount: false,
  profile: {},
  handleLogout: () => {},
};

export default React.createContext(defaultUserContext);
