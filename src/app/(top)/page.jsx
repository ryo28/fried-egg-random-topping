import Image from "next/image";
import Link from "next/link";
import topSmall from "../../../public/topImageSmall.png";
import topBig from "../../../public/topImageBig.png";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-LightYellow">
        <div className="flex justify-center">
          <Image
            className="absolute h-96 w-screen xs:hidden"
            src={topBig}
            alt="目玉焼き"
          />
          <Image
            className="absolute top-20  hidden  xs:top-2 xs:block  xs:w-96"
            src={topSmall}
            alt="目玉焼き"
          />
        </div>
        <div className="flex justify-center">
          <div className="absolute bottom-1/4 xs:bottom-12">
            <Link
              className="bg-orange-600 p-5 text-2xl hover:bg-orange-800 xs:p-2"
              href="/gacha"
            >
              トッピングガチャを引く
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
