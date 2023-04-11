import { useState } from "react";
import { Thursday, Friday, Saturday, Sunday } from "../data";
import "../index.css";
import Days from "./Days";
import Polaroids from "./Polaroids";

function Schedules() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section
      id="schedules"
      className="flex min-h-screen w-full flex-col items-center"
    >
      <Polaroids />
      <h2 className="extraLargeText mb-2 mt-5 text-center font-['Cinzel'] font-bold">
        Schedules
      </h2>
      <div className="bloc-tabs flex w-full max-w-[500px] min-[365px]:px-3">
        <button
          className={`${
            toggleState === 1 ? "tabs active-tabs" : "tabs"
          } rounded-t-2xl font-[Aboreto] font-semibold max-[350px]:px-1.5 max-[350px]:text-[.8rem]`}
          onClick={() => toggleTab(1)}
        >
          Thur
        </button>
        <button
          className={`${
            toggleState === 2 ? "tabs active-tabs" : "tabs"
          } rounded-t-2xl font-[Aboreto] font-semibold max-[350px]:px-1.5 max-[350px]:text-[.8rem]`}
          onClick={() => toggleTab(2)}
        >
          Fri
        </button>
        <button
          className={`${
            toggleState === 3 ? "tabs active-tabs" : "tabs"
          } rounded-t-2xl font-[Aboreto] font-semibold max-[350px]:px-1.5 max-[350px]:text-[.8rem]`}
          onClick={() => toggleTab(3)}
        >
          Sat
        </button>
        <button
          className={`${
            toggleState === 4 ? "tabs active-tabs" : "tabs"
          } rounded-t-2xl font-[Aboreto] font-semibold max-[350px]:px-1.5 max-[350px]:text-[.8rem]`}
          onClick={() => toggleTab(4)}
        >
          Sun
        </button>
      </div>

      <div className="content-tabs w-full max-w-[500px] min-[365px]:px-3">
        <article
          className={`${
            toggleState === 1 ? "content active-grid-content" : "content"
          } grid-rows-auto grid-cols-[1.25fr,_3fr] pb-4 pt-2 shadow-2xl`}
        >
          {Thursday.map((details, index) => {
            const { time, event, id } = details;
            return <Days key={id} time={time} event={event} />;
          })}
        </article>
        <article
          className={`${
            toggleState === 2 ? "content active-grid-content" : "content"
          } grid-rows-auto grid-cols-[1.25fr,_3fr] pb-4 pt-2 shadow-2xl`}
        >
          {Friday.map((details) => {
            const { time, event, id } = details;
            return <Days key={id} time={time} event={event} />;
          })}
        </article>
        <article
          className={`${
            toggleState === 3 ? "content active-grid-content" : "content"
          } grid-rows-auto grid-cols-[1.25fr,_3fr] pb-4 pt-2 shadow-2xl`}
        >
          {Saturday.map((details) => {
            const { time, event, id } = details;
            return <Days key={id} time={time} event={event} />;
          })}
        </article>
        <article
          className={`${
            toggleState === 4 ? "content active-grid-content" : "content"
          } grid-rows-auto grid-cols-[1.25fr,_3fr] pb-4 pt-2 shadow-2xl`}
        >
          {Sunday.map((details) => {
            const { time, event, id } = details;
            return <Days key={id} time={time} event={event} />;
          })}
        </article>
      </div>
    </section>
  );
}

export default Schedules;
