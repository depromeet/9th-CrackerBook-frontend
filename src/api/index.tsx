import axios from "axios";

function createInstance() {
  return axios.create({
    baseURL: process.env.BASE_URL,
  });
}

export const instance = createInstance();
