import { Form, Select } from "antd";
const { Option } = Select;

const FormAlcoholicType = () => {
  return (
    <Form.Item name="alcoholic" label="Type" style={{ flex: 1 }}>
      <Select>
        <Option value="Alcoholic">Alcoholic</Option>
        <Option value="Non alcoholic">Non-Alcoholic</Option>
        <Option value="Optional alcohol">Optional Alcohol</Option>
      </Select>
    </Form.Item>
  );
};
export default FormAlcoholicType;
