import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 模拟新闻数据
const NEWS_DATA = [
  {
    id: 1,
    title: "2024年Q3招聘季开启，技术岗位需求激增",
    date: "2024-09-15",
    category: "招聘动态",
    imageUrl: "https://via.placeholder.com/800x400?text=招聘季开启",
    excerpt: "随着第三季度的到来，各大科技公司纷纷开启新一轮招聘计划，技术岗位需求持续增长，尤其是人工智能、云计算等热门领域。"
  },
  {
    id: 2,
    title: "平台新增500+优质企业，提供更多就业机会",
    date: "2024-09-10",
    category: "平台公告",
    imageUrl: "https://via.placeholder.com/800x400?text=新增企业",
    excerpt: "我们很高兴地宣布，本月平台新增500+优质企业入驻，涵盖互联网、金融、教育等多个行业，为求职者提供更多元化的就业选择。"
  },
  {
    id: 3,
    title: "线上招聘会即将开始，预约即可参与",
    date: "2024-09-05",
    category: "活动通知",
    imageUrl: "https://via.placeholder.com/800x400?text=线上招聘会",
    excerpt: "2024年秋季线上招聘会将于9月20日正式开始，超过100家知名企业参与，提供5000+优质岗位，提前预约可获得专属求职指导。"
  },
  {
    id: 4,
    title: "2024年最受欢迎技能排行榜发布",
    date: "2024-08-28",
    category: "行业分析",
    imageUrl: "https://via.placeholder.com/800x400?text=技能排行榜",
    excerpt: "根据平台数据分析，2024年最受欢迎的技能依次为人工智能、云计算、大数据分析、前端开发和产品管理，掌握这些技能的求职者更受企业青睐。"
  },
  {
    id: 5,
    title: "平台推出简历优化服务，提升求职成功率",
    date: "2024-08-20",
    category: "平台公告",
    imageUrl: "https://via.placeholder.com/800x400?text=简历优化",
    excerpt: "为帮助求职者提高简历质量，我们推出了专业的简历优化服务，由资深HR和行业专家提供一对一指导，帮助您的简历在众多应聘者中脱颖而出。"
  },
  {
    id: 6,
    title: "远程工作成为新常态，这些技能你需要掌握",
    date: "2024-08-15",
    category: "职业发展",
    imageUrl: "https://via.placeholder.com/800x400?text=远程工作",
    excerpt: "随着远程工作模式的普及，除了专业技能外，沟通能力、时间管理、自我驱动力等软技能变得越来越重要，本文将为您详细解析远程工作必备技能。"
  }
];

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟API请求延迟
    const timer = setTimeout(() => {
      setNews(NEWS_DATA);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // 过滤新闻
  const filteredNews = selectedCategory === '全部' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  // 获取所有分类
  const categories = ['全部', ...Array.from(new Set(news.map(item => item.category)))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="icon-newspaper-o mr-2"></span>最新动态
          </h1>
          <p className="text-gray-600 mt-2">获取最新的招聘资讯、行业动态和求职技巧</p>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* 分类筛选 */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 加载状态 */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(item => (
                <div key={item} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                  <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : (
            /* 新闻列表 */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* 新闻图片 */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* 新闻内容 */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Link 
                      to={`/news/${item.id}`} 
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`查看《${item.title}》的详细内容！`);
                      }}
                    >
                      阅读全文 <span className="icon-angle-right ml-1"></span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 空状态 */}
          {!isLoading && filteredNews.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <div className="text-5xl text-gray-300 mb-4">
                <span className="icon-file-text-o"></span>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">暂无相关新闻</h3>
              <p className="text-gray-500">请尝试选择其他分类或稍后再来查看</p>
            </div>
          )}

          {/* 分页控件 - 模拟 */}
          {!isLoading && filteredNews.length > 0 && (
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center gap-1">
                <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-500 disabled:opacity-50" disabled>
                  <span className="icon-angle-left"></span>
                </button>
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white">1</button>
                <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  <span className="icon-angle-right"></span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;