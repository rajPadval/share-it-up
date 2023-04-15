import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const name = "RICH DAD POOR DAD";
const image = "/rdpd.jpeg";
const price = 300;
const description =
  "lorem3ldadfj lafjdfjdjad jfbafdhbafhialan udhoha ufd ahdahdfad adjlafhfah ajhajdfdhfi haf";

export default function Product({ product, foxyForm }) {
  const router = useRouter();
  const SLUG = router.query.slug;
  return (
    <>
      <Navbar />
      <div className="px-16 py-10 md:px-24 lg:px-28">
        <div className="mt-8 grid lg:grid-cols-2">
          <div>
            <Image src={image} layout="responsive" width={550} height={350} />
          </div>

          <div className="py-5 lg:px-10 lg:py-3">
            <h1 className="text-3xl">{name}</h1>
            <h2 className="text-2xl text-gray-600">${price}</h2>
            <div className="my-2 mx-1">{description}</div>

            <div dangerouslySetInnerHTML={{ __html: "none" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
