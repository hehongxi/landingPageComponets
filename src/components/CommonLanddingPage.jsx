// CommonLanddingPage.jsx
import {Link} from 'react-router-dom';

//navigation bar
import logo_in_navi from '../assets/pic/logo.png';
import logo_in_navi1 from '../assets/pic/logo.png';
const logo1_link = "/";
const logo2_link = "/";
const button1_link = "/";
const button2_link = "/";
const opacityValue = 100; //navigation bar透明度调节
const button1= "按键内容";
const button2 = "按键内容2";

//products
import GmailIcon from '../assets/pic/logo.png';
import DriveIcon from '../assets/pic/logo.png';
import MeetIcon from '../assets/pic/logo.png';
import CalendarIcon from '../assets/pic/logo.png';
import ChatIcon from '../assets/pic/logo.png';
import Docs from '../assets/pic/logo.png';
import SheetsIcon from '../assets/pic/logo.png';
import SlidesIcon from '../assets/pic/logo.png';
import KeepIcon from '../assets/pic/logo.png';
import SiteIcon from '../assets/pic/logo.png';
import FormsIcon from '../assets/pic/logo.png';
import AppSheetIcon from '../assets/pic/logo.png';

const products = [
  { imgPath: GmailIcon , cardLabel: "标准小卡片A" ,link:""},
  { imgPath: DriveIcon , cardLabel: "标准小卡片" ,link:""},
  { imgPath: MeetIcon , cardLabel: "标准小卡片C" ,link:""},
  { imgPath: CalendarIcon , cardLabel: "标准小卡片D" ,link:""},
  { imgPath: ChatIcon , cardLabel: "标准小卡片E" ,link:""},
  { imgPath: Docs , cardLabel: "标准小卡片F" ,link:""},
  { imgPath: SheetsIcon , cardLabel: "标准小卡片G" ,link:""},
  { imgPath: SlidesIcon , cardLabel: "标准小卡片H" ,link:""},


];






//wraper
const slogan = "标语内容1";
const slogan2 = "标语内容2";
const slogan3 = "标语内容3";


const tagline = "描述内容1";
const tagline2 = "描述内容2";
const tagline3 = "描述内容3";
const tagline4 = "描述内容4";
const tagline5 = "描述内容5";
const tagline6 = "描述内容6";



function  ProductLinkCard({imgPath,cardLabel,link="/"}){
  return(
    <>
      <Link to={link} className='h-24 w-[108px] flex flex-col justify-between items-center' >
          <img src={imgPath} alt={imgPath} className='h-[60px] w-[60px]' />
          <div className='text-gray-500'>
            {cardLabel}
          </div>
      </Link>
    </>
  )
}


function ProductPrice({priceLevel,price,buttonContent,buttonLink,children}){
  return(
    <>
    <div className='w-72 h-[956px] border px-[14px] py-10 rounded-lg'>
      <div className='flex flex-col h-[220px] justify-between'>
        <div className='text-3xl whitespace-nowrap'>{priceLevel} </div>
        <div className='text-4xl'>¥{price}<span className='text-sm ml-1'>JPY</span></div>
        <div className='text-gray-400 text-sm'>
          <div>ユーザー 1 人あたりの月額</div>
          <div>（1 年契約の場合）</div>
        </div >
        <Link to={buttonLink} className='mb-6' >
          <button className='w-[154px] h-12  border-gray-300 border rounded-md text-blue-600 font-medium font-sans text-sm hover:bg-gray-100 hover:border-blue-600 transition duration-200'>
            {buttonContent}
          </button>
        </Link>
      </div>
      <hr />
        <div className='pt-6 text-left'>
          {children}
        </div>
    </div>
    </>
  )
}






