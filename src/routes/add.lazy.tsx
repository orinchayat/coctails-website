import { useContext, useState } from "react";
import { Form, Button, Typography, Card, Divider, message } from "antd";
import { createLazyFileRoute } from "@tanstack/react-router";
import FormCocktailName from "../components/FormCocktailName";
import FormCategory from "../components/FormCategory";
import FormAlcoholicType from "../components/FormAlcoholicType";
import FormGlass from "../components/FormGlass";
import FormIngredients from "../components/FormIngredients";
import FormInstructions from "../components/FormInstructions";
import FormImage from "../components/FormImage";
import getBase64 from "../utils/getBase64";
import FormFileName from "../components/FormFileName";
import createCustomCocktail from "../utils/createCustomCocktail";
import CocktailContext from "../context/CocktailContext";
const { Title } = Typography;

export const Route = createLazyFileRoute("/add")({
  component: AddCocktailForm,
});

function AddCocktailForm() {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [, setCocktails] = useContext(CocktailContext);

  const onFinish = (values: CocktailFormValues) => {
    const customCocktail = createCustomCocktail(values, imageUrl);
    setCocktails((prev) =>
      [...prev, customCocktail].sort((a, b) =>
        a.strDrink.localeCompare(b.strDrink)
      )
    );
    const savedCocktails = JSON.parse(
      localStorage.getItem("customCocktails") || "[]"
    );
    savedCocktails.push(customCocktail);
    localStorage.setItem("customCocktails", JSON.stringify(savedCocktails));

    message.success(`"${values.name}" cocktail added successfully!`);

    form.resetFields();
    setImageUrl("");
  };

  const handleImageChange = (info: UploadInfo) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "error") {
      message.error("Image upload failed");
      return;
    }
    if (info.file.status === "done") {
      setFileName(info.file.name);

      getBase64(info.file.originFileObj as File, (url: string) => {
        setImageUrl(url);
      });
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <Card
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          borderRadius: "8px",
        }}
      >
        <Title level={2} style={{ marginBottom: "24px" }}>
          Add New Cocktail
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            alcoholic: "Alcoholic",
            ingredients: [{ name: "", measure: "" }],
          }}
        >
          <FormCocktailName />
          <div style={{ display: "flex", gap: "16px" }}>
            <FormCategory />
            <FormAlcoholicType />
            <FormGlass />
          </div>
          <FormImage
            handleImageChange={handleImageChange}
            imageUrl={imageUrl}
          />
          <FormFileName fileName={fileName} />
          <Divider orientation="left">Ingredients</Divider>
          <FormIngredients />
          <Divider orientation="left">Instructions</Divider>
          <FormInstructions />
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Add Cocktail
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default AddCocktailForm;
