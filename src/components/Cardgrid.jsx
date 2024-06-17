import { useEffect, useState } from 'react'
import Cards from "./Cards";

export default function Cardgrid({ collection }) {
  const [prdData,setData]=useState(0)
  useEffect(()=>{
  fetch(`https://www.bakersauthority.com/collections/${collection}/products.json`)
            .then(response => response.json())
            .then(data=>setData(data.products))
            .catch(error => console.error('Error fetching data:', error));
          },[])
  return (
    <>
      <div className="custom_blog-container">
        <div className="blog_content">
          <div className="blog_cardwp">
            {prdData &&
              prdData.length !== 0 &&
              prdData.map((product, index) => (
                <Cards
                product={product}
                  key={product.id || index}
                  title={product.title}
                  variants={product.variants}
                  image={product.images[0]?.src}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
