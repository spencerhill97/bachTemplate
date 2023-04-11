import planeWing from "../images/plane.webp";
import { useState } from "react";
import "../index.css";
import { arrivals, departures } from "../data";

function Travel() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="travel" className="min-h-screen w-full pb-3">
      <div className="m-auto flex flex-col items-center justify-center pt-8">
        <figure className="h-fit max-w-[200px]">
          <img
            className="plane-wing rounded-t-full"
            src={planeWing}
            alt="plane wing"
          />
        </figure>
        <h2 className="extraLargeText my-2 text-center font-['Cinzel'] font-bold text-black">
          Travel Info
        </h2>
      </div>
      <div className="bloc-tabs m-auto flex w-full max-w-[600px] min-[365px]:px-3">
        <button
          className={`${`${
            toggleState === 1 ? "tabs active-tabs" : "tabs"
          }`} rounded-t-2xl font-[Aboreto] font-semibold`}
          onClick={() => toggleTab(1)}
        >
          Arrivals
        </button>
        <button
          className={`${`${
            toggleState === 2 ? "tabs active-tabs" : "tabs"
          }`} rounded-t-2xl font-[Aboreto] font-semibold`}
          onClick={() => toggleTab(2)}
        >
          Departures
        </button>
      </div>

      <div className="content-tabs content-tabs m-auto max-w-[600px] pb-10 min-[365px]:px-3">
        <table
          className={`${
            toggleState === 1 ? "content active-content" : "content"
          } h-100 table-auto border-separate border-spacing-1 border-blue-400 shadow-2xl`}
        >
          <thead>
            <tr>
              <th className="border border-blue-400 p-1 font-['Open_Sans']">
                Group
              </th>
              <th className="border border-blue-400 p-1 font-['Open_Sans']">
                Approx Time
              </th>
              <th className="border border-blue-400 p-1 font-['Open_Sans']">
                Girls
              </th>
            </tr>
          </thead>
          <tbody>
            {arrivals.map((arrival) => {
              const { id, group, day, time, people } = arrival;
              return (
                <tr key={id}>
                  <td className="border border-blue-400 p-1 text-center font-['Open_Sans']">
                    {group}
                  </td>
                  <td className="border border-blue-400 p-1 text-center font-['Open_Sans']">
                    {day} @ {time}
                  </td>
                  <td className="border border-blue-400 p-1 pe-2 text-end font-['Open_Sans']">
                    {people}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          } h-100 w-full border-separate border-spacing-1 border-blue-400 shadow-2xl`}
        >
          <thead className="w-full">
            <tr>
              <th className="border border-blue-400 p-1 font-['Open_Sans']">
                Group
              </th>
              <th className="border border-blue-400 p-1 font-['Open_Sans']">
                Approx Time
              </th>
              <th className="border border-blue-400 p-1 font-['Open_Sans']">
                Girls
              </th>
            </tr>
          </thead>
          <tbody clasName="w-full">
            {departures.map((arrival) => {
              const { id, group, day, time, people } = arrival;
              return (
                <tr key={id}>
                  <td className="border border-blue-400 p-1 text-center font-['Open_Sans']">
                    {group}
                  </td>
                  <td className="border border-blue-400 p-1 text-center font-['Open_Sans']">
                    {day} @ {time}
                  </td>
                  <td className="border border-blue-400 p-1 pe-2 text-end font-['Open_Sans']">
                    {people}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Travel;
