import { state } from "./state.js";
import { API_KEY, RES_PER_PAGE } from "../config/config.js";

export const callRecipe = async function (recipeID) {
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeID}`
  );
  const jsonResponse = await response.json();
  const { recipe } = jsonResponse.data;

  return recipe;
};

export const fetchSearchedRecipe = async function (query) {
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&${API_KEY}`
  );

  const jsonResponse = await response.json();

  console.log(jsonResponse);

  state.results = jsonResponse.results;
  state.pages = Math.ceil(jsonResponse.results / RES_PER_PAGE);
  state.recipes = jsonResponse.data.recipes;

  return jsonResponse;
};
