// import React, { useState, useEffect } from 'react';

// function Card({ product }) {
//   const [price, setPrice] = useState(product.price || 0);
//   useEffect(() => {
//     console.log("pro:",product);
//     console.log(typeof product);
//     console.log("title:",product["title"]);
//   }, []);
//   const handleIncrement = () => {
//     setPrice(price + 1);
//   };

//   const handleDecrement = () => {
//     if (price > 0) {
//       setPrice(price - 1);
//     }
//   };
 
//   return (
//     <div className='card'>
      
//       <div className="card-content">
//         <div className="card-header">
//           <h2 className="card-title">{product[0]?.title}</h2>
//           <p className="card-description">{product.description}</p>
//         </div>
//         <div className="card-body">
//           <p className="card-price">${price.toFixed(2)}</p>
//           <div className="card-buttons">
//             <button className="card-button" onClick={handleIncrement}>
//               +
//             </button>
//             <button className="card-button" onClick={handleDecrement}>
//               -
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

