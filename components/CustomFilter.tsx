"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };
  return (
    <div className="w-fit relative z-10">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <Listbox.Button className="custom-filter__btn">
          <span className="block truncate">{selected.title}</span>
          <Image
            src="/chevron-up-down.svg"
            height={20}
            width={20}
            alt="options"
          />
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className={`custom-filter__options`}>
            {options.map((option) => (
              <Listbox.Option
                key={option.title}
                value={option}
                className={({ active }) =>
                  ` relative cursor-default select-none px-4 py-2 ${
                    active ? " bg-primary-blue text-white" : "text-grey-900"
                  }`
                }
              >
                {({ selected }) => <span>{option.title}</span>}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
