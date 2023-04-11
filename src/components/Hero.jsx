import "../index.css";

function Hero() {
  return (
    <section id="home" className="h-screen w-full">
      <div className="overlay smXL:pt-[100px] h-screen w-full pt-[125px]">
        <div className="flex flex-col items-center justify-center text-white">
          <span className="extraLargeText font-['Cinzel_Decorative'] font-bold">
            Charleston
          </span>
          <span className="headerText font-['Dancing_Script']">
            4.27.23 - 4.30.23
          </span>
          <span className="largeText font-[Courgette]">
            Jessie's Bachelorette
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
