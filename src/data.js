import axios from "axios";
// const menu = [
//   {
//     id: 1,
//     title: 'buttermilk pancakes',
//     category: 'breakfast',
//     price: 159,
//     img: './images/item-1.jpeg',
//     desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//   },
//   {
//     id: 2,
//     title: 'diner double',
//     category: 'lunch',
//     price: 199,
//     img: './images/item-2.jpeg',
//     desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//   },
//   {
//     id: 3,
//     title: 'godzilla milkshake',
//     category: 'shakes',
//     price: 99,
//     img: './images/item-3.jpeg',
//     desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//   },
//   {
//     id: 4,
//     title: 'country delight',
//     category: 'breakfast',
//     price: 299,
//     img: './images/item-4.jpeg',
//     desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//   },
//   {
//     id: 5,
//     title: 'egg attack',
//     category: 'lunch',
//     price: 79,
//     img: './images/item-5.jpeg',
//     desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//   },
//   {
//     id: 6,
//     title: 'oreo dream',
//     category: 'shakes',
//     price: 199,
//     img: './images/item-6.jpeg',
//     desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//   },
//   {
//     id: 7,
//     title: 'bacon overflow',
//     category: 'breakfast',
//     price: 99,
//     img: './images/item-7.jpeg',
//     desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//   },
//   {
//     id: 8,
//     title: 'american classic',
//     category: 'lunch',
//     price: 199,
//     img: './images/item-8.jpeg',
//     desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//   },
//   {
//     id: 9,
//     title: 'quarantine buddy',
//     category: 'shakes',
//     price: 169,
//     img: './images/item-9.jpeg',
//     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//   },

//   {
//     id: 10,
//     title: 'test buddy',
//     category: 'test',
//     price: 169,
//     img: './images/item-9.jpeg',
//     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//   },
// ];

const fetchData = async () => {
  try {
    const response = await axios.get('https://sheetdb.io/api/v1/rb6mr102jkeh3');
    const data = response.data;
    console.log('this is all data', data);
    console.log('this is 1st data', data[0]);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array or handle the error appropriately
  }
};

const menu = fetchData();

export default menu;
