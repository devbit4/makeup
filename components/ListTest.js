import { useRouter } from "next/router";

export default function ListTest({ products }) {
  const router = useRouter();
  const handleItemClick = (id) => {
    router.push(`/view/${id}`);
  };
  return (
    <ul className="list">
      {products &&
        products.map((product) => {
          return (
            <li
              className="item"
              key={product.id}
              onClick={() => handleItemClick(product.id)}
            >
              <img src={product.image_link}></img>
              <strong>{product.name}</strong>
              <span>{product.product_type}</span>
              <strong>${product.price}</strong>
            </li>
          );
        })}
    </ul>
  );
}
