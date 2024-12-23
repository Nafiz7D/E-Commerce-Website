import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            ata-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative">
              <img
                className="h-[180px] w-[260px] object-cover rounded-md"
                src={data.img}
                alt=""
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                ></Button>
              </div>
            </div>
            <div className="leading-7">
              <h1 className="font-semibold">{data.title}</h1>
              <h1 className="font-bold">${data.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
