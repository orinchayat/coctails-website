import { Link } from "@tanstack/react-router";
import { Card } from "antd";
import { memo } from "react";

interface CocktailCardProps {
  cocktail: BaseCocktail;
}

const CocktailCard = ({ cocktail }: CocktailCardProps) => {
  return (
    <Link to="/recipe/$id" params={{ id: cocktail.idDrink }}>
      <Card
        hoverable
        cover={<img alt={cocktail.strDrink} src={cocktail.strDrinkThumb} />}
      >
        <Card.Meta title={cocktail.strDrink} />
      </Card>
    </Link>
  );
};
export default memo(CocktailCard);
