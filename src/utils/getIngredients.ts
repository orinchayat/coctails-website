const getIngredients = (cocktail: Cocktail) => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({
        name: ingredient,
        measure: measure || "To taste",
      });
    }
  }

  return ingredients;
};
export default getIngredients;
