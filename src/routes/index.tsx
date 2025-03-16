import { createFileRoute } from "@tanstack/react-router";
import CocktailsGrid from "../components/CocktailGrid";

export const Route = createFileRoute("/")({
  component: () => <CocktailsGrid />,
});
