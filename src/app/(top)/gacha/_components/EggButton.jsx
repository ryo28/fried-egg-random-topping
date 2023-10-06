"use client";

import Image from "next/image";
import { useState } from "react";
import { IconTriangleInverted } from "@tabler/icons-react";
import eggButtonYolk from "/public/eggButton01.webp";
import eggButtonWhite from "/public/eggButton02.webp";

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
      <div className="absolute bottom-56 flex animate-bounce select-none flex-col items-center text-red-500 xs:bottom-32">
        目玉焼きをタップ
        <IconTriangleInverted stroke={1} />
      </div>
      {/* buttonを大きくして下に画像を配置し、スマホの長押しでの画像取得を無効化している */}
      <button
        className="absolute bottom-28 z-10 h-40 w-44 outline-none xs:bottom-12"
        onClick={eggButton}
      ></button>
      <Image
        className={`absolute bottom-28 h-40 w-40 duration-300 xs:bottom-6 ${
          eggButtonToggle ? "translate-y-2" : "translate-y-0"
        }`}
        src={eggButtonYolk}
        alt="Yolk"
      />
      <Image
        className="absolute bottom-28 h-40 w-40 xs:bottom-6"
        src={eggButtonWhite}
        alt="White"
      />
    </>
  );
}
