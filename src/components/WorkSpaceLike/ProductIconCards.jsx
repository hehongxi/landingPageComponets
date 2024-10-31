// ProductIconCards.jsx
import { Link } from 'react-router-dom';

//1，导入图片
import GmailIcon from '../../assets/svg/Gmail.svg';
import DriveIcon from '../../assets/svg/Drive.svg';
import MeetIcon from '../../assets/svg/Meet.svg';
import CalendarIcon from '../../assets/svg/Calendar.svg';
import ChatIcon from '../../assets/svg/Chat.svg';
import Docs from '../../assets/svg/Docs.svg';
import SheetsIcon from '../../assets/svg/Sheets.svg';
import SlidesIcon from '../../assets/svg/Slides.svg';
import KeepIcon from '../../assets/svg/Keep.svg';
import SiteIcon from '../../assets/svg/Site.svg';
import FormsIcon from '../../assets/svg/Forms.svg';
import AppSheetIcon from '../../assets/svg/AppSheet.svg';


//2，数据整理格式
const products = [
  { imgPath: GmailIcon , cardLabel: "Gmail" ,link:"/"},
  { imgPath: DriveIcon , cardLabel: "Drive" ,link:"/"},
  { imgPath: MeetIcon , cardLabel: "Meet" ,link:"/"},
  { imgPath: CalendarIcon , cardLabel: "Calendar" ,link:"/"},
  { imgPath: ChatIcon , cardLabel: "Chat" ,link:"/"},
  { imgPath: Docs , cardLabel: "Docs" ,link:"/"},
  { imgPath: SheetsIcon , cardLabel: "Sheets" ,link:"/"},
  { imgPath: SlidesIcon , cardLabel: "Slides" ,link:"/"},
  { imgPath: KeepIcon , cardLabel: "Keep" ,link:"/"},
  { imgPath: SiteIcon , cardLabel: "Site" ,link:"/"},
  { imgPath: FormsIcon , cardLabel: "Forms" ,link:"/"},
  { imgPath: AppSheetIcon , cardLabel: "AppSheet" ,link:"/"},

];






export default function ProductIconCards(){
    return(
        <>
        <div className='flex flex-wrap justify-center gap-4'>
            {products.map((product,index)=>(
            
            <Link key={index} to={product.link} className='h-24 w-[108px] flex flex-col justify-between items-center' >
                <img src={product.imgPath} alt={product.imgPath} className='h-[60px] w-[60px]' />
                <div className='text-gray-500'>
                    {product.cardLabel}
                </div>
            </Link>
            
            ))}
        </div>

        <div>

        </div>
        </>
    )
}