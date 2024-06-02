import { FaArrowRightLong } from "react-icons/fa6";

const PrimaryButton = ({ name, handleClick, btnDisabled }) => {
  return (
    <button
      onClick={handleClick}
      disabled={btnDisabled}
      className="text-white flex  items-center px-6  rounded-full text-sm  gap-2 p-4 bg-gradient-to-br from-red-700 to-green-40  hover:bg-gradient-to-l transition-all delay-250 duration-300 ease-in-out shadow-xl"
    >
      {name}
      <FaArrowRightLong className="bg-transparent" />
    </button>
  );
};

export default PrimaryButton;
