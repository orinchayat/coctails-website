import { List } from "antd";
import Title from "antd/es/typography/Title";

interface RecipeIngredientsProps {
  ingredients: { name: string; measure: string }[];
}

const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  return (
    <>
      <Title level={4} style={{ marginBottom: "12px" }}>
        Ingredients
      </Title>
      <List
        bordered
        size="small"
        style={{
          marginBottom: "24px",
          backgroundColor: "#fafafa",
          borderRadius: "4px",
        }}
        dataSource={ingredients}
        renderItem={(item) => (
          <List.Item style={{ padding: "8px 16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span style={{ fontWeight: "bold" }}>{item.name}</span>
              <span>{item.measure}</span>
            </div>
          </List.Item>
        )}
      />
    </>
  );
};

export default RecipeIngredients;
