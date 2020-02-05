import axios from "axios";

export function withAuth() {
  const token = localStorage.getItem("token");
  console.log(token);
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
  return instance;
}
