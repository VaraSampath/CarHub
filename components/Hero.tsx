"use client";
import Image from "next/image";
import { CustomButton } from "./";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className=" pt-32 flex-1 padding-x">
        <h1 className="hero__title">
          Find, Book, or rent a car - Quickly and Easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with ou effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero img"
            fill
            className=" object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
