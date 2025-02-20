import Title from "./Title";
import Image from "next/image";
import Fade from "../animation/Fade";
import SecondaryButton from "../ui/button/SecondaryButton";
import Link from "next/link"; 

export const juiceCategory = [
  {
    id: 1, 
    image: "/media/images/fruit1.png",
    juice_name: "Orange Drink",
    description: "Refreshing orange drink with a tangy flavor. Packed with vitamin C, this drink is perfect for boosting your immune system. It's an ideal choice for a quick energy boost any time of the day.",
    price: "$3.99"
  },
  {
    id: 2,
    image: "/media/images/fruit2.png",
    juice_name: "Litchi Drink",
    description: "Delicious litchi drink with a sweet taste. This exotic drink offers a unique flavor that is both refreshing and hydrating. Great for a summer day or as a delightful treat.",
    price: "$4.49"
  },
  {
    id: 3,
    image: "/media/images/fruit3.png",
    juice_name: "Kiwi Drink",
    description: "Tangy kiwi drink full of vitamin C. Known for its vibrant green color and tart taste, it's a refreshing option that also helps improve digestion and skin health.",
    price: "$4.99"
  },
  {
    id: 4,
    image: "/media/images/fruit4.png",
    juice_name: "Mango Drink",
    description: "Rich and creamy mango drink. This tropical favorite is not only delicious but also rich in vitamins A and C. It's a perfect way to enjoy the taste of summer all year round.",
    price: "$3.99"
  },
  {
    id: 5,
    image: "/media/images/fruit5.png",
    juice_name: "Strawberry Drink",
    description: "Sweet strawberry drink with a fresh flavor. Packed with antioxidants and vitamin C, it’s a healthy and tasty choice. Enjoy the essence of fresh strawberries in every sip.",
    price: "$4.49"
  },
  {
    id: 6,
    image: "/media/images/fruit6.png",
    juice_name: "Blueberry Drink",
    description: "Smooth blueberry drink full of antioxidants. This drink is not only delicious but also supports brain health and reduces inflammation. Perfect for a nutritious and tasty beverage.",
    price: "$4.99"
  }
];

const JuiceCategory = () => {
  return (
    <div className="bg-[#feffe3]">
      <div className="max-w-[1250px] mx-auto py-16 md:py-20 lg:py-28">
        <Title title="Juice Collection" />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 xl:gap-x-8 gap-y-28 lg:px-4 xl:px-0">
          {juiceCategory.map((juiceItem) => (
            <Fade direction="up" delay={0.2} key={juiceItem.id}>
              <div className="bg-[#f7e490e8] rounded-lg flex flex-row mx-auto items-center w-[340px] lg:w-auto h-[220px] transform transition duration-300 ease-in-out hover:scale-110 shadow-md">
                <Image
                  src={juiceItem.image}
                  alt={juiceItem.juice_name}
                  width={200}
                  height={200}
                  className="h-[260px] w-[165px] md:w-[150px] lg:w-[170px] mb-24 drop-shadow-xl"
                />
                <div className="mx-auto">
                  <h4 className="text-xl text-center text-red-500 pb-2 md:pb-4">
                    {juiceItem.juice_name}
                  </h4>
                  <Link href={`/product_details/${juiceItem.id}`}>
                    <SecondaryButton name="View" />
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JuiceCategory;
