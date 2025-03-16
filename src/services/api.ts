export const fetchCocktailsByLetter = async (
  letter: string
): Promise<CocktailResponse> => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    if (!response.ok) {
      throw new Error("error fetching cockltails");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error("error fetching cockltails");
  }
};

export const fetchCocktailById = async (
  id: number
): Promise<CocktailResponse> => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    if (!response.ok) {
      throw new Error("error fetching cocktail");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error("error fetching cocktail");
  }
};

export const fetchCocktailByName = async (
  name: string
): Promise<CocktailResponse> => {
  try {
    const response = await fetch(
      `www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    if (!response.ok) {
      throw new Error("error fetching cocktail");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error("error fetching cocktail");
  }
};
