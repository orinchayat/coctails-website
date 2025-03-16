import { createRootRoute, Outlet, useSearch } from "@tanstack/react-router";
import Header from "../components/Header";
import CocktailContext from "../context/CocktailContext";
import { useState } from "react";

export const Route = createRootRoute({
  component: () => {
    const cocktailsHook = useState<Cocktail[]>([]);

    return (
      <CocktailContext.Provider value={cocktailsHook}>
        <Header />
        <Outlet />
      </CocktailContext.Provider>
    );
  },
});
