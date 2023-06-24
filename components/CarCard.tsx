"use client";

import { useState } from "react";
import { carProps } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: carProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, model, make, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="mt-6 font-extrabold flex text-[32px]">
        <span className=" self-start font-semibold text-[14px]">$</span>
        {carRent}
        <span className=" self-end font-semibold text-[14px]">/day</span>
      </p>
      <div className=" w-full h-40 my-3 relative">
        <Image
          src={generateCarImageUrl(car)}
          alt="car img"
          fill
          priority
          className=" object-contain"
        />
      </div>
      <div className="flex w-full  mt-2 relative">
        <div className=" flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              height={20}
              width={20}
              alt="wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              height={20}
              width={20}
              alt="tire"
            />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              height={20}
              width={20}
              alt="gas"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
