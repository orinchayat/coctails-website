import { Form, Select } from "antd";
const { Option } = Select;

const FormGlass = () => {
  return (
    <Form.Item
      name="glass"
      label="Glass Type"
      rules={[{ required: true, message: "Please select a glass type" }]}
      style={{ flex: 1 }}
    >
      <Select>
        <Select.Option value="Highball glass">Highball Glass</Select.Option>
        <Select.Option value="Cocktail glass">Cocktail Glass</Select.Option>
        <Select.Option value="Old-fashioned glass">
          Old-Fashioned Glass
        </Select.Option>
        <Select.Option value="Collins glass">Collins Glass</Select.Option>
        <Select.Option value="Whiskey Glass">Whiskey Glass</Select.Option>
        <Select.Option value="Martini Glass">Martini Glass</Select.Option>
        <Select.Option value="Champagne flute">Champagne Flute</Select.Option>
        <Select.Option value="Wine Glass">Wine Glass</Select.Option>
        <Select.Option value="Beer mug">Beer Mug</Select.Option>
        <Select.Option value="Shot glass">Shot Glass</Select.Option>
        <Option value="Shot glass">Shot Glass</Option>
      </Select>
    </Form.Item>
  );
};

export default FormGlass;
