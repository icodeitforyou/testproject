import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productHandle } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  console.log(productHandle, product);

  useEffect(() => {
    fetch(`https://www.bakersauthority.com/products/${productHandle}.json`)
      .then((response) => response.json())
      .then((data) => setProduct(data.product))
      .catch((error) => {
        setError(error);
      });
  }, []);
  return (
    <div>
      {product && (
        <>
          <div className="product_wrapper">
            <div className="product_container">
              <div className="product_left">
                <div className="product_gallary">
                  <div className="product_thmb_imageswp">
                    {product.images &&
                      product.images.length !== 0 &&
                      product.images.map((image, index) => (
                        <div className="product_imgwp">
                          <img
                            height="1024"
                            width="1024"
                            loading="lazy"
                            src={image.src}
                            alt={product.title}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="product_mian_imageswp">
                    {product.images &&
                      product.images.length !== 0 &&
                      product.images.map((image, index) => (
                        <div className="product_imgwp">
                          <img
                            height="1024"
                            width="1024"
                            loading="lazy"
                            src={image.src}
                            alt="Perfecting Hamantaschen for Purim"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="product_right">
                <div className="product_content">
                  <h1 className="product_title">{product.title}</h1>
                  <span className="product_price">${product.variants[0].price}</span>
                  <button className="addtocartbtn">Add To Cart</button>
                  <div className="product_description" dangerouslySetInnerHTML={{__html:product.body_html}}></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
