// XiaomiCarousel.jsx
import { useEffect, useState } from 'react'

//icon
import arrowIcon from './XiaomiCarouselImg/arrowIcon.svg'
import pause from './XiaomiCarouselImg/pause.svg'
import play from './XiaomiCarouselImg/play.svg'

//图片素材
import lunbo1 from './XiaomiCarouselImg/lunbo1.webp'
import lunbo1A from './XiaomiCarouselImg/lunbo1A.webp'
import lunbo2 from './XiaomiCarouselImg/lunbo2.webp'
import lunbo2A from './XiaomiCarouselImg/lunbo2A.webp'
import lunbo3 from './XiaomiCarouselImg/lunbo3.webp'
import lunbo3A from './XiaomiCarouselImg/lunbo3A.webp'
import lunbo4 from './XiaomiCarouselImg/lunbo4.webp'
import lunbo4A from './XiaomiCarouselImg/lunbo4A.webp'

//数据格式,填入div元素即可
const slidesData = [
    <div className='h-full'>
        <img src={lunbo1} alt="lunbo1" className=' hidden md:block object-cover h-full' />
        <img src={lunbo1A} alt="lunbo1A" className='block md:hidden object-cover  h-[480px]' />
    </div>,
    <div className='h-full'>
        <img src={lunbo2} alt="lunbo2" className=' hidden md:block  object-cover h-full' />
        <img src={lunbo2A} alt="lunbo2A" className='block md:hidden object-cover  h-[480px]' />
    </div>,
    <div className='h-full'>
        <img src={lunbo3} alt="lunbo3" className=' hidden md:block object-cover h-full' />
        <img src={lunbo3A} alt="lunbo3A" className='block md:hidden object-cover  h-[480px]' />
    </div>,
    <div className='h-full'>
        <img src={lunbo4} alt="lunbo2" className=' hidden md:block  object-cover h-full' />
        <img src={lunbo4A} alt="lunbo2A" className='block md:hidden object-cover  h-[480px]' />
    </div>,
]

// 创建新数组
const newSlidesData = [
    slidesData[slidesData.length - 1], ...slidesData, slidesData[0]
]



//组件函数
export default function XiaomiCarousel() {
    //无缝轮播
    const [currentIndex, setCurrentIndex] = useState(1)
    //是否执行动画
    const [shouldAnimate, setShouldAnimate] = useState(true);
    //切换时间
    const cycleTime = 5000
    //检测是否停止轮播
    const [isPaused, setIsPaused] = useState(false)
    //是否停止检测
    const [isPauseClick, setisPauseClick] = useState(false)

    //去上一张图片
    const goToPrevious = () => {
        const isFirstSlide = currentIndex == 1
        if (isFirstSlide) {
            setShouldAnimate(false)
            setCurrentIndex(newSlidesData.length - 1)
            setTimeout(() => {
                setShouldAnimate(true);
                setCurrentIndex(newSlidesData.length - 2)
            })
        } else {
            setShouldAnimate(true)
            setCurrentIndex(prevIndex => prevIndex - 1)

        }
    }
    //去下一张图片
    const goToNext = () => {
        if (currentIndex >= newSlidesData.length - 2) {
            setShouldAnimate(false)
            setCurrentIndex(0)
            setTimeout(() => {
                setShouldAnimate(true)
                setCurrentIndex(1)
            }, 0)
        } else {
            setShouldAnimate(true)
            setCurrentIndex(prevIndex => prevIndex + 1)
        }
    };
    //点击的去指定图片
    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    //点击停止并停止检测
    const handleTogglePause = () => {
        setIsPaused(!isPaused)
        setisPauseClick(!isPauseClick)
    }

    //自动轮播
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prevIndex) => {
                    // 计算下一个索引
                    const nextIndex = prevIndex + 1;

                    // 如果下一个索引超过 length - 2，重置为 1
                    return nextIndex > (newSlidesData.length - 2) ? 1 : nextIndex;
                });
            }
        }, cycleTime)
        return () => clearInterval(interval); // 清除计时器
    }, [isPaused])

    return (
        <>
            {/* 高度动态变化 鼠标判断 */}
            <div className="w-full h-[480px] md:h-[320px] lg:h-[450px] 2xl:h-[600px] bg-blue-200 group relative">
                {/* 轮播本体 */}
                <div className='h-full w-full' >
                    {/* 左箭头 */}
                    <button className=" w-8 h-8 rounded-xl p-2 ml-8
                         absolute left-0 top-1/2 transform -translate-y-1/2 z-10
                          flex items-center justify-center 
                          duration-500  opacity-50  hover:opacity-100 group-hover:bg-gray-200 group-hover:scale-125 "
                        onClick={goToPrevious}>
                        <img src={arrowIcon} alt="arrowIcon" className=' opacity-0 duration-300 group-hover:opacity-100 transition -rotate-[135deg] ' />
                    </button>
                    {/*Slides  */}
                    <div className='h-full cursor-pointer ' >
                        <div className='w-full h-full overflow-hidden relative '>
                            <div className={`h-full flex ${shouldAnimate ? 'duration-500' : ''}`}
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                {newSlidesData.map((slide, index) => (
                                    <div key={index} className='h-full w-full flex-shrink-0'>
                                        {!isPauseClick && <div className='absolute top-[10%] w-full h-4/5  '
                                            onMouseEnter={() => setIsPaused(true)}
                                            onMouseLeave={() => setIsPaused(false)}>
                                        </div>}
                                        {slide}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 右箭头 */}
                    <button className=" w-8 h-8 rounded-xl p-2 mr-8
                         absolute right-0 top-1/2 transform -translate-y-1/2 z-10
                          flex items-center justify-center 
                          duration-500  opacity-50  hover:opacity-100 group-hover:bg-gray-200 group-hover:scale-125 "
                        onClick={goToNext}>
                        <img src={arrowIcon} alt="arrowIcon" className=' opacity-0 duration-300 group-hover:opacity-100 transition rotate-[45deg] ' />
                    </button>
                    {/* 可点击跳转，带计时，导航条 */}
                    <div className='absolute bottom-[10px] left-1/2 transform -translate-x-1/2 flex space-x-4 '>
                        {newSlidesData.map((_, index) => {
                            if (index > 0 && index < newSlidesData.length - 1) {
                                return (
                                    <button
                                        key={index}
                                        className={`h-3 w-20   `}
                                        onClick={() => goToSlide(index)}>
                                        <div className='h-[2px] w-20 bg-gray-300 opacity-50 '>
                                            <div className={`h-[2px] w-0 ${(!isPaused && currentIndex == index) && `w-full transition-all duration-[${cycleTime - 500}ms] ease-linear`} bg-orange-500`}></div>
                                        </div>
                                    </button>
                                )
                            }
                            return null
                        })}
                        <div className='w-3 h-3 my-auto cursor-pointer opacity-50' onClick={handleTogglePause}>
                            {isPaused ? (<img src={play} alt="play" />) : (<img src={pause} alt="pause" />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
