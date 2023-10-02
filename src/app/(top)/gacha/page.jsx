"use client";

import { useState } from "react";
import Image from "next/image";
import { EggButton } from "./components/EggButton";
import { EggItem } from "./components/EggItem";
import background from "/public/background.png";
import chicken from "/public/chicken.png";

export default function Gacha() {
  const [eggSwitch, setEggSwitch] = useState(false);

  return (
    <div className="flex h-[100dvh] flex-col items-center overflow-hidden bg-LightOrange">
      <div className="relative">
        <Image
          className="h-96 select-none xs:h-52 xs:w-96"
          src={background}
          priority
          alt="background"
        />
        <div
          className={`absolute right-32 top-1/2 w-16 select-none xs:right-44 xs:w-10`}
        >
          <EggItem state={eggSwitch} />
        </div>
        <Image
          className="absolute bottom-4 left-11 z-40 h-96 w-96 select-none xs:h-52 xs:w-80"
          src={chicken}
          priority
          alt="chicken"
        />
      </div>
      <EggButton state={setEggSwitch} />
    </div>
  );
}
