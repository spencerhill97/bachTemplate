import "../index.css";

function Days({ time, event }) {
  return (
    <>
      <p className="py-[5px] text-center font-['Open_Sans'] font-normal">
        {time}
      </p>
      <p className="py-[5px] font-['Open_Sans'] font-light">{event}</p>
    </>
  );
}

export default Days;
