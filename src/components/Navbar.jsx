import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <section className="min-w-full py-3 sm:px-14 flex items-center sm:justify-between justify-center sticky top-0 left-0 bg-background z-50 font-serif">
        <h3 className="text-3xl font-semibold text-primary">
          Dr. Maya Reynolds
        </h3>
        <div className="space-x-14 text-primary flex items-baseline max-sm:hidden">
          <Link href="#" className="font-semibold text-lg ">
            Blog
          </Link>
          <Link href="#" className="font-semibold text-lg ">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;