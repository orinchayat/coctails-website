import { Typography } from "antd";
const { Title } = Typography;

const RecipeInstructions = ({ instructions }: { instructions: string }) => {
  return (
    <>
      <Title level={4}>Instructions</Title>
      <Typography.Paragraph style={{ fontSize: "15px", lineHeight: "1.6" }}>
        {instructions}
      </Typography.Paragraph>
    </>
  );
};

export default RecipeInstructions;
