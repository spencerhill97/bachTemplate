import { girls } from "../data";
import Person from "./Person";
import Header from "./Header";
import "../index.css";

function Lineup() {
  return (
    <section id="girlies" className="h-100 w-full bg-[#FBFBFB]">
      <Header title="Girlies" />
      <div
        className="h-100 first: min-[768px]: grid-rows-auto m-auto grid w-full max-w-[1100px] grid-cols-2 flex-col flex-col content-center
      items-center space-y-10 pb-8 pt-8 max-[767px]:flex"
      >
        {girls.map((girl, index) => {
          return (
            <Person
              key={girl.id}
              {...girl}
              className={index === 0 ? "bride" : ""}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Lineup;
