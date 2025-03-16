import { Descriptions } from "antd";

interface RecipeDetailsProps {
  cocktail: Cocktail;
}

const RecipeDetails = ({ cocktail }: RecipeDetailsProps) => {
  return (
    <Descriptions
      size="small"
      column={1}
      styles={{
        label: { fontWeight: "bold", width: "120px" },
        content: { fontSize: "15px" },
      }}
      style={{ marginBottom: "24px" }}
    >
      <Descriptions.Item label="Glass">{cocktail.strGlass}</Descriptions.Item>
      {cocktail.strIBA && (
        <Descriptions.Item label="IBA Category">
          {cocktail.strIBA}
        </Descriptions.Item>
      )}
      {cocktail.strTags && (
        <Descriptions.Item label="Tags">{cocktail.strTags}</Descriptions.Item>
      )}
    </Descriptions>
  );
};

export default RecipeDetails;
