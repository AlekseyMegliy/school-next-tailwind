import React from "react";

export default function Form() {
  return (
    <form className="fixed p-4 bg-white rounded-lg shadow-lg z-5 text-right top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <input
        className="header__search-input"
        type="text"
        placeholder="Search for products"
      />
    </form>
  );
}
