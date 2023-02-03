'use client'
import { useState, useEffect } from "react";
import { ArrowUpIcon} from '@heroicons/react/24/outline'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    showButton ? (
      <button
        className="fixed bottom-0 right-0 m-6 p-3 rounded-full bg-gray-500 text-white hover:bg-orange-600"
        onClick={handleClick}
      >
        <ArrowUpIcon 
        width={18}
        height={18}/>
      </button>
    ) : <></>
  );
};

export default ScrollToTopButton;