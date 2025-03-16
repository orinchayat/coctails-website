import { useContext, useEffect, useRef, useState } from "react";
import {
  fetchCocktailsByLetter,
  fetchCocktailByName,
  fetchCocktailById,
} from "../services/api";
import CocktailContext from "../context/CocktailContext";
import removeDuplicates from "../utils/removeDuplicatesFileds";

const useCocktails = () => {
  const [cocktails, setCocktails] = useContext(CocktailContext);
  const [currentLetter, setCurrentLetter] = useState<string>("a");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const lastCocktailRefElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          getCocktailsByLetter();
        }
      },
      { threshold: 0.1 }
    );

    if (lastCocktailRefElement.current) {
      observer.observe(lastCocktailRefElement.current);
    }
    return () => {
      if (lastCocktailRefElement.current) {
        observer.unobserve(lastCocktailRefElement.current);
      }
    };
  }, [hasMore, isLoading]);

  const getNextLetter = () => {
    if (currentLetter === "z") {
      setHasMore(false);
      return;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const currentIndex = alphabet.indexOf(currentLetter);
    const nextLetter = alphabet[currentIndex + 1];
    setCurrentLetter(nextLetter);
  };

  const getCocktailsByLetter = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      const newCocktails = await fetchCocktailsByLetter(currentLetter);
      if (newCocktails.drinks) {
        setCocktails((prev) => {
          const combined = [...prev, ...newCocktails.drinks];
          const uniqueCocktails = removeDuplicates(combined);

          return uniqueCocktails.sort((a, b) =>
            a.strDrink.localeCompare(b.strDrink)
          );
        });
      }

      getNextLetter();
    } catch (error) {
      error instanceof Error
        ? setError(error.message)
        : setError("error fetching cocktails");
    } finally {
      setIsLoading(false);
    }
  };

  const getCocktailById = async (id: number) => {
    try {
      setIsLoading(true);

      const existingCocktail = cocktails.find(
        (cocktail) => cocktail.idDrink === id.toString()
      );

      if (existingCocktail) {
        return existingCocktail;
      }
      const cocktailRecipe = await fetchCocktailById(id);
      return cocktailRecipe.drinks?.[0];
    } catch (err) {
      setError("Failed to load cocktail details");
    } finally {
      setIsLoading(false);
    }
  };

  const getCocktailByName = async (name: string) => {
    try {
      setIsLoading(true);
      const searchTerm = name.toLowerCase().trim();

      const existingCocktail = cocktails.find((cocktail) =>
        cocktail.strDrink.toLowerCase().includes(searchTerm)
      );

      if (existingCocktail) {
        return existingCocktail;
      }

      const newCocktail = await fetchCocktailByName(name);

      if (newCocktail.drinks && newCocktail.drinks.length > 0) {
        // Add to context for future searches
        setCocktails((prev) => [...prev, newCocktail.drinks[0]]);
        return newCocktail.drinks[0];
      }

      // If API returns no results
      return null;
    } catch (error) {
      error instanceof Error
        ? setError(error.message)
        : setError("error fetching cocktail by name");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    hasMore,
    lastCocktailRefElement,
    getCocktailsByLetter,
    getCocktailById,
    getCocktailByName,
  };
};

export default useCocktails;
