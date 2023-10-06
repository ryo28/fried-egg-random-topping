"use client";

import { useState } from "react";
import Image from "next/image";
import { EggButton } from "./_components/EggButton";
import { EggItem } from "./_components/EggItem";
import background from "/public/background.webp";
import chicken from "/public/chicken.webp";

export default function Gacha() {
  const [eggSwitch, setEggSwitch] = useState(false);

  return (
    <div className="flex h-[100dvh] flex-col items-center overflow-hidden bg-LightOrange">
      <div className="relative">
        <div className="absolute z-50 h-[30rem] w-full select-none xs:h-52"></div>
        <Image
          className="h-96 xs:h-52 xs:w-96"
          src={background}
          priority
          alt="background"
        />
        <div className={`absolute right-32 top-1/2 w-16 xs:right-44 xs:w-10`}>
          <EggItem state={eggSwitch} />
        </div>
        <Image
          className="absolute bottom-4 left-11 z-10 h-96 w-96 xs:h-52 xs:w-80"
          src={chicken}
          priority
          alt="chicken"
        />
      </div>
      <EggButton state={setEggSwitch} />
    </div>
  );
}
