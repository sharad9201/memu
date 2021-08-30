import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  /// here is the items of data 
  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCategories] = useState([])


  return <main>
    <section className="menu section">
      <div className="title">
        <h2>
          our menu
        </h2>
        <div className="underline">

        </div>
        <Categories />
        {/* //sending the data  prooops to the menu components */}
        <Menu items={menuItems}/>
      </div>
    </section>
  </main>;
}

export default App;
