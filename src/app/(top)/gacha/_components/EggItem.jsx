"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { gachaResultsSource } from "../gachaResults/gachaResultsSource";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import egg from "/public/egg.webp";

gsap.registerPlugin(MotionPathPlugin); // MotionPathPluginを登録

export function EggItem({ state }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const animatedImageRef = useRef(null);
  const router = useRouter();
  // 配列に要素を追加する度に乱数を記述し直すのは手間なので、配列の数を取得して利用することにしました
  const count = gachaResultsSource.length;
  useEffect(() => {
    const animatedImage = animatedImageRef.current;
    if (state === true) {
      gsap.to(animatedImage, {
        duration: 1.25, // アニメーションの秒数
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: -200, y: 100 },
            { x: -300, y: 0 },
            { x: -400, y: -50 },
            { x: -500, y: 0 },
          ], // 曲線の座標点
          align: "self", // 要素の向きを自動調整
        },
        rotation: -960,
        repeat: 0, // 無限に繰り返さない
        ease: "linear", // アニメーションのタイミングを調整
        onComplete: () => {
          // アニメーションが完了したときに実行されるコールバック
          // 要素を非表示にする
          animatedImage.style.display = "none";
          setAnimationComplete(true);
        },
      });
    }
  }, [state]);

  useEffect(() => {
    if (animationComplete) {
      // ガチャ結果ページをランダムに作成する
      router.push("/gacha/gachaResults");
      let number = Math.floor(Math.random() * count);
      sessionStorage.setItem("results", number);
    }
  }, [animationComplete, router]);

  return <Image ref={animatedImageRef} src={egg} alt="Animated Image" />;
}
