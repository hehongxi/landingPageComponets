//XiaomiHeader.jsx

import { Link } from "react-router-dom";

import accountIcon from './img/accountIcon.svg'
import cartIcon from './img/cartIcon.svg'
import searchIcon from './img/searchIcon.svg'
import xiaomiIcon from './img/xiaomiIcon.svg'
import homeIcon from './img/homeIcon.svg'




export default function XiaomiHeader() {
    return (
        <>
            <div className="h-12 w-full bg-white fixed flex top-0 left-0 right-0 z-50">
                <div className="w-full h-full mx-4 flex justify-between items-center ">
                    <div className="min-w-[650px] h-full w-1/2 flex items-center ">
                        {/* 变化的LOGO */}
                        <div className=" w-[60px] h-full flex items-center justify-center ">
                            <Link to='/' className="w-7 h-7 flex mx-auto bg-orange-500 rounded-[10px] items-center overflow-hidden group">
                                <div className="h-4  -ml-5 flex  transition-transform duration-200 ease-in-out transform group-hover:translate-x-7">
                                    <img src={homeIcon} alt="homeIcon" className="h-3 my-auto mr-[14px]" />
                                    <img src={xiaomiIcon} alt="xiaomiIcon" className="h-4" />
                                </div>
                            </Link>
                        </div>
                        {/* 下拉菜单 */}
                        <div className="菜单列表 min-w-[580px] h-full px-4 flex items-center justify-between">
                            <Link to='/' className="h-full flex items-center border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 duration-300 ">
                                オンラインストア
                            </Link>
                            <Link to='/' className="h-full flex items-center border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 duration-300 ">
                                モバイル
                            </Link>
                            <Link to='/' className="h-full flex items-center border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 duration-300 ">
                                ウェアラブル
                            </Link>
                            <Link to='/' className="h-full flex items-center border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 duration-300 ">
                                スマートホーム
                            </Link>
                            <Link to='/' className="h-full flex items-center border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 duration-300 ">
                                ビジュアル
                            </Link>
                        </div>
                    </div>

                    <div className="min-w-[400px] h-full flex items-center">
                        <div className=" w-3/5 h-full flex justify-between">
                            <Link className="h-full flex items-center border-b-2 border-transparent hover:border-orange-500 duration-300 ">
                                サポート
                            </Link>
                            <Link className="h-full flex items-center border-b-2 border-transparent hover:border-orange-500 duration-300 ">
                                Miポイントセンター
                            </Link>

                        </div>
                        <div className=" w-2/5 h-full flex items-center justify-between px-4">
                            <Link className=""><img src={searchIcon} alt="searchIcon" className="w-5" /></Link>
                            <Link className=""><img src={cartIcon} alt="cartIcon" className="w-5" /></Link>
                            <Link className=""><img src={accountIcon} alt="accountIcon" className="w-5" /></Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}