// FooterWorkSpaceLike.jsx
import { Link } from "react-router-dom"



//添加图片
import socialx from '../WorkSpaceLike/FooterImg/social-x.svg'
import socialyoutube from '../WorkSpaceLike/FooterImg/social-youtube.svg'
import sociallinkedin from '../WorkSpaceLike/FooterImg/social-linkedin.svg'
import socialinstagram from '../WorkSpaceLike/FooterImg/social-instagram.svg'
import socialfacebook from '../WorkSpaceLike/FooterImg/social-facebook.svg'
import socialtiktok from '../WorkSpaceLike/FooterImg/social-tiktok.svg'
import language from '../WorkSpaceLike/FooterImg/language.svg'
import logogoogle from '../WorkSpaceLike/FooterImg/logo-google.svg'




export default function FooterWorkSpaceLike() {
    return (
        <>
            <div>
                {/* footer */}
                <div className=' h-48 mt-32 bg-gray-50' >
                    <div className=' w-3/5 h-full mx-auto '>

                        <div className=' h-1/2 flex items-center  '>
                            <div className='text-base border-r border-gray-500 w-40'> <Link to="/" className='underline'>ブログ</Link>をフォロー</div>
                            <img src={socialx} alt={socialx} className="ml-8 cursor-pointer" />
                            <img src={socialyoutube} alt={socialyoutube} className="ml-8 cursor-pointer" />
                            <img src={sociallinkedin} alt={sociallinkedin} className="ml-8 cursor-pointer" />
                            <img src={socialinstagram} alt={socialinstagram} className="ml-8 cursor-pointer" />
                            <img src={socialfacebook} alt={socialfacebook} className="ml-8 cursor-pointer" />
                            <img src={socialtiktok} alt={socialtiktok} className="ml-8 cursor-pointer" />
                        </div>

                        <hr />

                        <div className=' h-1/2 w-[800px] flex items-center justify-between '>

                            <div className=" flex  justify-between text-nowrap gap-x-4">
                                <img src={logogoogle} alt={logogoogle} />
                                <Link to="/">Google について</Link>
                                <Link to="/">Google のサービス</Link>
                                <Link to="/">プライバシー</Link>
                                <Link to="/">規約</Link>
                                <Link to="/">Cookie を管理</Link>
                            </div>

                            {/* Language change */}
                            <div className="flex mr-3  ">
                                <img src={language} alt={language} />
                                <div className="ml-2 cursor-pointer ">
                                    <div className="">
                                        Language
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}