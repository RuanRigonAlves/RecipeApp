export const callRecipe = async function (recipeID) {
  const response = await fetch(
    "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
  );
  const jsonResponse = await response.json();
  const { recipe } = jsonResponse.data;
  //   console.log(recipe);
  return recipe;
};

// callRecipe();
