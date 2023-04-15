import React from "react";
import Image from "next/image";
import Link from "next/link";

const allProducts = [
  {
    slug: "dummy book",
    image: "/rdpd.jpeg",
    name: "Rich Dad Poor Dad",
    price: 300,
    buynow: "/order",
  },
  {
    slug: "dummy book",
    image: "/rdpd.jpeg",
    name: "Rich Dad Poor Dad",
    price: 300,
    buynow: "/order",
  },
  {
    slug: "dummy book",
    image: "/rdpd.jpeg",
    name: "Rich Dad Poor Dad",
    price: 300,
    buynow: "/order",
  },
  {
    slug: "dummy book",
    image: "/rdpd.jpeg",
    name: "Rich Dad Poor Dad",
    price: 300,
    buynow: "/order",
  },
  {
    slug: "dummy book",
    image: "/rdpd.jpeg",
    name: "Rich Dad Poor Dad",
    price: 300,
    buynow: "/order",
  },
  {
    slug: "dummy book",
    image: "/rdpd.jpeg",
    name: "Rich Dad Poor Dad",
    price: 300,
    buynow: "/order",
  },
];

const Products = () => {
  return (
    <div className="px-16 py-10 md:px-24 lg:px-28">
      <h2 className="text-2xl mb-2">All Books</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProducts.map((product) => (
          <div
            key={product.slug}
            className="rounded bg-white border-yellow-200 shadow-md hover:shadow-xl flex justify-center flex-col px-2 pt-3 pb-5"
          >
            <Image
              src={product.image}
              layout="intrinsic"
              width={550}
              height={370}
            />

            <div className="mt-4 flex items-baseline">
              <h1 className="ml-1 text-xl flex-1">{product.name}</h1>
              <h2 className="mr-2 text-lg text-yellow-500">${product.price}</h2>
            </div>

            <div className="mt-4">
              <span
                href={product.buynow}
                className="ml-1 bg-yellow-600 rounded px-4 py-2 text-yellow-100 cursor-pointer"
              >
                Buy Now
              </span>
              <Link
                as={`/products/${product.slug}`}
                href="/products/[slug]"
                passHref
              >
                <span className="ml-3 border border-yellow-400 rounded px-4 py-2 text-yellow-600 cursor-pointer">
                  Details
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
