export const getAuthToken = () => {
  const token = localStorage.getItem("movie-token");

  if (!token) {
    return null;
  }

  return token;
};

export const getAuthName = () => {
  const name = localStorage.getItem("movie-name");

  if (!name) {
    return null;
  }
  return name;
};

export const logout = () => {
  localStorage.removeItem("movie-token");
  localStorage.removeItem("movie-name");
};

export function tokenLoader() {
  return getAuthToken();
}
