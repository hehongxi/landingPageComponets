// OverflowButton.jsx
import { Link } from "react-router-dom"
import ChatIcon from '../../assets/svg/ChatButton.svg'

export default function OverflowButton(){
    return(
        <>
            <div> 
                <Link to='/' className="fixed z-50 bottom-7 right-7 w-14 h-14 bg-[#5582f2] p-4 text-center rounded-full ">
                    <img src={ChatIcon} alt="Chat" />
                </Link>
            </div>
        </>
    )
}