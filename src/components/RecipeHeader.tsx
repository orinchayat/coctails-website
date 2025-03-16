import { Tag, Typography } from "antd";

interface RecipeHeaderProps {
  cocktail: Cocktail;
}

const { Title } = Typography;

const RecipeHeader = ({ cocktail }: RecipeHeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "16px",
      }}
    >
      <Title level={2} style={{ margin: 0 }}>
        {cocktail.strDrink}
      </Title>
      <div>
        {cocktail.strAlcoholic && (
          <Tag
            color={cocktail.strAlcoholic === "Alcoholic" ? "red" : "green"}
            style={{ marginRight: 8, fontSize: "14px" }}
          >
            {cocktail.strAlcoholic}
          </Tag>
        )}
        {cocktail.strCategory && (
          <Tag color="blue" style={{ fontSize: "14px" }}>
            {cocktail.strCategory}
          </Tag>
        )}
      </div>
    </div>
  );
};

export default RecipeHeader;
