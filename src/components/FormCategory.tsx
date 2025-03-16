import { Form, Select } from "antd";
const { Option } = Select;

const FormCategory = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: "Please select a category" }]}
        style={{ flex: 1 }}
      >
        <Select placeholder="Select a category">
          <Option value="Ordinary Drink">Ordinary Drink</Option>
          <Option value="Cocktail">Cocktail</Option>
          <Option value="Shake">Shake</Option>
          <Option value="Other/Unknown">Other/Unknown</Option>
          <Option value="Cocoa">Cocoa</Option>
          <Option value="Shot">Shot</Option>
          <Option value="Coffee / Tea">Coffee / Tea</Option>
          <Option value="Homemade Liqueur">Homemade Liqueur</Option>
          <Option value="Punch / Party Drink">Punch / Party Drink</Option>
          <Option value="Beer">Beer</Option>
          <Option value="Soft Drink">Soft Drink</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default FormCategory;
