"use client";

import { useEffect, useState } from "react";

const Loading = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // 🔒 LOCK SCROLL
    document.body.style.overflow = "hidden";

    // counter
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // start exit animation
    const timer = setTimeout(() => {
      setExit(true);
    }, 3000);

    // remove loader & unlock scroll
    const cleanup = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      clearTimeout(cleanup);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-foreground
        transition-transform duration-500 ease-in-out
        pointer-events-none
        ${exit ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm font-medium text-primary">{count}%</span>
      </div>
    </div>
  );
};

export default Loading;
