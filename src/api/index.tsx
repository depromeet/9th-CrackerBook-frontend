import axios from "axios";

function createInstance() {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });
}

export const instance = createInstance();
