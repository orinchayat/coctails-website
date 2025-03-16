import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";

const FormIngredients = () => {
  return (
    <Form.List name="ingredients">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{ display: "flex", marginBottom: 8 }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, "name"]}
                rules={[{ required: true, message: "Missing ingredient" }]}
              >
                <Input placeholder="Ingredient" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, "measure"]}
                rules={[{ required: true, message: "Missing measurement" }]}
              >
                <Input placeholder="Measurement (e.g., 2 oz)" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add Ingredient
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default FormIngredients;
