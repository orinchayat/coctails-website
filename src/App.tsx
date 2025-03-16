import { createRoot } from "react-dom/client";
import CocktailsGrid from "./components/CocktailGrid";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import Header from "./components/Header";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const App = () => {
  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
