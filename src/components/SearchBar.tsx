import React, { useContext, useState } from "react";
import { Input, AutoComplete, message, Button } from "antd";
import { useNavigate } from "@tanstack/react-router";
import useCocktails from "../hooks/useCocktails";
import CocktailContext from "../context/CocktailContext";

const SearchBar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [options, setOptions] = useState<
    { value: string; label: string; id: string }[]
  >([]);
  const navigate = useNavigate();
  const [cocktails, setCocktails] = useContext(CocktailContext);
  const { getCocktailByName, isLoading } = useCocktails();

  const handleSearch = (searchText: string) => {
    // Filter input to allow only valid characters
    const filteredValue = searchText.replace(/[^a-zA-Z0-9\s\-'&.,()]/g, "");
    setValue(filteredValue);

    if (!filteredValue.trim()) {
      setOptions([]);
      return;
    }

    // Generate options based on current search text
    const searchTerm = filteredValue.toLowerCase().trim();
    const matchingCocktails = cocktails
      .filter((cocktail) =>
        cocktail.strDrink.toLowerCase().includes(searchTerm)
      )
      .slice(0, 5); // Limit to 5 suggestions

    setOptions(
      matchingCocktails.map((cocktail) => ({
        value: cocktail.strDrink,
        label: cocktail.strDrink,
        id: cocktail.idDrink,
      }))
    );
  };

  const handleSelect = (value: string, option: { id: string }) => {
    setValue(value);
    navigate({ to: "/recipe/$id", params: { id: option.id } });
  };

  const handleSearchSubmit = async () => {
    if (!value.trim()) {
      return;
    }

    try {
      const searchTerm = value.trim();

      // Use the getCocktailByName function that already handles context + API search
      const matchedCocktail = await getCocktailByName(searchTerm);

      if (matchedCocktail) {
        navigate({
          to: "/recipe/$id",
          params: { id: matchedCocktail.idDrink },
        });
      } else {
        message.error(`No cocktail found with name "${value}"`);
      }
    } catch (error) {
      message.error(
        `Error searching for cocktail: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  };

  return (
    <AutoComplete
      value={value}
      options={options}
      onSelect={handleSelect}
      onSearch={handleSearch}
      style={{ width: 300 }}
    >
      <Input.Search
        size="large"
        placeholder="Search cocktails..."
        loading={isLoading}
        onSearch={handleSearchSubmit}
        enterButton={
          <Button type="primary" disabled={value.trim() === ""}>
            Search
          </Button>
        }
      />
    </AutoComplete>
  );
};

export default SearchBar;
