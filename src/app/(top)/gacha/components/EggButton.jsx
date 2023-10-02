"use client";

import Image from "next/image";
import { useState } from "react";
import { IconTriangleInverted } from "@tabler/icons-react";
import eggButton02 from "/public/eggButton02.png";
import eggButton03 from "/public/eggButton03.png";

export function EggButton({ state }) {
  const [eggButtonToggle, setEggButtonToggle] = useState(false);
  const [eggToggle, setEggToggle] = useState(false);
  const eggButton = () => {
    // setEggToggle を呼び出してステートを更新
    setEggButtonToggle(!eggButtonToggle);

    // 1秒ごとにステートをトグルするためのタイマーを設定
    setTimeout(() => {
      setEggButtonToggle((prevEggButtonToggle) => !prevEggButtonToggle);

      setTimeout(() => {
        setEggToggle(!eggToggle);
        state(true);
      }, 1000);
    }, 1000);
  };

  return (
    <>
      <div className="absolute bottom-56 z-50 flex animate-bounce flex-col items-center text-red-500 xs:bottom-32 select-none">
        目玉焼きをタップ
        <IconTriangleInverted stroke={1} />
      </div>

      <button
        className="absolute bottom-36 z-10 h-24 w-40 xs:bottom-12 select-none outline-none"
        onClick={eggButton}
      ></button>
      <Image
        className={`absolute bottom-28 h-40 w-40 duration-300 xs:bottom-6 select-none ${
          eggButtonToggle ? "translate-y-2" : "translate-y-0"
        }`}
        src={eggButton02}
        alt=""
      />
      <Image
        className="absolute bottom-28 h-40 w-40 xs:bottom-6 select-none"
        src={eggButton03}
        alt=""
      />

      <div
        className={`absolute animate-turn duration-700 ease-in ${
          eggToggle ? "-translate-x-56 translate-y-16" : ""
        }`}
      ></div>
    </>
  );
}
