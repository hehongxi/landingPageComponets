// GoodPatchLike.jsx
import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from "react";

//素材
import goodPatchLogo from './GoodPatchLike/GoodPatchMedia/img/goodPatchLogo.png'
import goodPtachVideoBackGround from './GoodPatchLike/GoodPatchMedia/video/goodPtachVideoBackGround.mp4'
import goodPatchChatIcon from './GoodPatchLike/GoodPatchMedia/img/goodPatchChatIcon.png'
import goodPatchHeart from './GoodPatchLike/GoodPatchMedia/img/goodPatchHeart.SVG'
import wealthnavi from './GoodPatchLike/GoodPatchMedia/img/wealthnavi.jpg'
import suntoryplus2 from './GoodPatchLike/GoodPatchMedia/img/suntoryplus2.png'



//测试素材
import lunbo2 from './GoodPatchLike/GoodPatchMedia/img/lunbo2.webp'
import lunbo3 from './GoodPatchLike/GoodPatchMedia/img/lunbo3.webp'

export default function GoodPatchLike() {

    //header滚动隐藏
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY
            if (currentScrollPosition > scrollPosition) {
                setIsHidden(true) // 向下滚动时隐藏
            } else {
                setIsHidden(false) // 向上滚动时显示
            }
            setScrollPosition(currentScrollPosition)
        };

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [scrollPosition]);


    //悬浮标语
    const [isSloganVisiable, setIsSloganVisiable] = useState(false)
    const [isWhyVisiable, setIsWhyVisiable] = useState(false)
    const [isHowVisiable, setIsHowVisiable] = useState(false)
    const [isWhatVisiable, setIsWhatVisiable] = useState(false)

    //悬浮标语
    useEffect(() => {
        const handleSolgan = () => {
            const currentScrollY = window.scrollY


            if (300 < currentScrollY && currentScrollY <= 3000) {
                setIsSloganVisiable(true)
            } else {
                setIsSloganVisiable(false)
            }
            if (300 < currentScrollY && currentScrollY <= 1000) {
                setIsWhyVisiable(true)
            } else {
                setIsWhyVisiable(false)
            }
            if (1000 < currentScrollY && currentScrollY <= 1700) {
                setIsHowVisiable(true)
            } else {
                setIsHowVisiable(false)
            }
            if (1700 < currentScrollY && currentScrollY <= 3000) {
                setIsWhatVisiable(true)
            } else {
                setIsWhatVisiable(false)
            }
        }

        window.addEventListener('scroll', handleSolgan);
        return () => {
            window.removeEventListener('scroll', handleSolgan)
        }
    }, [])

    //跟随鼠标的透视效果
    const [isShowCycle, setIsShowCycle] = useState(false);
    const [circleSize, setCircleSize] = useState(0); // 透视半径为 0
    const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
    const imgRef = useRef(null); // 创建一个 ref 来获取 需要透视块的引用

    //计算透视块相对元素的坐标
    useEffect(() => {
        let lastMouseEvent = null;

        const handleMouseMove = (e) => {
            lastMouseEvent = e; // 更新最近一次鼠标事件
            if (imgRef.current) {
                const { left, top } = imgRef.current.getBoundingClientRect();
                setTimeout(() => { setDelayedPosition({ x: e.clientX - left, y: e.clientY - top }) }, 100)

            }
        };

        const handleScroll = () => {
            if (lastMouseEvent) {
                handleMouseMove(lastMouseEvent); // 在滚动时使用最近一次鼠标事件重新计算位置
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isShowCycle]);

    //透视块的动画效果
    useEffect(() => {
        let animationFrameId;

        const animateBubble = () => {
            if (isShowCycle) {
                setCircleSize(prevSize => {
                    const nextSize = prevSize + (128 - prevSize) * 0.1; // 逐渐接近128
                    return nextSize < 127.5 ? nextSize : 128; // 最大值为128
                });
            } else {
                setCircleSize(prevSize => {
                    const nextSize = prevSize * 0.8; // 每次减少20%
                    return nextSize > 1 ? nextSize : 0; // 最小值为0
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
            {/* 悬浮按钮 */}
            <Link to='/' className="fixed z-50 bottom-0 left-0 w-28 ">
                <img src={goodPatchChatIcon} alt="Chat" />
            </Link>

            {/* 悬浮标语 */}
            <div className={`fixed z-50 bottom-16 right-16  text-[3.5rem] leading-none font-extrabold  pointer-events-none `}>
                <div className="relative text-blue-500 overflow-hidden h-[4rem] ">
                    <p className={`absolute top-0 right-0 duration-300 ${isWhyVisiable ? 'translate-y-0 ' : 'translate-y-[150%] '}`}>
                        Why
                    </p>
                    <p className={`absolute top-0 right-0 duration-300 ${isHowVisiable ? 'translate-y-0 ' : 'translate-y-[150%] '}`}>
                        How
                    </p>
                    <p className={`absolute top-0 right-0 duration-300 ${isWhatVisiable ? 'translate-y-0 ' : 'translate-y-[150%] '}`}>
                        What
                    </p>
                </div>

                <div className='overflow-hidden pb-2'><p className={`duration-300 ${isSloganVisiable ? 'translate-y-0 ' : 'translate-y-[150%] '}`}>we design</p></div>

            </div>



            {/* header+backgroud+slogan */}
            < div className=' h-full w-full min-h-screen ' >
                <header className={`w-full h-16 px-6 flex items-center justify-between fixed top-14 z-50 duration-300  ${isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`} >
                    <Link to='/' className=' min-h-16 min-w-52 '>
                        <img src={goodPatchLogo} alt="goodPatchLogo" className='h-16 w-52 ' />
                    </Link>
                    <ul className='w-[68%] min-w-[850px] h-full  flex items-center justify-between text-base font-normal '>
                        <Link className='hover:text-gray-500'>Why design</Link>
                        <Link className='hover:text-gray-500'>Services</Link>
                        <Link className='hover:text-gray-500'>Work</Link>
                        <Link className='hover:text-gray-500'>Company</Link>
                        <Link className='hover:text-gray-500'>Sustainability</Link>
                        <Link className='hover:text-gray-500'>Sustainability</Link>
                        <Link className='hover:text-gray-500'>Careers</Link>
                        <Link className='hover:text-gray-500'>Download</Link>
                        <Link className='hover:text-gray-500'>Contact</Link>
                    </ul>
                </header>
                <video src={goodPtachVideoBackGround} className=' absolute top left h-dvh w-[101%] object-cover  ' autoPlay muted playsInline loop ></video>
                <p className="absolute bottom-24 left-[3%] text-[7.5rem] leading-none font-black ">
                    <span>Design</span>
                    <br />
                    <span>to empower </span>
                    <img src={goodPatchHeart} alt="goodPatchHeart" className='w-7 h-7' />
                </p>
            </div >


            {/* wrap */}
            < div className='h-full w-10/12 min-w-[800px] mx-auto bg-gray-100' >

                <div className='font-normal text-[28px] leading-8'>事例紹介</div>
                <div className='h-16'></div>
                {/* 重叠层 */}
                <div className='relative h-0 w-0 bg-pink-200' onMouseEnter={() => setIsShowCycle(true)}
                    onMouseLeave={() => setIsShowCycle(false)}>
                    <div className='w-[355px] h-[740px]   flex flex-col  '>
                        <img src={wealthnavi} alt="wealthnavi" className='w-[355px] rounded-2xl' />
                        <span className='mt-3 text-gray-400'>Business/Strategy DesignBrand Experience <br />Design</span>
                        <span className='mt-3 font-semibold text-5xl '>ウェルスナビ</span>
                        <span className=' mt-4'>顧客のリアルを把握して「長期・積立・分散」の投資を成功させる</span>
                    </div>
                    <div className='w-[355px] h-[740px]  flex flex-col absolute top-0 left-0  '
                        ref={imgRef}
                        style={{ clipPath: `circle(${circleSize}px at ${delayedPosition.x}px ${delayedPosition.y}px)`, }}
                    >
                        <img src={suntoryplus2} alt="suntoryplus2" className='w-[355px] rounded-2xl' />
                        <span className='mt-3 text-white'
                            style={{ WebkitTextStroke: '1px gray', }}>
                            Business/Strategy DesignBrand Experience <br />Design</span>
                        <span className='mt-3 font-semibold text-5xl  text-white' style={{ WebkitTextStroke: '1px gray', }}>ウェルスナビ</span>
                        <span className=' mt-4 text-white' style={{ WebkitTextStroke: '1px gray', }}>顧客のリアルを把握して「長期・積立・分散」の投資を成功させる</span>
                        <div className='w-[456px] h-[800px] bg-blue-400 opacity-50 absolute -top-[50px] -left-[50px]'></div>
                    </div>
                </div>

            </div >

            {/* h-dvh */}
            < div className=' h-dvh' ></div >
            <div className=' h-dvh '></div>
            <div className=' h-dvh bg-blue-200'></div>
            <div className=' h-dvh '></div>
            <div className=' h-dvh bg-blue-200'></div>
            <div className=' h-dvh'></div>
            <div className=' h-dvh bg-blue-200'></div>
            <div className=' h-dvh '></div>
            <div className=' h-dvh bg-blue-200'></div>
        </>
    )
}