import { groups } from "./mock";
export const getGroups = new Promise((res) => {
  setTimeout(() => {
    res(groups);
  }, 200);
});
