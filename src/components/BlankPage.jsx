import { useEffect, useState, useRef } from "react";

import lunbo2 from './GoodPatchLike/GoodPatchMedia/img/lunbo2.webp';
import lunbo3 from './GoodPatchLike/GoodPatchMedia/img/lunbo3.webp';

export default function BlankPage() {
  const [isShowCycle, setIsShowCycle] = useState(false);
  const [circleSize, setCircleSize] = useState(0); // 初始圆的半径为 0
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null); // 创建一个 ref 来获取 lunbo3 的引用

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imgRef.current) {
        const { left, top } = imgRef.current.getBoundingClientRect(); // 获取 lunbo3 的位置信息
        setTimeout(() => {
          setDelayedPosition({ x: e.clientX - left, y: e.clientY - top }); // 计算相对于 lunbo3 的坐标
        }, 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animateBubble = () => {
      if (isShowCycle) {
        setCircleSize(prevSize => {
          const nextSize = prevSize + (128 - prevSize) * 0.1; // 逐渐接近128
          return nextSize < 128 ? nextSize : 128; // 最大值为128
        });
      } else {
        setCircleSize(prevSize => {
          const nextSize = prevSize * 0.8; // 每次减少20%
          return nextSize > 0 ? nextSize : 0; // 最小值为0
        });
      }
      animationFrameId = requestAnimationFrame(animateBubble);
    };

    animateBubble();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isShowCycle]);

  return (
    <>
      <div className="bg-blue-300 w-full h-dvh pt-14">
        <div className="w-full h-[50dvh]"></div>
        <div className="relative bg-pink-200"
          onMouseEnter={() => setIsShowCycle(true)}
          onMouseLeave={() => setIsShowCycle(false)} >
          <img src={lunbo2} alt="lunbo2" />
          <img
            ref={imgRef} // 绑定 ref
            src={lunbo3}
            alt="lunbo3"
            className="absolute top-0 left-0"
            style={{
              transition: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
              clipPath: `circle(${circleSize}px at ${delayedPosition.x}px ${delayedPosition.y}px)`,
            }}
          />
        </div>
      </div>
      <div className="w-full h-dvh"></div>
    </>
  );
}

function drawFilledHeart() {
  const heart = [
    "      *****     *****      ",
    "   *********** **********  ",
    " *****    *****     *****  ",
    " *****             *****   ",
    "   *****         *****     ",
    "     *****     *****       ",
    "       ***** *****         ",
    "         ******            ",
    "           **              ",
  ];
  heart.forEach(line => {
    console.log(`%c${line}`, 'color:blue; font-size: 16px;');
  });
}
drawFilledHeart();
