import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Cardgrid({ collection }) {
  const [prdData, setData] = useState(0);
  useEffect(() => {
    fetch(
      `https://www.bakersauthority.com/collections/${collection}/products.json`
    )
      .then((response) => response.json())
      .then((data) => setData(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <div className="custom_blog-container">
        <div className="blog_content">
          <h1>Products</h1>
          <div className="blog_cardwp">
            {prdData &&
              prdData.length !== 0 &&
              prdData.map((product, index) => (
                <Cards
                  product={product}
                  key={product.id}
                  Id={product.id}
                  title={product.title}
                  variants={product.variants}
                  image={product.images[0]?.src}
                  handle={product.handle}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
