import { instance } from "./index";

const getBooksByName = (name) => {
  return instance.get(`books?name=${name}`);
};

const getBooksByAuthor = (author) => {
  return instance.get(`books?author=${author}`);
};

export { getBooksByName, getBooksByAuthor };
