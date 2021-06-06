import { instance } from "./index";

const getBooksByName = (name, page, size) => {
  return instance.get(`books?name=${name}&page=${page}&size=${size}`);
};

const getBooksByAuthor = (author, page, size) => {
  return instance.get(`books?author=${author}&page=${page}&size=${size}`);
};

export { getBooksByName, getBooksByAuthor };
