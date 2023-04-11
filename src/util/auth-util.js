import { redirect } from "react-router-dom";

//남은 시간
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}

//토큰
export const getAuthToken = () => {
  const token = localStorage.getItem("movie-token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

//닉네임
export const getAuthName = () => {
  const name = localStorage.getItem("movie-name");

  if (!name) {
    return null;
  }
  return name;
};

//Uid
export const getAuthUid = () => {
  const uid = localStorage.getItem("movie-uid");

  if (!uid) {
    return null;
  }
  return uid;
};

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/login");
  }

  return null;
}
