import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/samantafluture/followers",
});

export const githubData = async (url, setDado) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

