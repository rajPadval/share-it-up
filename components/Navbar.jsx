import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center h-16 bg-yellow-600 text-yellow-100 tracking-widest">
        <h1 className="flex-grow ml-5 text-2xl font-semibold">ShareItUp</h1>

        <Link href="/">
          <span className="mr-5 text-xl font-medium hover:underline">Home</span>
        </Link>

        <Link href="/seller-signup">
          <span className="mr-5 text-xl font-medium hover:underline">
            Sell books?
          </span>
        </Link>

        <Link
          href={`https://${process.env.NEXT_PUBLIC_FOXY_SUBDOMAIN}.foxycart.com/cart?cart=view`}
          className="mr-5 text-xl font-medium hover:underline cursor-pointer"
        >
          Cart (<span data-fc-id="minicart-quantity">0</span>)
        </Link>
      </nav>
      {/* <main>{children}</main> */}
    </>
  );
};

export default Navbar;
