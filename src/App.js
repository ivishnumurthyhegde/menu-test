import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import axios from 'axios';

function App() {
  const [menuItems, setMenuItems] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]); 
  const [categories, setCategories] = useState(['all']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbxxrrpLGHhlFrkcTdyZGF1mNbbr5zEsJkBoSDeOMS4LU3UOWaH1wLag3BMdjoGsRHNJew/exec');
        const data = response.data;
        console.log("this is response", response);
        console.log("this is data", data);
        const allCategories = new Set(data.map(item => item.category));
        
        setMenuItems(data); 
        setFilteredItems(data); 
        setCategories(['all', ...allCategories]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  const filterItems = (category) => {
    if (category === 'all') {
      setFilteredItems(menuItems);
    } else {
      const newItems = menuItems.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>restaurant name</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={filteredItems} /> 
      </section>
    </main>
  );
}

export default App;