// XiaomiLike.jsx
import { Link } from "react-router-dom";

//组件
import XiaomiHeader from "./XiaomiLike/XiaomiHeader";
import XiaomiCarousel from "./XiaomiLike/XiaomiCarousel";





export default function XiaomiLike() {
    return (
        <>
            <div>
                <div >
                    {/* Header */}
                    <div>
                        <XiaomiHeader />
                        <div className=" h-12"></div>
                    </div>
                    {/* Header */}

                    <XiaomiCarousel />
                    <div className=" h-[60dvh] w-full bg-pink-300"></div>
                    <div className=" h-[60dvh] w-full bg-blue-300"></div>
                    <div className=" h-[60dvh] w-full bg-pink-300"></div>
                    <div className=" h-[60dvh] w-full bg-blue-300"></div>

                </div>
            </div>
        </>
    )
}