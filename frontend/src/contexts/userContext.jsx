import { createContext, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

const userContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default userContext;
