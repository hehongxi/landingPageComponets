// Workspacelike.jsx
import { Link } from 'react-router-dom';

//各个组件
import HeaderWorkSpaceLike from './WorkSpaceLike/HeaderWorkSpaceLike';
import ToggleImagePanel from './WorkSpaceLike/ToggleImagePanel';
import ToggleImagePanelMirror from './WorkSpaceLike/ToggleImagePanelMirror';
import ProductPriceAndDetails from './WorkSpaceLike/ProductPriceAndDetails'
import OverflowButton from './WorkSpaceLike/OverflowButton';
import ProductIconCards from "./WorkSpaceLike/ProductIconCards";
import FooterWorkSpaceLike from './WorkSpaceLike/FooterWorkSpaceLike';
import Carousel from "./WorkSpaceLike/Carousel"


export default function Workspacelike() {
  return (
    <>
      <div>

        {/* 固定悬浮在页面的按钮，未添加功能 */}
        <OverflowButton />

        {/* 固定的导航栏 */}
        <HeaderWorkSpaceLike />

        {/*标准版心 */}
        <div className="mt-16 h-full">
          <div className="flex justify-center text-center ">
            <div className=" max-w-[1162px] w-11/12  ">

              {/*work as margin */}
              <div className='h-16 '></div>

              {/*solgan*/}
              <div className=' space-y-5 '>
                <img src="src\assets\svg\logo-workspace-apps.svg" alt="logo-workspace-apps" className='h-9 mx-auto' />
                <p className=' w-4/6 leading-tight font-bold text-5xl mx-auto'>
                  Google Workspace と Gemini を活用してビジネスをより効率的に発展させましょう
                </p>
                {/*tagline*/}
                <p className='w-9/12 mx-auto text-gray-500 text-base font-normal'>
                  Google Workspace では、どのプランでもビジネス用のカスタム メールアドレスを取得できるほか、Gmail、カレンダー、Meet、Chat、ドライブ、ドキュメント、スプレッドシート、スライドなどのコラボレーション ツールを利用できます。さらに Gemini for Workspace が加わったことで、生成 AI を活用して組織の生産性を高めることができるようになりました。
                </p >

                <Link to='/'>
                  <button className='w-[160px] h-12 bg-blue-500 rounded-md text-white font-medium font-sans text-sm hover:bg-blue-800 transition duration-200 mt-5'>
                    無料試用を開始
                  </button>
                </Link>
              </div>

              {/*img*/}
              <div>
                <img src="src\assets\svg\unnamed.webp" alt="unnamed" className='h-full' />
              </div>

              {/*work as margin */}
              <div className='h-16 '></div>

              {/*solgan*/}
              <p className=' w-full leading-tight font-medium text-5xl mx-auto'>
                ビジネスに合ったプランを見つけましょう。まずは
              </p>

              {/*work as margin */}
              <div className='h-6 '></div>

              {/*tagline*/}
              <p className='w-9/12 mx-auto text-gray-500 text-base font-normal'>
                お客様のビジネスに最適な Google Workspace エディションをお選びいただけます。Gemini for Workspace を追加すると、文書作成、画像作成、データ整理、有意義なコミュニケーションなど、さまざまなサポート機能をご利用いただけます。
              </p >

              {/*tagline*/}
              <p className='w-9/12 mx-auto text-gray-500 text-xl mt-4 font-normal'>
                すべてのプランに含まれるサービス
              </p >

              {/*Product Link Card*/}
              <div className='w-11/12 mx-auto mt-12'>
                <ProductIconCards />
              </div>


              {/*work as margin */}
              <div className='h-16 '></div>

              {/* product price and details cards */}

              <ProductPriceAndDetails />


              {/*work as margin */}
              <div className='h-16 '></div>

              {/*tagline*/}
              <p className=' mx-auto text-gray-500 text-base font-normal'>
                Business Starter、Business Standard、Business Plus プランのご購入で、最大 300 ユーザーまでご利用いただけます。Enterprise の各プランにユーザー数の上限、下限はありません。
                <br /><br />
                Google Workspace をお使いのお客様には、追加機能をプロモーション期間限定でご利用いただける場合があります。
                <br /><br />
                Google Workspace では、組織内で共有できる柔軟なストレージ プールが各ユーザーに提供されます。組織のストレージを追加する方法について詳しくは、ヘルプセンターをご確認ください。
              </p >

              {/*work as margin */}
              <div className='h-16 '></div>

              {/*solgan*/}
              <div className=' space-y-5 '>
                <p className=' w-5/6 leading-tight font-normal text-5xl mx-auto'>
                  あらゆる働き方に対応する柔軟で便利なビジネス向けコラボレーション
                </p>
              </div>

              {/*work as margin */}
              <div className='h-12 '></div>

              {/*ToggleImagePanel*/}

              <ToggleImagePanel />

              {/*solgan*/}
              <div className=' space-y-5 mt-10 '>
                <p className=' w-5/6 leading-tight font-normal text-5xl mx-auto'>
                  ビジネスを合理化する主な機能
                </p>
              </div>


              {/*ToggleImagePanel mirror*/}
              <div className=' h-24'></div>
              <ToggleImagePanelMirror />

              {/* Carousel  */}
              <div className=' h-24'></div>
              <Carousel />



              {/*solgan*/}
              <div className=' h-16'></div>
              <div className=' space-y-5 bg-gray-50 py-20 rounded-xl relative w-[120%] left-[-10%]'>
                <img src="src\assets\svg\logo-workspace-apps.svg" alt="logo-workspace-apps" className='h-9 mx-auto' />
                <p className=' w-4/6 leading-tight font-base text-5xl mx-auto'>
                  チームの規模を問わず <br />「つながり、つくり、協力する」<br /> を実現
                </p>

                <Link to='/'>
                  <button className='w-[160px] h-12 bg-blue-500 rounded-md text-white font-medium font-sans text-sm hover:bg-blue-800 transition duration-200 mt-5'>
                    無料試用を開始
                  </button>
                </Link>
              </div>

              {/* space */}



            </div>{/*固定的版心 */}

          </div>{/*固定的版心 */}

        </div>{/*固定的版心 */}

        {/* footer */}
        <FooterWorkSpaceLike />


      </div>
    </>
  );
}
