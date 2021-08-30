import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  /// here is the items of data 
  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCategories] = useState([])

  //only pass if the data matches the item in the category
  const filterItems = (category) =>{
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>
          our menu
        </h2>
        <div className="underline">

        </div>
        <Categories filterItems={filterItems} />
        {/* //sending the data  prooops to the menu components */}
        <Menu items={menuItems}/>
      </div>
    </section>
  </main>;
}

export default App;
