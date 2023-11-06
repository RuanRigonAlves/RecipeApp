import { RES_PER_PAGE } from "../config/config.js";

export const state = {
  recipe: {},
  recipes: [],
  results: 0,
  page: 1,
  pages: 0,
};

export const selectedPage = function (page = 1) {
  let itensUpTo = page * RES_PER_PAGE;
  const itensPage = state.recipes.slice(itensUpTo - RES_PER_PAGE, itensUpTo);

  return itensPage;
};
