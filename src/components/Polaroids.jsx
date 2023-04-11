import bridge from "../images/polaroidBridge.webp";
import toast from "../images/polaroidToast.webp";
import buildings from "../images/polaroidBuildings.webp";
import "../index.css";

function Polaroids() {
  return (
    <div className="flex flex-row content-center items-center overflow-visible pt-[25px]">
      <figure className="polaroid bg-[#F5f5f5] text-center">
        <img className="block max-h-[150px]" src={buildings} alt="buildings" />
      </figure>
      <figure className="polaroid text-align-center z-[2] bg-[#F5f5f5] text-center">
        <img className="block max-h-[150px]" src={toast} alt="buildings" />
      </figure>
      <figure className="polaroid z-[1] bg-[#F5f5f5] text-center">
        <img className="block max-h-[150px]" src={bridge} alt="buildings" />
      </figure>
    </div>
  );
}

export default Polaroids;
