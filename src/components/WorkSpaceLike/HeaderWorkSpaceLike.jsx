// HeaderWorkSpaceLike.jsx
import { Link } from 'react-router-dom';

//图片
import logo_in_navi from '../../assets/svg/logo-google-workspace.svg';
import logo_in_navi1 from '../../assets/svg/logo-workspace-apps.svg';



export default function HeaderWorkSpaceLike() {
    return (
        <>
            <div>

                <div className={` bg-white bg-opacity-100 shadow-md h-16 fixed flex flex-row justify-between top-0 left-0 right-0 z-50 py-[10px] pl-[24px] pr-[9px]`}>
                    {/* 左边navi */}
                    <div className=" w-[370px] h-11 flex justify-between items-center ">

                        <Link to='/'>
                            <div className='pl-2 pt-1'>
                                <img src={logo_in_navi} alt="logo" title='logo' className='h-[24px] object-contain ' />
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='pt-1'>
                                <img src={logo_in_navi1} alt="logo" title='logo' className='h-[20px] ' />
                            </div>
                        </Link>
                    </div>
                    {/* 右边button */}
                    <div className=' h-11 w-[310px] flex justify-between'>
                        <Link to='/'>
                            <button className='w-[140px] h-11 border-gray-300 border rounded-md text-blue-600 font-medium font-sans text-sm hover:bg-gray-100 hover:border-blue-600 transition duration-200'>
                                お問い合わせ
                            </button>
                        </Link>
                        <Link to='/'>
                            <button className='w-[154px] h-11 bg-blue-500 rounded-md text-white font-medium font-sans text-sm hover:bg-blue-800 transition duration-200'>
                                無料試用を開始
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </>
    )
}



