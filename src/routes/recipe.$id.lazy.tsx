import { useEffect, useState } from "react";
import { Card, Spin, Row, Col } from "antd";
import { createLazyFileRoute } from "@tanstack/react-router";
import useCocktails from "../hooks/useCocktails";
import ErrorMessage from "../components/ErrorMessage";
import RecipeImage from "../components/RecipeImage";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeInstructions from "../components/RecipeInstructions";
import RecipeDetails from "../components/RecipeDetails";
import RecipeHeader from "../components/RecipeHeader";
import getIngredients from "../utils/getIngredients";

export const Route = createLazyFileRoute("/recipe/$id")({
  component: RecipeRoute,
});

function RecipeRoute() {
  const { id } = Route.useParams();
  const { isLoading, error, getCocktailById } = useCocktails();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const cocktailRes = await getCocktailById(id);
        if (cocktailRes) {
          setCocktail(cocktailRes);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCocktail();
  }, [id]);

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  if (error || !cocktail)
    return <ErrorMessage message={error || " Cocktail not found"} />;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 0" }}>
      <Card
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} md={10}>
            <RecipeImage cocktail={cocktail} />
          </Col>
          <Col xs={24} md={14}>
            <RecipeHeader cocktail={cocktail} />
            <RecipeDetails cocktail={cocktail} />
            <RecipeIngredients ingredients={getIngredients(cocktail)} />
            <RecipeInstructions instructions={cocktail.strInstructions} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
