import React, { createContext, useEffect, useState } from 'react';
import { Theme } from '@liquid-design/liquid-design-react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });

  const setAuthData = (data) => {
    if (data.password === '123456')
      setAuth({ data: data });
  };

  useEffect(() => {
    setAuth({ loading: false, data: JSON.parse(window.localStorage.getItem('authData')) });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      <Theme className="App">
        {children}
      </Theme>
    </authContext.Provider>
  );
};

export default AuthProvider;