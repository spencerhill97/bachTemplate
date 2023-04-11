import porchSwing from "../images/airbnb.webp";
import "../index.css";

function Stay() {
  return (
    <section id="stay" className="w-full bg-[#F6F6F6] pb-10 pt-10">
      <div className="h-100 m-auto flex w-full max-w-[480px] flex-col items-center justify-center space-y-3 p-3">
        <div className="flex flex-row">
          <figure className="h-fit max-w-[200px]">
            <img
              className="rounded-t-full"
              src={porchSwing}
              alt="porch swing"
            />
          </figure>
          <h2 className="extraLargeText flex w-fit flex-col justify-end ps-3 font-['Cinzel_Decorative'] font-bold">
            Stay
          </h2>
        </div>
        <div className="space-y-3">
          <ul className="facts grid grid-cols-3 rounded-lg bg-[#faedcd] p-2 font-['Marck_Script'] shadow-xl">
            <li>5 bedrooms</li>
            <li>3.5 baths</li>
            <li>Patio</li>
            <li>Balcony</li>
            <li>Firepit</li>
            <li>First aid kit</li>
          </ul>
          <div className="rounded-lg bg-[#faedcd] p-2 shadow-xl">
            <p className="regularText font-['Open_Sans'] font-light">
              Get ready to party! Walk to the best restaurants, shops, and bars
              on King St. Soak up the atmosphere in our outdoor space perfect
              for dinner and cocktails. Safe and convenient with easy access via
              digital keypad.
            </p>
          </div>
        </div>
        <form
          className="flex w-full flex-row justify-end"
          action="https://www.airbnb.com/rooms/52730835?c=.pi80.pkYm9va2luZy92MV9taWdyYXRpb24vcmVzZXJ2YXRpb25fYWNjZXB0YW5jZV9jb25maXJtYXRpb25fZ3Vlc3Q%3D&euid=37014ccd-afcc-4ead-f0ec-15ab70e58978&source_impression_id=p3_1674170921_Z3MO3YSKyhWDwzWy"
          method="get"
          target="_blank"
        >
          <button className="airbnb-btn p2 rounded-md bg-[#FF5A5F] px-3 py-2 font-[Arial] text-white transition-all duration-100 ease-in hover:bg-[#ff8084] hover:shadow-lg hover:shadow-pink-200 active:translate-y-0.5">
            Airbnb Link
          </button>
        </form>
      </div>
    </section>
  );
}

export default Stay;
