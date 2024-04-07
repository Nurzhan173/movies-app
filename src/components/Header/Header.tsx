import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "./Header.css";
import Search from "../Search/Search";

const Header = observer(() => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isSticky ? "sticky" : ""}`}>
      <Search />
    </div>
  );
});

export default Header;
