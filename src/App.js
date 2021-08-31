import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// set carrries or helps to bring unique value
// array help to maontain he data structure
const allCategories = ['all', ...new Set(items.map((item)=>item.category)
)]

function App() {
  /// here is the items of data 
  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCategories] = useState(allCategories)

  //only pass if the data matches the item in the category
  const filterItems = (category) =>{
    if(category === 'all')
    {
      setMenuItems(items)
      return
    }
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
        <Categories categories={categories} filterItems={filterItems} />
        {/* //sending the data  prooops to the menu components */}
        <Menu items={menuItems}/>
      </div>
    </section>
  </main>;
}

export default App;
