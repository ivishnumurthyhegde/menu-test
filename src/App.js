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
      <div className='header'>
        <h2>Resturant name</h2>
        <div className='icons'>
          <div className='icon'>
          <a href='tel:1234567890'>
            <span role='img' aria-label='phone'>
              📞
            </span>
            
            <span className='icon-text'>&thinsp;123-456-7890</span>
          </a>
          </div>
          <div className='icon'>
            <span role='img' aria-label='location'>
              📍
            </span>
            <span className='icon-text'>&thinsp;Restaurant Location</span>
          </div>
        </div>
      </div>
      <br />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={filteredItems} />
    </section>
  </main>
  );
}

export default App;
