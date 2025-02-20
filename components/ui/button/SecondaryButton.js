import { FaArrowRightLong } from "react-icons/fa6";

const SecondaryButton = ({name, handleClick, btnDisabled}) => {
 
  return (
    <button
      onClick={handleClick}
      disabled={btnDisabled}
      className="flex  items-center rounded-full text-lg  gap-2  py-2 px-6 bg-white text-[#5fa840eb] shadow-lg hover:text-[#72db46] "
    >
      {name}
      <FaArrowRightLong className="bg-transparent" />
    </button>
  );
};

export default SecondaryButton;
