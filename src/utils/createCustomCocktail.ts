const createCustomCocktail = (values: CocktailFormValues, imageUrl: string) => {
  const customCocktail: Cocktail = {
    idDrink: `custom-${Date.now()}`,
    strDrink: values.name,
    strCategory: values.category,
    strAlcoholic: values.alcoholic,
    strGlass: values.glass,
    strInstructions: values.instructions,
    strDrinkThumb:
      imageUrl ||
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    strDrinkAlternate: null,
    strTags: null,
    strVideo: null,
    strIBA: null,
    strInstructionsES: null,
    strInstructionsDE: null,
    strInstructionsFR: null,
    strInstructionsIT: null,
    strInstructionsZHHANS: null,
    strInstructionsZHHANT: null,
    strImageSource: null,
    strImageAttribution: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  };

  // Add ingredients and measures as individual properties
  values.ingredients.forEach((ingredient, index) => {
    const i = index + 1;
    customCocktail[`strIngredient${i}`] = ingredient.name;
    customCocktail[`strMeasure${i}`] = ingredient.measure;
  });

  // Fill remaining ingredient slots with null (up to 15)
  for (let i = values.ingredients.length + 1; i <= 15; i++) {
    customCocktail[`strIngredient${i}`] = null;
    customCocktail[`strMeasure${i}`] = null;
  }

  return customCocktail;
};

export default createCustomCocktail;
