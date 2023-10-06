"use client";

import Image from "next/image";
import Link from "next/link";
import { results } from "./resultsArray";
import memo from "/public/memo.webp";

export default function GachaResults() {
  let resultStorage = sessionStorage.getItem("results");
  const resultsItem = results[resultStorage];

  return (
    <div className="items-center justify-center xs:flex xs:pt-10">
      <Link href="/">
        <button className="absolute left-5 top-6 z-50 h-8 w-8 bg-LightYellow hover:bg-LightOrange sm:left-20">
          <div
            className="absolute h-0.5
             w-8 rotate-45 bg-black"
          ></div>
          <div
            className="h-0.5
             w-8 -rotate-45 bg-black"
          ></div>
        </button>
      </Link>
      <div className="absolute z-40 h-full w-full"></div>

      <div className="xs:flex">
        <div>
          <h2 className="pt-4 text-center  text-3xl font-bold text-amber-700">
            {resultsItem.name}
          </h2>
          <Image
            className="absolute top-3 w-full xs:static xs:w-64 "
            src={resultsItem.img}
            priority
            alt="resultsItem.name"
          />
        </div>
        <div className="w-60 xs:relative">
          <Image
            className="absolute  bottom-0"
            src={memo}
            priority
            alt="memo"
          />
          <div
            className="absolute
                       bottom-20 px-9 xxs:bottom-28 xs:top-20 xs:w-60"
          >
            <p className="text-3xl text-amber-600 xxs:text-4xl xs:text-2xl">
              {resultsItem.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
