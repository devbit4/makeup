import ListTest from "../../components/sub/ListTest";

export default function Makeup({ products }) {
  console.log(products);
  return (
    <div className="list">
      <ListTest products={products}></ListTest>
      <style jsx>{`
        .list {
          padding: 0 12vw;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique"
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
