//ProductPriceAndDetails.jsx
import { Link } from 'react-router-dom';


//smaple ,data formate
//样本，照以下格式填充内容即可。宽度建议1200px以上
const productDetails = [
  {
    priceLevel: "Business Starter",
    price: "680",
    buttonContent: "無料試用を開始",
    buttonLink: "/",
    details: [
      "✔️ セキュリティ保護されたカスタムのビジネス用メール",
      "✔️ 100 人まで参加可能なビデオ会議",
      "✔️ 30 GB pooled storage per user",
      "✔️ セキュリティと管理機能",
    ],
  },
  {
    isPopular: true,//添加这个属性会渲染高亮模式，顶端出现人气商品字样
    priceLevel: "Business Standard",
    price: "1,360",
    buttonContent: "無料試用を開始",
    buttonLink: "/",
    details: [
      "✔️ セキュリティ保護されたカスタムのビジネス用メール",
      "✔️ 100 人まで参加可能なビデオ会議",
      "✔️ 30 GB pooled storage per user",
      "✔️ セキュリティと管理機能",
      "✔️ スタンダード サポート（エンハンスト サポートに有料でアップグレード可能）",
    ],
  },
  {
    priceLevel: "Business Plus",
    price: "2,040",
    buttonContent: "無料試用を開始",
    buttonLink: "/",
    details: [
      "✔️ セキュリティ保護されたカスタムのビジネス用メール",
      "✔️ 100 人まで参加可能なビデオ会議",
      "✔️ 30 GB pooled storage per user",
      "✔️ セキュリティと管理機能",
      "✔️ スタンダード サポート（エンハンスト サポートに有料でアップグレード可能）",
      "✔️ 高度なセキュリティと管理機能（Vault や高度なエンドポイント管理など）",
      "✔️ スタンダード サポート（エンハンスト サポートに有料でアップグレード可能）",
    ],
  },
  {
    priceLevel: "Enterprise",
    price: "680",
    buttonContent: "無料試用を開始",
    buttonLink: "/",
    details: [
      "✔️ セキュリティ保護されたカスタムのビジネス用メール",
      "✔️ 100 人まで参加可能なビデオ会議",
      "✔️ 30 GB pooled storage per user",
      "✔️ セキュリティと管理機能",
      "✔️ スタンダード サポート（エンハンスト サポートに有料でアップグレード可能）",
      "✔️ 高度なセキュリティと管理機能（Vault や高度なエンドポイント管理など）",
      "✔️ スタンダード サポート（エンハンスト サポートに有料でアップグレード可能）",
      "✔️ エンハンスト サポート（プレミアム サポートに有料でアップグレード可能）",
    ],
  },


];



export default function ProductPriceAndDetails() {
  return (
    // 卡片栏的框架
    <>
      <div className='  flex flex-wrap justify-between gap-y-4  '>
        {productDetails.map((product, index) => (
          <div key={index} className='flex '>

            <div>
              {product.isPopular &&
                <div className='h-[34px] -mt-[34px] bg-blue-100 text-blue-500 flex items-center justify-center py-auto rounded-t-lg'>
                  最も人気のアイテム
                </div>}

              <div
                className={`w-72 h-[956px] px-[14px] py-10 rounded-b-lg ${product.isPopular ? 'border-blue-500' : 'border-gray-300'
                  } border`}>
                <div className='flex flex-col h-[220px] justify-between'>
                  <div className='text-3xl whitespace-nowrap'>{product.priceLevel}</div>
                  <div className='text-4xl'>
                    ¥{product.price}
                    <span className='text-sm ml-1'>JPY</span>
                  </div>
                  <div className='text-gray-400 text-sm'>
                    <div>ユーザー 1 人あたりの月額</div>
                    <div>（1 年契約の場合）</div>
                  </div>

                  {product.isPopular ?
                    <Link to={product.buttonLink} className='mb-6' >
                      <button className='w-[154px] h-11 bg-blue-500 rounded-md text-white font-medium font-sans text-sm hover:bg-blue-800 transition duration-200'>
                        {product.buttonContent}
                      </button>
                    </Link>
                    :
                    <Link to={product.buttonLink} className='mb-6' >
                      <button className='w-[154px] h-12  border-gray-300 border rounded-md text-blue-600 font-medium font-sans text-sm hover:bg-gray-100 hover:border-blue-600 transition duration-200'>
                        {product.buttonContent}
                      </button>
                    </Link>
                  }
                </div>
                <hr />
                <div className='pt-6 text-left'>
                  {product.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className='mb-3'>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
