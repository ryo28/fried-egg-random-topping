"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import egg from "/public/egg.png";

gsap.registerPlugin(MotionPathPlugin); // MotionPathPluginを登録

export function EggItem({ state }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const animatedImageRef = useRef(null);
  const router = useRouter();
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
      // ガチャ結果ページを作成する
      router.push("/gacha/gachaResults");
    }
  }, [animationComplete, router]);

  return <Image ref={animatedImageRef} src={egg} alt="Animated Image" />;
}
