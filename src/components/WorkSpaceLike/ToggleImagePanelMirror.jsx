//ToggleImagePanelMirror.jsx
//展示图片浏览功能组件 左右镜像版


import { useState,useEffect } from 'react';

const CycleTime = 8000;//轮换时间，单位毫秒

//sample
//按以下步骤添加图片和内容填充
//1，导入图片

import LargeStorageTeam from '../../assets/png/LargeStorageTeam.png';
import BusinessMail from '../../assets/png/BusinessMail.png';
import Storeopeningideas from '../../assets/png/Storeopeningideas.png';
import Createagendaslide from '../../assets/png/Createagendaslide.png';

// 2，数据编辑成组
const items = [
  {
    title: "Gemini for Workspace で優れたアイデアを素早く現実に",
    description: "Gemini for Workspace の機能を活用して、メールや文書の作成、データの整理、プレゼン資料の作成を効率的に行えるようチームを支援し、生産性を向上させることができます。",
    picture: Createagendaslide
  },
  {
    title: "密に連携した便利なツール",
    description: "チームで作業しているのがスプレッドシート、チャット、メール、ビデオ通話、またはそれら全てであろうと、アプリケーション間で情報が失われることなく、作業を続けることができます。さらに、スマート キャンバスや文法修正などの便利な機能により、チームは最高の成果を上げることができます。",
    picture: Storeopeningideas
  },
  {
    title: "ビジネス向けのカスタムメール（@[会社名]）",
    description: "自社ドメインのビジネス用メールアドレスを使うことで、顧客の信頼獲得に役立ちます。priya@yourcompany などのチームメンバー個人としてのメールアドレスや sales@yourcompany などのグループとしてのメールアドレスを利用できます。",
    picture: BusinessMail
  },
  {
    title: "大容量ストレージをチームで活用",
    description: "拡張され、簡単に検索できるドライブ 内の共有ドライブに、チームの作業データを安全に保管しておけるので、最新の情報を常に全員が把握できます。",
    picture: LargeStorageTeam
  }

];




//渲染组件
export default function ToggleImagePanelMirror() {

  
  const NormalCycleTime = 10000;//轮换时间，单位毫秒
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


              {/* 左侧标题部分 */}
              <div className=' w-5/12 h-[500px] overflow-y-auto pl-4'>
           
           {items.map((item, index) => (
           <div key={index} className={`pl-4 my-4 h-auto flex `} >
               <div className=' w-[3px] mr-3 bg-gray-400 '>   
               <div className={`w-[3px] bg-blue-500 transition-all`}  style={{ transitionDuration: `${activeIndex === index ? NormalCycleTime-500 : 0}ms`, height: activeIndex === index ? '100%' : '0' }}></div></div>
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
    </div>
  );
}