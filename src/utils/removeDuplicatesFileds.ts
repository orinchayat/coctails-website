const removeDuplicates = (cocktails: Cocktail[]): Cocktail[] => {
  const uniqueMap = new Map();

  cocktails.forEach((cocktail) => {
    uniqueMap.set(cocktail.idDrink, cocktail);
  });

  // Convert back to array
  return Array.from(uniqueMap.values());
};
export default removeDuplicates;
