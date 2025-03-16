import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

const FormInstructions = () => {
  return (
    <Form.Item
      name="instructions"
      rules={[
        {
          required: true,
          message: "Please enter preparation instructions",
        },
      ]}
    >
      <TextArea
        placeholder="How to prepare the cocktail..."
        autoSize={{ minRows: 4, maxRows: 8 }}
      />
    </Form.Item>
  );
};

export default FormInstructions;
