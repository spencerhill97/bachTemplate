import "../index.css";

function Header({ title }) {
  return (
    <div className="header mt-0 w-full bg-[#f1d5ae]">
      <h2 className="largeText right-0 top-0 row-span-1 border-b-[1px] border-t-[1px] border-black py-5 ps-4 font-['Cinzel'] font-bold">
        {title}
      </h2>
    </div>
  );
}

export default Header;
