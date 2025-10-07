import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  
  // 最新消息数据
  const latestNews = [
    {
      id: 1,
      title: "2024年Q3招聘季开启，技术岗位需求激增",
      date: "2024-09-15"
    },
    {
      id: 2,
      title: "平台新增500+优质企业，提供更多就业机会",
      date: "2024-09-10"
    },
    {
      id: 3,
      title: "线上招聘会即将开始，预约即可参与",
      date: "2024-09-05"
    }
  ];
  
  // 紧急招聘岗位数据
  const urgentJobs = [
    {
      id: 1,
      title: "高级前端开发工程师",
      company: "科技有限公司",
      salary: "30K-50K",
      location: "北京"
    },
    {
      id: 2,
      title: "数据分析师",
      company: "金融科技公司",
      salary: "25K-40K",
      location: "上海"
    },
    {
      id: 3,
      title: "产品经理",
      company: "互联网巨头",
      salary: "35K-55K",
      location: "深圳"
    }
  ];
  
  const handleSearch = (e) => {
    e.preventDefault();
    // 在实际应用中，这里会处理搜索逻辑
    if (searchKeyword.trim()) {
      console.log('搜索关键词:', searchKeyword);
      alert(`正在搜索：${searchKeyword}，请稍候...`);
      // 在实际应用中可以添加路由跳转到搜索结果页面
    } else {
      alert('请输入搜索关键词');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 职位搜索区域 */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              找到理想的工作，开启职业新篇章
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              浏览数千个优质职位，连接顶尖雇主
            </p>
            
            {/* 搜索表单 */}
            <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <span className="icon-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></span>
                  <input
                    type="text"
                    placeholder="搜索职位、公司或关键词"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  <span className="icon-search mr-2"></span>搜索职位
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* 最新消息区域 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">最新消息</h2>
            <Link 
              to="/news" 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              查看全部 <span className="icon-angle-right ml-1"></span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map(news => (
              <div key={news.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-gray-500 text-sm">发布时间: {news.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 紧急招聘岗位区域 */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              <span className="inline-block bg-red-600 text-white px-2 py-1 rounded mr-2 text-sm">紧急</span>
              热门岗位
            </h2>
            <Link to="/jobs" className="text-blue-600 hover:text-blue-800 flex items-center">
              查看全部 <span className="icon-angle-right ml-1"></span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {urgentJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{job.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{job.salary}</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{job.location}</span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">紧急招聘</span>
                </div>
                <Link 
                  to={`/jobs/${job.id}`} 
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
                >
                  查看详情
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;