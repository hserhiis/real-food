import React from "react";

const CategoryItems = [
  "All",
  "Vegetables",
  "Micro",
  "Fruits",
  "Dishes",
  "Specials",
];

const Categories = () => {
  const [activeId, setActiveId] = React.useState(0);

  const changeActiveId = (i) => {
    setActiveId(i);
  };

  return (
    <>
      <div class="categories">
        <ul>
          {CategoryItems.map((category, i) => (
            <li
              key={category}
              onClick={() => changeActiveId(i)}
              className={activeId === i ? "active" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
