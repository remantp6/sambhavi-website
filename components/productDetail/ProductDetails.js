"use client";
import Fade from "@/components/animation/Fade";
import { juiceCategory } from "@/components/landingpage/JuiceCategory";
import Title from "@/components/landingpage/Title";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";


const ProductDetails = () => {
    const currentPath = usePathname();
  const { productId } = useParams();

  const juiceItem = juiceCategory.find(
    (item) => item.id === parseInt(productId)
  );

  if (!juiceItem) {
    return <div>Product not found</div>;
  }
  return (
    <div className="max-w-[1250px] mx-auto py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <Fade direction="down" delay={0.6}>
        <div className="flex items-center space-x-2 border-2 border-gray-200 px-3 py-2 rounded-lg w-fit mx-auto mt-3 mb-4 md:mb-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-blue-400"
          >
            Home
          </Link>
          <p
            className={
              currentPath === `/product_details/${productId}`
                ? "text-sm font-medium text-blue-600"
                : ""
            }
          >
            | Product Details
          </p>
        </div>
      </Fade>
      <Title title="Product Details" />
      <p className="text-center text-lg font-medium text-gray-500 pb-4 md:pb-8"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-8 gap-12">
        <Image
          src={juiceItem.image}
          alt={juiceItem.juice_name}
          width={600}
          height={600}
          className="rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-3 text-green-500">
            {juiceItem.juice_name}
          </h1>
          <p>
            <span className="text-xl font-semibold">Product Type:</span>
            <span className="text-lg ps-2">Juice</span>
          </p>
          <p className="pb-4">
            <span className="text-xl font-semibold">Product Price:</span>
            <span className="text-lg ps-2">{juiceItem.price}</span>
          </p>
          <p className="text-lg border-t-[1px] pt-2">{juiceItem.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
