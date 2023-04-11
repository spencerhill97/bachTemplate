import "../index.css";

function Person({ id, name, image, horoscope, room, relationship }) {
  return (
    <article
      className={`${
        id % 2 === 0
          ? "min-[320px]: justify-start ps-[20px] min-[992px]:ps-[20%]"
          : "min-[320px]: justify-end pe-[20px] min-[992px]:pe-[20%]"
      } person first: flex w-full flex-row`}
    >
      <figure className={id % 2 === 0 ? "order-first" : "order-last"}>
        <img
          src={image}
          alt={name}
          className=" portrait rounded-full object-contain"
        />
      </figure>
      <div className="bio flex flex-col items-center justify-center">
        <ul className="flex flex-col items-center justify-center min-[300px]:px-4">
          <li className="text-center font-['Cinzel'] text-[1.35rem] font-bold max-[319px]:text-[1.25rem]">
            {name}
          </li>
          <li className="text-center font-['Aboreto'] text-[1.15rem] text-xl max-[319px]:text-[1rem]">
            {horoscope}
          </li>
          <li className="text-center font-['Courgette'] text-[1.15rem] max-[319px]:text-[1rem]">
            Room #{room}
          </li>
          <li className="text-center font-['Dancing_Script'] text-[1.15rem] max-[319px]:text-[1rem]">
            {relationship}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Person;
