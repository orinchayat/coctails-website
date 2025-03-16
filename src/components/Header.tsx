import { Typography, Layout, Input, Button } from "antd";
import { Link } from "@tanstack/react-router";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import SearchBar from "./SearchBar";

const { Title } = Typography;
const { Header: AntHeader } = Layout;
const { Search } = Input;

const Header = () => {
  return (
    <AntHeader
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        height: "auto",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Title
          level={2}
          style={{
            margin: "16px 0",
            color: "#1890ff",
          }}
        >
          Cocktail Explorer
        </Title>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <SearchBar />

        <Link to="/add">
          <Button type="primary" icon={<PlusOutlined />}>
            Add Cocktail
          </Button>
        </Link>
      </div>
    </AntHeader>
  );
};

export default Header;
