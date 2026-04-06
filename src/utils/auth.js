export const login = () => {
  localStorage.setItem("isAuth", "true");
};

export const logout = () => {
  localStorage.removeItem("isAuth");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuth") === "true";
};