import React, { useState } from "react";
import Menu from "./menu";
import Catagories from "./catagories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [catagories, setCatagories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((items) => items.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Catagories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
