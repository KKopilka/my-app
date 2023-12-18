'use client'
import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import {
  SearchBarContainer,
  SearchInput,
  SearchButton
} from "./index.styled";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setQuery(event.target.value);
  };

  return (
    <SearchBarContainer onSubmit={handleSubmit} className="search-bar">
      <SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        className="search-bar__input"
        placeholder="Search..."
      />
      <SearchButton type="submit" className="search-bar__button">
        Search
      </SearchButton>
    </SearchBarContainer>
  );
}
