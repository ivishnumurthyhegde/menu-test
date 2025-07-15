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
     <img 
    src='https://instagram.fblr25-1.fna.fbcdn.net/v/t51.2885-19/465076128_3225459697585118_4336247309009200955_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fblr25-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QHZp2cKVfDfNpB3AtLV2YBTRfmAvF9iagFU9ZH5PLvmDLMORhqWtMZferSmEQDrljU&_nc_ohc=kPBAeMTqQRoQ7kNvwGbPUkQ&_nc_gid=GtLimowc1cEUyvABI3jaxA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfR3YytvRWWO-bARwq8Gs_g0afcbRKeXklvZjmboHuP6Ow&oe=687BCEE3&_nc_sid=8b3546'
    alt='Restaurant Logo'
    className='restaurant-logo'
    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
  />
        <h2>Aramane Donne Biriyani</h2>
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
