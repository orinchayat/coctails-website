import { Form, Input } from "antd";

const FormCocktailName = () => {
  return (
    <Form.Item
      name="name"
      label="Cocktail Name"
      rules={[
        { required: true, message: "Please enter the cocktail name" },
        {
          pattern: /^[a-zA-Z0-9\s\-'&,.()]+$/,
          message:
            "Name can only contain letters, numbers, spaces and basic punctuation",
        },
      ]}
    >
      <Input placeholder="Enter cocktail name" />
    </Form.Item>
  );
};

export default FormCocktailName;
