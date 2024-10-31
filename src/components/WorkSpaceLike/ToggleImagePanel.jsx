//ToggleImagePanel.jsx
//展示图片浏览功能组件


import { useState, useEffect } from 'react';



//sample
//按以下步骤添加图片和内容填充
//1，导入图片

import GmailDescription from '../../assets/png/GmailDescription.png';
import SaveToDoc from '../../assets/png/SaveToDoc.png';
import CalenderDescription from '../../assets/png/CalenderDescription.png';
import PrivacyPolicy from '../../assets/png/PrivacyPolicy.png';

// 2，数据编辑成组
//ps:组件限制了高度，内容描述过长的话需要手动调整组件的布局。
const items = [
  {
    title: "さまざまな場所とデバイスから作業可能に設計され、使い慣れたツール",
    description: "誰もが知っている使い慣れたツールを使用できるようにすることで、場所、職務、デバイスを問わず、全員が対等に貢献できるようになります。",
    picture: GmailDescription
  },
  {
    title: "Gemini for Workspace を追加して生成 AI の機能をフル活用",
    description: "Gemini for Workspace を追加することにより、高性能 AI アシスタントをコーチ、ソート パートナー、インスピレーションの源、生産性を高めるツールとして活用できます。",
    picture: SaveToDoc
  },
  {
    title: "簡単に管理できるツールとシンプルな費用",
    description: "Google Workspace には、Gmail やカレンダー以外にも使い慣れたツールが含まれています。自動更新される、管理が簡単な 1 つのサブスクリプションで、ビジネス向けバージョンの Google Meet、Chat、ドライブ、ドキュメント、スプレッドシートなどをご利用いただけます。",
    picture: CalenderDescription
  },
  {
    title: "エンタープライズ レベルのセキュリティでビジネスを保護",
    description: "Google Workspace には、情報、ID、アプリケーション、デバイスを安全に保護するために必要なセキュリティ、信頼性、クラウド インフラストラクチャが備わっています。",
    picture: PrivacyPolicy
  }
];




//渲染组件
export default function ToggleImagePanel() {

  const NormalCycleTime = 5000;//轮换时间，单位毫秒
  const LongCycleTime = 600000; // 很大（长）轮换时间，单位毫秒


  // 用于存储当前选择的标题索引
  const [activeIndex, setActiveIndex] = useState(0);
  // 用于判断是否浏览到该组件
  const [isInView, setIsInView] = useState(false);
  

  const handleTitleClick = (index) => {
    // 如果点击的是当前索引，则设置为 null，表示关闭；否则设置为新的索引
    setActiveIndex(activeIndex === index ? index : index);
    };
  
    useEffect(() => {
      const cycleTime = isInView ? NormalCycleTime : LongCycleTime;
      const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, cycleTime); // 切换时间
    
      return () => clearInterval(interval); // 清除计时器
    }, [isInView]);


  return (
    <div className='max-w-[1200px]  flex flex-row justify-between' 

    onMouseEnter={() => setIsInView(true)}    //判断鼠标是否在组件上
    onMouseLeave={() => setIsInView(false)}
    >

      {/* 左侧标题部分 */}
        <div className=' w-5/12 h-[500px] overflow-y-auto pl-4'>
           
            {items.map((item, index) => (
            <div key={index} className={`pl-4 my-4 h-auto flex `} >
                <div className=' w-[3px] mr-3 bg-gray-400 '> <div className={`w-[3px] bg-blue-500 transition-all`} style={{ transitionDuration: `${activeIndex === index ? NormalCycleTime-500 : 0}ms`, height: activeIndex === index ? '100%' : '0' }}></div></div>
                <div className=' '>
                <div className='text-lg text-left cursor-pointer' onClick={() => handleTitleClick(index)}>
                {item.title}
                </div>
                <div className={`text-lg text-gray-500 text-left overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-30'}`}>
                  {item.description}
                </div>
                </div>
             </div>
            
            ))}
        </div>

      {/* 右侧图片部分 */}
        <div className='w-7/12 max-w-[700px]'>
            {activeIndex !== null && (
            <img src={items[activeIndex].picture}
            loading="lazy"
            alt=""
            className={`'transition-opacity duration-1000' ${activeIndex !== null ? 'opacity-100' : 'opacity-0'}`}
            key={activeIndex} 
            />
            )}
        </div>
    </div>
  );
}