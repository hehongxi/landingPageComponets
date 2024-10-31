// KeenonLike.jsx

import KeenonHeader from "./Keenon/KeenonHeader"

export default function KeenonLike() {
  return (
    <>
      <div className="bg-blue-300 w-full h-dvh">
        {/* Keenon的header */}
        <KeenonHeader />
        <div className=" h-24 bg-blue-300"></div>

        {/* wraper content */}


        <div className=" h-dvh bg-pink-200"></div>
        <div className=" h-dvh bg-green-200"></div>
      </div>
    </>
  )
}


