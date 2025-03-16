import { useEffect, useContext } from "react";
import { Col, Row, Spin } from "antd";
import useCocktails from "../hooks/useCocktails";
import CocktailCard from "./CocktailCard";
import ErrorMessage from "./ErrorMessage";
import CocktailContext from "../context/CocktailContext";
import removeDuplicates from "../utils/removeDuplicatesFileds";

const CocktailsGrid = () => {
  const [cocktails, setCocktails] = useContext(CocktailContext);
  const { error, isLoading, lastCocktailRefElement, getCocktailsByLetter } =
    useCocktails();

  useEffect(() => {
    const hasFetched = sessionStorage.getItem("cocktailsFetched");

    if (!hasFetched) {
      getCocktailsByLetter();
      try {
        const customCocktails = JSON.parse(
          localStorage.getItem("customCocktails") || "[]"
        );

        if (customCocktails.length > 0) {
          setCocktails((prev) => {
            const updatedCocktails = [...prev, ...customCocktails];
            const uniqueCocktails = removeDuplicates(updatedCocktails);

            return uniqueCocktails.sort((a, b) =>
              a.strDrink.localeCompare(b.strDrink)
            );
          });
        }
      } catch (error) {
        console.error("Error loading custom cocktails:", error);
      }
      sessionStorage.setItem("cocktailsFetched", "true");
    }
  }, []);

  if (isLoading && cocktails.length === 0) return <Spin size="large" />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {cocktails.map((cocktail) => (
          <Col key={cocktail.idDrink} span={6}>
            <CocktailCard cocktail={cocktail} />
          </Col>
        ))}
      </Row>
      <div
        ref={lastCocktailRefElement}
        style={{ padding: "20px", textAlign: "center" }}
      >
        {isLoading && <Spin />}
      </div>
    </div>
  );
};

export default CocktailsGrid;
