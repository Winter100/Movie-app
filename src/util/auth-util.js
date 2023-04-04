export const getAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  return token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export function tokenLoader() {
  return getAuthToken();
}
