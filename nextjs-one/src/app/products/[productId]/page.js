import React from "react";
import Link from 'next/link'

export async function generateMetadata({ params, searchParams }, parent) {
  // Extract route params
  const productId = (await params).productId;

  // Create a title with a simulated async delay
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone = ${productId}`);
    }, 500);
  });

  return {
    title,
  };
}


export default async function ProductDetails({ params }) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Product Details </h1>
      <p>Product Quisquam, quod.: {productId} </p>
      <Link href="/products">Back</Link>
    </div>
  )
}