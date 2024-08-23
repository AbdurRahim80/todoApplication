import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import AddToCartButton from "./AddToCartButton";
import { ProductType } from "../../type";
import Link from "next/link";

interface Props {
  product: ProductType;
}

const ProductSideBar = ({ id }: { id: number }) => {
  return (
    <div className="absolute bottom-12 right-2 border border-borderColor flex flex-col text-2xl rounded-md transform translate-x-20 group-hover:translate-x-0 duration-300 bg-themeWhite">
      <div className="tooltip tooltip-left" data-tip="shopping">
        <button className=" p-2 rounded-t-md hover:bg-skyColor hover:text-white duration-300">
          <FiShoppingCart />
        </button>
      </div>

      <Link
        href={`/product/${id}`}
        // href={{
        //   pathname: `/product/${id}`,
        //   query: {
        //     id: id,
        //   },
        // }}
        className="p-2 hover:bg-skyColor hover:text-white duration-300 border-y border-y-borderColor"
      ><div className="tooltip tooltip-left" data-tip="Quick View">
          <FiEye />
        </div>
      </Link>

      <div className="tooltip tooltip-left" data-tip="Add To WishLish">
        <button className="p-2 hover:bg-skyColor hover:text-white duration-300">
          <MdFavoriteBorder />
        </button>
      </div>
    </div>
  );
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border border-borderColor hover:shadow-lg hover:shadow-black/30 duration-300 rounded-md group">
      <div className="overflow-hidden relative">
        <Image
          src={product?.images[0]}
          alt="product-image"
          width={500}
          height={500}
          className="w-full h-64 object-contain group-hover:scale-110 duration-300"
        />
        {product?.rating && (
          <p className="absolute top-2 right-2 bg-lightOrange text-white text-xs font-medium flex products-center py-1 px-2 rounded-lg gap-1">
            {product?.rating} <FaStar />
          </p>
        )}
        <ProductSideBar id={product?.id} />
      </div>
      <div className=" flex flex-col p-4 border-t border-t-borderColor gap-1">
        <div className="h-[110px]">
          <p className="text-sm font-medium capitalize text-lightText">
            {product?.category}
          </p>
          <h3 className="font-semibold line-clamp-2">{product?.title}</h3>
          <p className="font-semibold">${product?.price}</p>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;
