import Image from "next/image";

const ImageCircle = () => {
  return (
    <div className="flex justify-center flex-col ">
      <div className="grid grid-cols-2 ">
        <div className=" z-20 flex flex-col">
          <Image
            src="/media/images/fruit4.png"
            alt="image"
            width={200}
            height={200}
            className="object-cover lg:h-36 lg:w-36 overflow-hidden rounded-full bg-white"
          />

          <div className=" flex justify-end pl-8">
            <Image
              src="/media/images/fruit2.png"
              alt="image"
              width={100}
              height={100}
              className="object-cover lg:h-36 lg:w-36  overflow-hidden rounded-full bg-white"
            />
          </div>

          <div className="flex justify-center mr-16 p-2">
            <Image
              src="/media/images/fruit3.png"
              alt="image"
              width={100}
              height={100}
              className="object-cover h-10 w-10  overflow-hidden rounded-full bg-white"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <Image
              src="/media/images/fruit4.png"
              alt="image"
              width={200}
              height={200}
              className="object-cover h-10 w-10 overflow-hidden rounded-full bg-white"
            />
            <Image
              src="/media/images/fruit5.png"
              alt="image"
              width={200}
              height={200}
              className="object-cover lg:w-36 overflow-hidden rounded-full bg-white"
            />
            <Image
              src="/media/images/fruit1.png"
              alt="image"
              width={200}
              height={200}
              className="object-cover h-10 w-10 mt-16 overflow-hidden rounded-full bg-white"
            />
          </div>
        </div>
        <div className="z-10  ">
          <div className="flex justify-center items-center ">
            <Image
              src="/media/images/fruit2.png"
              alt="image"
              width={100}
              height={100}
              className="object-cover h-10 w-10 mb-3 mr-12 overflow-hidden rounded-full bg-white"
            />
          </div>
          <div className=" flex space-y-16 flex-col items-end">
            <Image
              src="/media/images/fruit1.png"
              alt="image"
              width={200}
              height={200}
              className="object-cover z-20 lg:h-40 lg:w-40 rounded-full bg-white"
            />

            <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-700 to-transparent rounded-full h-80 w-52 z-10 blur-3xl  absolute justify-center  transform -translate-x-1/4  -translate-1/2"></div>
            <Image
              src="/media/images/fruit3.png"
              alt="image"
              width={200}
              height={200}
              className="object-cover z-10  lg:h-40 lg:w-40  rounded-full bg-white"
            />
          </div>
          <Image
              src="/media/images/fruit6.png"
              alt="image"
              width={200}
              height={200}
              className="ms-auto h-10 w-10 overflow-hidden rounded-full bg-white"
            />
        </div>
      </div>
    </div>
  );
};

export default ImageCircle;
