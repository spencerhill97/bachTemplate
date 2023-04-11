import { bedrooms } from "../data";
import Header from "./Header";

import "../index.css";

function Rooms() {
  return (
    <section id="rooms" className="z-[-1] w-full bg-[#F6F6F6]">
      <Header title="Rooms" />
      <div
        className={`h-100 z-[-1] m-auto flex max-w-[1200px] flex-col bg-[#F6F6F6]`}
      >
        {bedrooms.map((room, index) => {
          const { id, image, name, description } = room;
          return (
            <div
              key={id}
              className={`${
                index % 2 !== 0
                  ? "justify-end pe-2 min-[992px]:pe-[10%]"
                  : "ps-2 min-[992px]:ps-[10%]"
              } flex flex-row pt-4`}
            >
              <figure
                className={`${
                  index % 2 === 0 ? "order-first" : "order-last"
                } last: mb-8 shadow-2xl`}
              >
                <img className="rounded-t-lg" src={image} alt={name} />
                <figcaption className="headerText bg-[#faedcd] px-2 font-['Marck_Script']">
                  {description}
                </figcaption>
              </figure>
              <h3 className="largeText vertical relative ps-[5%] text-center font-[Aboreto] font-medium">
                {name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Rooms;
