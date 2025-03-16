interface CocktailFormValues {
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  instructions: string;
  ingredients: {
    name: string;
    measure: string;
  }[];
  strDrinkThumb?: string; // Optional
}
