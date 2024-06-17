import { Link } from "react-router-dom";
export default function Cards({ product, Id, title, variants, image, handle }) {
  console.log(product, Id, title, variants, image);
  return (
    <div className="blog_card" data-product-id={Id}>
      <div className="blog_card_image">
        <img
          height="1024"
          width="1024"
          loading="lazy"
          src={image}
          alt="Perfecting Hamantaschen for Purim"
        />
      </div>
      <div className="blog_card_content">
        <h2 className="blog_card_heading">{title}</h2>
        <div className="blog_card_subtext">${variants[0].price}</div>
      </div>
      <Link to={`/products/${handle}`}></Link>
    </div>
  );
}
