import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);

  const loginService = (email, password) => {
    return axios.post("api/auth/login", {
      email: email,
      password: password,
    });
  };

  const signUpService = (email, password, firstName, lastName) => {
    return axios.post("api/auth/signup", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
  };

  const loginUser = async (email, password) => {
    if (email && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(email, password);
        if (status === 200) {
          localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
        }
      } catch (error) {
        console.error("Error in login user", error);
      }
    }
  };

  const signUpUser = async (email, password, firstName, lastName) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService(email, password, firstName, lastName);
      if (status === 201) {
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
      }
    } catch (error) {
      console.error("Error in login user", error);
    }
  };

  useEffect(() => {
    if (token) {
      // If you need to perform any action when the token changes, you can do it here.
      // For example, fetching user data based on the token, or any other logic you require.
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, loginUser, signUpUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
