import React, { useState } from "react";

export default function CharacterForm(props) {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
    reset();
  };
  const reset = () => {
    setSearch("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input type={"text"} onChange={handleSearchChange} value={search} />
      <button>Search</button>
    </form>
  );
}
