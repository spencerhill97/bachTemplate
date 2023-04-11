import { navLinks } from "../data";
import { useState } from "react";
import "../index.css";

function Navbar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed right-0 top-0 z-[99999] flex items-center justify-between p-4 pt-[150px] text-white">
      <nav>
        <div className="toggle absolute right-6 top-6 rounded-xl px-[10px] py-[5px]">
          <i
            onClick={showMenu}
            className="fa-solid fa-bars cursor-pointer text-4xl"
          ></i>
        </div>

        <ul
          className={
            active
              ? "fixed inset-0 left-1/4 flex flex-col items-center justify-center gap-4 bg-black/40 uppercase backdrop-blur-lg"
              : "hidden"
          }
        >
          <div className="absolute right-7 top-7">
            <i
              onClick={showMenu}
              className="fa-solid fa-xmark cursor-pointer text-4xl"
            ></i>
          </div>
          {navLinks.map((link) => {
            const { id, href, name } = link;
            return (
              <li
                className="headerText round-xl bg-[rgba(255, 255, 255, 0.7)] px-[10px] py-[5px] font-[Aboreto] font-semibold"
                key={id}
              >
                <a className="hover-underline-animation" href={href}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
