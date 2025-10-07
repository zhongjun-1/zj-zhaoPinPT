import React from 'react';
import { Link } from 'react-router-dom';

// 指南数据
const GUIDE_DATA = [
  {
    id: 1,
    title: "如何准备技术面试",
    content: "技术面试是求职过程中的重要环节，本文将为您提供全面的技术面试准备指南，帮助您在面试中脱颖而出。"
  },
  {
    id: 2,
    title: "简历撰写技巧",
    content: "一份优秀的简历是获得面试机会的关键。本文将分享简历撰写的专业技巧，让您的简历在众多应聘者中脱颖而出。"
  },
  {
    id: 3,
    title: "薪资谈判指南",
    content: "薪资谈判是求职过程的最后一步，也是最关键的一步。本文将为您提供薪资谈判的实用技巧和策略。"
  }
];

const GuidesPage = () => {
  // 在实际应用中，这些数据会从API获取
  const guides = GUIDE_DATA;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 求职者指南 */}
      <section id="guides" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              <span className="icon-book mr-2"></span>求职者指南
            </h2>
            <Link to="/guides" className="text-blue-600 hover:text-blue-800 transition-colors">
              更多指南 <span className="icon-angle-right ml-1"></span>
            </Link>
          </div>
          
          {/* 指南列表 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map(guide => (
              <div 
                key={guide.id} 
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4">{guide.content}</p>
                <Link 
                  to={`/guide/${guide.id}`} 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  阅读全文 <span className="icon-angle-right ml-1"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;