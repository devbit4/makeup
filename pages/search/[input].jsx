import { useRouter } from "next/router";
import { useState } from "react";
import List from "../../components/sub/List";

export default function Search({ products }) {
  const router = useRouter();
  console.log(products);
  if (products.length === 0) return <h1>조회된 결과가 없습니다</h1>;
  return <List products={products}></List>;
}

export async function getServerSideProps(context) {
  const { input } = context.query;
  const res = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${input}`
  );
  const products = await res.json();

  return { props: { products } };
}
