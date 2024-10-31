// Carousel.jsx

import { useState } from 'react';

import arrowIcon from '../WorkSpaceLike/Carousel/arrowIcon.svg'
import lunbo1 from '../WorkSpaceLike/Carousel/lunbo1.png'
import lunbo2 from '../WorkSpaceLike/Carousel/lunbo2.png'
import lunbo3 from '../WorkSpaceLike/Carousel/lunbo3.png'


// 轮播页面高度不要超过320px，
const slidesData = [
    <div className="slide-content" key={0}>
        <div>
            <div className=' h-32 flex items-center justify-center '>
                <div><img src={lunbo1} alt="lunbo1" className='w-[150px] ' /></div>
            </div>
            <div className=' h-[224px]  mx-16 '>
                <p className='font-medium text-[28px] text-center'>わが社では初めから Google Workspace を使用しています。全従業員が連携して共有ドキュメントや共有スプレッドシートで作業し、財務情報を把握できています。業務を円滑に進められることはとても重要です。</p>
                <p className=' font-normal text-[18px] text-center text-gray-500'>xxxx xxxxxxx氏、xxxxxxx、共同創設者兼 CEO</p>
            </div>
        </div>
    </div>,


    <div className="slide-content" key={1}>
        <div>
            <div className=' h-32 flex items-center justify-center '>
                <div><img src={lunbo2} alt="lunbo1" className='w-[150px] ' /></div>
            </div>
            <div className=' h-[224px]  mx-16 '>
                <p className='font-medium text-[28px] text-center'>BHI は、Google Workspace と AppSheet を導入することで、分散化された環境でのリアルタイムの意思決定、コラボレーション、透明性を実現するリアルタイム データを備えたデジタル企業に生まれ変わりました。</p>
                <p className=' font-normal text-[18px] text-center text-gray-500'>xxxx xxxxxxx氏、xxxxxxx、共同創設者兼 CEO</p>
            </div>
        </div>
    </div>,
    <div className="slide-content" key={2}>
        <div>
            <div className='h-32 flex items-center justify-center '>
                <div><img src={lunbo3} alt="lunbo1" className='w-[150px] ' /></div>
            </div>
            <div className=' h-[224px]  mx-16 '>
                <p className='font-medium text-[28px] text-center'>我々は地理的な制約のない、効果的な ツールを提供するシステムを必要としていました。また、そのシステムは社内の既存システムとは異なり、経済的、直感的、安全、かつ将来を見据えたシステムでなければなりませんでした。</p>
                <p className=' font-normal text-[18px] text-center text-gray-500'>xxxx xxxxxxx氏、xxxxxxx、共同創設者兼 CEO</p>
            </div>
        </div>
    </div>,

];


const Carousel = () => {
    // 定义幻灯片数据


    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slidesData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="carousel-container relative w-11/12 h-11/12 max-w-[1390px] h-80 mx-auto">
                {/* 左箭头 */}
                <button
                    className="z-10 w-16 h-16 rounded-full hover:bg-gray-200 duration-300 absolute left-0 top-1/2 transform -translate-y-1/2  flex items-center justify-center "
                    onClick={goToPrevious}
                >
                    <img src={arrowIcon} alt="arrowIcon" className=' transform -rotate-[135deg]' />
                </button>

                {/* 中间的幻灯片 */}
                {/*第一版 <div className="carousel-content w-full h-full flex items-center justify-center" >
                {slidesData[currentIndex]}
            </div> */}
                <div className=" w-full h-full overflow-hidden relative">
                    <div
                        className="slides flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {slidesData.map((slide, index) => (
                            <div key={index} className="slide w-full flex-shrink-0">
                                {slide}
                            </div>
                        ))}
                    </div>
                </div>




                {/* 右箭头 */}
                <button
                    className="w-16 h-16 rounded-full hover:bg-gray-200 duration-300 absolute right-0 top-1/2 transform -translate-y-1/2 p-2 flex items-center justify-center"
                    onClick={goToNext}
                >
                    <img src={arrowIcon} alt="arrowIcon" className=' transform rotate-45' />
                </button>

                {/* 底部导航点 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slidesData.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 -mb-2 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;
