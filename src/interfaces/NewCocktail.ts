interface Ingredient {
  name: string;
  measure: string;
}

interface NewCocktail {
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  instructions: string;
  ingredients: Ingredient[];
  image: string;
}
