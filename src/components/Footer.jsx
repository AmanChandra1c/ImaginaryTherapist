"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-background">
        <div className="sm:pb-42 pb-6 max-sm:text-center sm:px-14 pt-12 container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:text-left items-center content-baseline text-lg sm:font-medium ">
            {/* Brand / Address */}
            <div>
              <h3 className="text-3xl sm:text-5xl font-semibold mb-6 font-sans-serif">
                Dr. Maya Reynolds
              </h3>
              <p className="mb-2 opacity-90">Santa Monica, CA</p>
              <p className="mb-6 opacity-90">
                In-Person & Virtual Therapy for Adults
              </p>

              <a
                href="mailto:email@example.com"
                className="underline block mb-2 opacity-90"
              >
                hello@drmayareynolds.com
              </a>
              <a href="tel:5555555555" className="underline opacity-90">
                (310) 555-0198
              </a>
            </div>
            <div></div>
            <div className="max-sm:flex max-sm:items-center max-sm:justify-between max-sm:flex-col flex justify-between sm:-mt-14">
              <div>
                <h4 className="sm:text-4xl text-2xl font-sans-serif font-semibold max-sm:mt-20 max-sm:mb-4 mb-8">
                  Hours
                </h4>
                <p className="mb-2 opacity-90">Monday - Friday</p>
                <p className="opacity-90">10:00 AM - 06:00 PM</p>
              </div>
              <div className="sm:text-end">
                <h4 className="sm:text-4xl font-sans-serif text-2xl max-sm:mt-10 font-semibold mb-6">
                  Find
                </h4>
                <Link href="#" className="underline opacity-90 ">
                  Home
                </Link>
                <br />
                <Link href="#" className="underline opacity-90">
                  Contact
                </Link>
                <br />
                <Link href="#" className="underline opacity-90">
                  Services
                </Link>
                <br />
                <Link href="#" className="underline opacity-90">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-lg py-8 bg-foreground">
        <div className="text-center space-y-6">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 underline font-semibold">
            <Link href="#">Privacy & Cookies Policy</Link>
            <Link href="#">Good Faith Estimate</Link>
            <Link href="#">Website Terms & Conditions</Link>
            <Link href="#">Disclaimer</Link>
          </div>

          {/* Credits */}
          <p className="">
            Website design inspired by : &nbsp;
            <a href="#" className="underline">
              Go Bloom Creative
            </a>
          </p>

          {/* Copyright */}
          <p className="">
            © 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
