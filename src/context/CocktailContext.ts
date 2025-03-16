import { createContext, Dispatch, SetStateAction } from "react";

type CocktailContextType = [
  BaseCocktail[],
  Dispatch<SetStateAction<Cocktail[]>>,
];

const CocktailContext = createContext<CocktailContextType>([[], () => {}]);
export default CocktailContext;
