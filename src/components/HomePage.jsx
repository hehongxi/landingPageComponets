//LandingPage.jsx
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <div className='mt-7 flex flex-col'>
        {[
          { to: "/Workspacelike", label: "WorkspaceLike（完成241023，Header，产品卡片，价格卡片，切换图片面板，轮播，footer）", bgColor: "bg-pink-300" },
          { to: "/KeenonLike", label: "KeenonLike（完成241023，Header）", bgColor: "bg-blue-300" },
          { to: "/XiaomiLike", label: "XiaomiLike(完成241028,轮播)", bgColor: "bg-yellow-300" },
          { to: "/GoodPatchLike", label: "GoodPatchLike（20241028，header，悬浮泡泡，透视效果，鼠标跟随。）", bgColor: "bg-purple-300" },
          { to: "/Blankpage", label: "调试用的空白页", bgColor: "bg-green-300" }
        ].map((link, index) => (
          <Link
            key={index}
            to={link.to}
            target="_blank"
            className={`${link.bgColor}  mt-4 mx-5 font-bold py-2 px-4 rounded-lg  hover:scale-105 transition transform duration-500`}
          >
            {link.label}
          </Link>
        ))}
      </div>

    </>
  )
}
