interface CocktailResponse {
  drinks: Cocktail[];
}
interface BaseCocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
}

interface Cocktail extends BaseCocktail {
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strIBA: string | null;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZHHANS: string | null;
  strInstructionsZHHANT: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  [key: string]: string | null | undefined;
}
