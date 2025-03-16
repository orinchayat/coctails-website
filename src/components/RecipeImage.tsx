import { Image } from "antd";

interface RecipeImageProps {
  cocktail: Cocktail;
}

const RecipeImage = ({ cocktail }: RecipeImageProps) => {
  return (
    <Image
      src={cocktail.strDrinkThumb}
      alt={cocktail.strDrink}
      style={{
        borderRadius: "6px",
        objectFit: "cover",
        width: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
      }}
    />
  );
};
export default RecipeImage;
