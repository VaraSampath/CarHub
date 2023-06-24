"use client";
import { carProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils";
interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          onClose={closeModal}
          className="relative z-10"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black bg-opacity-25 fixed inset-0" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh]
                 overflow-y-auto transform bg-white rounded-2xl p-6
                 text-left shadow-xl transition-all flex flex-col gap-5"
                >
                  <button
                    className=" absolute top-2 right-2 bg-primary-blue-100 z-10 w-fit p-2 rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close button"
                      height={20}
                      width={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex-col gap-3 flex">
                    <div className="h-40 w-full relative bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        fill
                        alt="car"
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className=" flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="car"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" flex-1 flex flex-col gap-2">
                    <h2 className=" text-xl capitalize font-semibold">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex  flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className=" text-black font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
