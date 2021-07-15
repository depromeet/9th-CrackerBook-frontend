import { instance } from "./index";

const postStudy = (data) => {
  return instance.post(`studies`, data);
};

export { postStudy };