export default function CommonLanddingPage() {
    return (
      <>
        <div>
          {/* 固定的导航栏 */}
          <div className= {` bg-white bg-opacity-${opacityValue} shadow-md h-16 fixed     flex flex-row  justify-between      top-0 left-0 right-0     py-[10px] pl-[24px] pr-[9px]` }>
            {/* 左边navi */}
            <div className=" w-[370px] h-11 flex justify-between items-center ">
              
              <Link to={logo1_link}>
              <div className='pl-2 pt-1'>
                <img src={logo_in_navi} alt="logo" title='logo' className='h-[24px] object-contain ' />
              </div>
              </Link>
              <Link to={logo2_link}>
              <div className='pt-1'>
                 <img src={logo_in_navi1} alt="logo" title='logo' className='h-[20px] ' />
              </div>
              </Link>
            </div>
            {/* 右边button */}
            <div className=' h-11 w-[310px] flex justify-between'>
              <Link to={button1_link}>
                <button className='w-[140px] h-11 border-gray-300 border rounded-md text-blue-600 font-medium font-sans text-sm hover:bg-gray-100 hover:border-blue-600 transition duration-200'>
                {button1}
                </button>
              </Link>
              <Link to={button2_link}>
              <button className='w-[154px] h-11 bg-blue-500 rounded-md text-white font-medium font-sans text-sm hover:bg-blue-800 transition duration-200'>
                {button2}
              </button>
              </Link>
              
            </div>
          </div>
  
          {/*固定的版心 */}
          <div className="mt-16">
            <div className="flex justify-center">
              <div className=" max-w-[1162px] w-11/12  h-dvh text-center">
                {/*work as margin */}
                <div className='h-16 '></div>
                {/*solgan*/}
                <div className=' space-y-5 '>
                    <img src="src\assets\svg\logo-workspace-apps.svg" alt="logo-workspace-apps" className='h-9 mx-auto'/>
                  <p className=' w-4/6 leading-tight font-bold text-5xl mx-auto'>
                    {slogan}
                  </p>
                  {/*tagline*/}
                  <p className='w-9/12 mx-auto text-gray-500 text-base font-normal'>
                    {tagline}
                  </p >
                  <Link to={button2_link}>
                    <button className='w-[160px] h-12 bg-blue-500 rounded-md text-white font-medium font-sans text-sm hover:bg-blue-800 transition duration-200 mt-5'>
                      {button2}
                    </button>
                  </Link>
                </div>
                {/*img*/}
                  <div>
                    <img src="src\assets\svg\unnamed.webp" alt="unnamed" className='h-full'/>
                  </div>
                {/*work as margin */}
                  <div className='h-16 '></div>
                {/*solgan*/}
                  <p className=' w-full leading-tight font-medium text-5xl mx-auto'>
                    {slogan2}
                  </p>
                {/*work as margin */}
                  <div className='h-6 '></div>
                {/*tagline*/}
                  <p className='w-9/12 mx-auto text-gray-500 text-base font-normal'>
                    {tagline2}
                  </p >
                {/*tagline*/}
                  <p className='w-9/12 mx-auto text-gray-500 text-xl mt-4 font-normal'>
                    {tagline3}
                  </p >  
                {/*Product Link Card*/} 
                <div className='w-11/12 mx-auto flex flex-wrap items-center justify-center gap-4 mt-16'>
                {products.map((product,index)=>(
                  <ProductLinkCard key={index} imgPath={product.imgPath} cardLabel={product.cardLabel} link=''/>
                  ))}
                </div>
                {/*work as margin */}
                <div className='h-16 '></div>
                {/*product price and details */}
                <div className='flex justify-between'>
                  <ProductPrice priceLevel={"商品等级A"} price={"商品价格1"} buttonContent="按键内容5" buttonLink="/">
                    <p className='mb-3'>✔️ 标准商品卡片内容7</p></ProductPrice>
                    <ProductPrice priceLevel={"商品等级B"} price={"商品价格2"} buttonContent="按键内容6" buttonLink="/">
                    <p className='mb-3'>✔️ 标准商品卡片内容8</p></ProductPrice>
                    <ProductPrice priceLevel={"商品等级C"} price={"商品价格3"} buttonContent="按键内容7" buttonLink="/">
                    <p className='mb-3'>✔️ 标准商品卡片内容9</p></ProductPrice>
                    <ProductPrice priceLevel={"商品等级D"} price={"商品价格4"} buttonContent="按键内容8" buttonLink="/">
                    <p className='mb-3'>✔️ 标准商品卡片内容10</p></ProductPrice>
                </div>
                {/*work as margin */}
                <div className='h-16 '></div>
                {/*tagline*/}
                  <p className=' mx-auto text-gray-500 text-base font-normal'>
                    {tagline4} <br /><br />
                    {tagline5} <br /><br />
                    {tagline6}
                {/*work as margin */}
                <div className='h-16 '></div>                    
                  </p >
                {/*solgan*/}
                <div className=' space-y-5 '>
                  <p className=' w-5/6 leading-tight font-normal text-5xl mx-auto'>
                    {slogan3}
                  </p>
                </div>
              </div>

            </div>
  
          </div>
        </div>
      </>
    );
  }
  