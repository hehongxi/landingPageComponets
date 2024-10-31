// KeenonHeader.jsx 
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from './img/logo-gray.webp';
import Icondennwa from './img/dennwa.svg';
import IconLanguage from './img/language.svg'
import burgerMenu from './img/burgerMenu.svg'
import closeX from './img/closeX.svg'

import robot from './img/robot.webp'
import robot2 from './img/robot2.webp'
import robot3 from './img/robot3.webp'
import robot4 from './img/robot4.webp'
import robot5 from './img/robot5.webp'
import robot6 from './img/robot6.webp'
import robot7 from './img/robot7.png'
import robot8 from './img/robot8.png'

import smartdiet from './img/smartdiet.webp'
import smarthotel from './img/smarthotel.webp'






export default function KeenonHeader() {

    const [selectedSeries, setSelectedSeries] = useState('飲食シリーズ');

    const robotData = {
        '飲食シリーズ': [
            [robot, '宣伝と配送が両立するロボット'],
            [robot2, '宣伝と配送が両立大きなタッチパネル・スマートなセルフ受け取りするロボット'],
            [robot3, '高耐荷重・大きなタッチパネル'],
            [robot4, 'コンパクトでスマートなセルフ受取配送'],
            [robot5, '安全的・衛生的、エレベーター連携']],


        'ホテルシリーズ': [
            [robot6, 'ルームサービスにおすすめ']],

        '清掃シリーズ': [
            [robot7, '優れたデザインの清掃ロボット']],

        '工場用シリーズ': [
            [robot8, '重荷配送ロボット']
        ],

    };

    // burger显示图标
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }




    //菜单组件重构
    //菜单项组件
    const MenuItem = ({ item }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className=" ">

                <div onClick={toggleMenu} className="cursor-pointer w-full min-h-9 py-2 px-4 rounded-lg duration-300 hover:bg-gray-300 flex justify-between text-nowrap group">
                    <div className='w-40'>{item.name}</div>
                    {item.children && item.children.length > 0 && (<img src="src/components/Keenon/img/topIcon.svg" alt="topIcon" className="w-3 h-3 my-auto group-hover:scale-y-[-1]" />)}
                </div>
                {isOpen && item.children && item.children.length > 0 && (

                    <div className=" w-full flex pl-4 ">
                        <div className='border-l-[1px] w-1 border-gray-300 '></div>
                        <div className='w-full'>
                            {item.children.map((child, index) => (
                                <MenuItem key={index} item={child} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };
    //多级菜单项组件
    const MultiLevelMenu = ({ menuData }) => {
        return (
            <div className="w-full ">

                {menuData.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}

            </div>
        );
    };


    // 菜单数据
    const menuData = [
        {
            name: 'ロボット',
            children: [
                {
                    name: '飲食シリーズ',
                    children: [
                        { name: '宣伝と配送が両立するロボット' },
                        { name: 'スマートなセルフ受け取りするロボット' },
                        { name: '高耐荷重・大きなタッチパネル' },
                        { name: '宣伝と配送が両立するロボット' },
                        { name: 'コンパクトでスマートなセルフ受取配送' },
                    ],
                },
                {
                    name: 'ホテルシリーズ',
                    children: [
                        { name: 'ルームサービスにおすすめ' },
                    ]
                },
                {
                    name: '清掃シリーズ',
                    children: [
                        { name: '優れたデザインの清掃ロボット' },
                        { name: '優れたデザインの清掃ロボット1' },
                        { name: '優れたデザインの清掃ロボット2' },
                        { name: '優れたデザインの清掃ロボット3' },
                    ]
                },
                {
                    name: '工場用シリーズ',
                    children: [
                        { name: '優れたデザインの清掃ロボット' },
                    ]
                }
            ],
        },
        {
            name: 'ソリューションズ',
            children: [
                { name: 'スマート飲食' },
                { name: 'スマートホテル' },
            ],
        },
        { name: '事例紹介' },
        { name: 'ニュース' },
        { name: 'KEENONについて' },

    ];







    return (
        <>
            <div>
                <div className={`h-24 w-full mb-24 z-50 bg-white fixed top-0 left-0   flex flex-row  sm:justify-between   transition duration-500 bg-opacity-0  hover:bg-opacity-100 `}>

                    <div className='flex ml-0 h-full w-5/12 sm:w-8/12 sm:ml-16 '>

                        {/* logo */}
                        <div>
                            <Link to="/" className='h-full sm:w-36 flex items-center justify-center'>
                                <img src={Logo} alt="Logo" className='w-36 h-9 ' />
                            </Link>
                        </div>
                        {/* logo */}

                        {/* 左边navi */}
                        <div className=" min-w-[500px] w-1/2 h-full justify-between items-center ml-8 hidden lg:flex ">
                            {/*start of robot show page */}
                            <div className='h-full  group '>
                                <Link className='h-full flex items-center justify-center'>
                                    ロボット
                                </Link>
                                {/*h-0 group-hover:h-[350px] */}
                                <div className='absolute left-0  bg-white w-full overflow-hidden transition-all duration-300 max-h-[0px] group-hover:max-h-dvh'>
                                    <div className='w-full h-full  px-20 pb-10  '>
                                        <div className="min-w-[464px] w-1/3 flex justify-between">
                                            {Object.keys(robotData).map((series) => (
                                                <div
                                                    key={series}
                                                    className=" cursor-pointer "
                                                    onMouseEnter={() => setSelectedSeries(series)}
                                                >
                                                    <span className='border-b border-transparent hover:border-blue-500'>{series}</span>

                                                </div>

                                            ))}
                                        </div>
                                        <div className="w-full h-full flex flex-wrap gap-4 ">
                                            {robotData[selectedSeries].map((robot, index) => (
                                                <div key={index} className="  bg-white">
                                                    <div className='w-56 h-56 mx-auto flex items-center justify-center cursor-pointer'><img src={robot[0]} alt={robot[1]} className='w-52  hover:w-56' /></div>
                                                    <div className=' text-center w-72 mx-auto cursor-pointer'>{robot[1]}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end of robot show page */}

                            {/* start of solutions */}
                            <div className='h-full  group '>
                                <Link className='h-full flex items-center justify-center'>
                                    ソリューションズ
                                </Link>
                                <div className='absolute left-0  bg-white w-full overflow-hidden transition-all duration-300 h-0  group-hover:h-[350px]'>
                                    <div className='px-20 w-full h-full py-4 flex '>

                                        <div className='w-[557px] h-72 rounded-2xl flex bg-gray-200 mr-8'>

                                            <div className='w-1/3 overflow-hidden rounded-l-2xl'>
                                                <img src={smartdiet} alt="smartdiet"
                                                    className='h-full transition-transform  duration-300 transform scale-105 hover:scale-110' />
                                            </div>

                                            <div className='p-6 flex flex-col justify-between '>
                                                <div className='font-normal text-lg'>スマート飲食</div>
                                                <div className='font-normal text-sm'>スマート飲食ソリューション</div>
                                                <Link to='/' className=' py-2 bg-blue-400 hover:bg-blue-600 duration-200 rounded text-center font-normal text-sm text-white'>詳細を見る</Link>

                                            </div>
                                        </div>

                                        <div className='w-[557px] h-72 rounded-2xl flex bg-gray-200 mr-8'>

                                            <div className='w-1/3 overflow-hidden rounded-l-2xl'>
                                                <img src={smarthotel} alt="smarthotel"
                                                    className='h-full transition-transform  duration-300 transform scale-105 hover:scale-110' />
                                            </div>

                                            <div className='p-6 flex flex-col justify-between '>
                                                <div className='font-normal text-lg'>スマートホテル</div>
                                                <div className='font-normal text-sm'>スマートホテルソリューション</div>
                                                <Link to='/' className='py-2 bg-blue-400 hover:bg-blue-600 duration-200 rounded text-center font-normal text-sm text-white'>詳細を見る</Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* end of solutions */}


                            </div>
                            <Link className='h-full flex items-center justify-center'>事例紹介</Link>
                            <Link className='h-full flex items-center justify-center'>ニュース</Link>
                            <Link className='h-full flex items-center justify-center'>KEENONについて</Link>
                            {/* </div> */}
                        </div>
                    </div>


                    {/* 右边buttons */}
                    <div className=' h-full w-3/12 flex justify-between items-center mr-16 '>

                        <Link to="/" className='w-[198px] h-9 text-nowrap border border-black  rounded-lg  font-medium text-sm transition duration-200 flex items-center justify-center hover:border-blue-400 hover:text-blue-400 '>
                            お問い合わせ
                        </Link>
                        <div to="/" className='h-full min-w-32  items-center hover:text-gray-500 hidden lg:flex'>
                            <img src={Icondennwa} alt="" className='h-4' />
                            <div className=' hover:border-b border-black text-nowrap '></div>
                            <Link className="relative inline-block cursor-pointer group">
                                <span className="relative z-10">08-0707-0909</span>
                                <span className="absolute left-1/2 top-full  w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                            </Link>
                        </div>

                        {/* language change */}
                        <div to="/" className='group'>
                            <div className='w-20 flex items-center justify-center cursor-pointer'>
                                <img src={IconLanguage} alt="IconLanguage" />
                                <div className=''>日本語</div>
                            </div>
                            <div className='absolute mt-4 -ml-6 bg-white w-[140px]  overflow-hidden transition-all duration-300 h-0 group-hover:h-[363px]'
                                style={{ boxShadow: '1px 1px 6px 0px rgba(66, 66, 66, 0.15)' }}>
                                <div className='h-[363px] px-8 py-4 flex flex-col justify-between '>

                                    <Link className='border-b border-transparent hover:border-blue-500'>English</Link>
                                    <Link className='border-b border-transparent hover:border-blue-500'>Deutsch</Link>
                                    <Link className='border-b border-transparent hover:border-blue-500'>Français</Link>
                                    <Link className='border-b border-transparent hover:border-blue-500'>日本語</Link>
                                    <Link className='border-b border-transparent hover:border-blue-500'>한국어</Link>
                                    <Link className='border-b border-transparent hover:border-blue-500'>Italiano</Link>
                                    <Link className='border-b border-transparent hover:border-blue-500'>简体中文</Link>
                                    <Link className='border-b border-transparent hover:border-blue-500'>繁體中文</Link>

                                </div>
                            </div>
                        </div>
                        {/* language change */}

                        {/* burgermenu */}
                        <div className='h-full mr-2 ' >

                            {/* icon */}
                            <div className='h-full flex items-center justify-center  '>
                                <button className='w-6 h-6 flex lg:hidden' onClick={handleToggle}>
                                    {isOpen ? (<img src={closeX} alt="closeX" />) : (<img src={burgerMenu} alt="burgerMenu" />)}
                                </button>
                            </div>

                            {/* menu 不好用版*/}
                            {isOpen && (
                                <div className=' absolute left-0 w-full  lg:h-0 h-dvh -mt-2 rounded-t-xl bg-white overflow-auto  '>
                                    <div className=' p-2 text-sm text-nowrap  '>
                                        {/* PhoneNum */}
                                        <div className='w-full h-9 py-2 px-4 rounded-lg duration-300 hover:bg-gray-300'>
                                            <Link className="relative inline-block cursor-pointer group ">
                                                <span className="relative z-10">08-0707-0909</span>
                                                <span className="absolute left-1/2 top-full  w-0 h-[1px]  transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
                                            </Link>
                                        </div>

                                        {/* menu 重构好用版*/}
                                        <div className=' w-full h-auto'>
                                            <MultiLevelMenu menuData={menuData} />
                                        </div>
                                    </div>
                                </div>)}
                        </div>


                    </div>
                    {/* 右边buttons */}

                </div>
                {/* navigation bar*/}

            </div>
        </>
    )
}


