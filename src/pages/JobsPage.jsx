import React from 'react';
import { Link } from 'react-router-dom';

// 职位数据
const JOB_DATA = [
  {
    id: 1,
    title: "前端开发工程师",
    company: "科技创新有限公司",
    location: "北京",
    type: "全职",
    salary: "25K-35K",
    date: "2天前",
    tags: ["React", "Vue", "JavaScript"]
  },
  {
    id: 2,
    title: "产品经理",
    company: "互联网科技有限公司",
    location: "上海",
    type: "全职",
    salary: "20K-30K",
    date: "3天前",
    tags: ["产品设计", "用户研究", "需求分析"]
  },
  {
    id: 3,
    title: "后端开发工程师",
    company: "云计算服务有限公司",
    location: "深圳",
    type: "全职",
    salary: "30K-40K",
    date: "1周前",
    tags: ["Java", "Spring", "MySQL"]
  },
  {
    id: 4,
    title: "UI/UX设计师",
    company: "数字创意设计有限公司",
    location: "广州",
    type: "全职",
    salary: "18K-25K",
    date: "5天前",
    tags: ["Figma", "Adobe XD", "原型设计"]
  }
];

const JobsPage = () => {
  // 在实际应用中，这些数据会从API获取
  const jobs = JOB_DATA;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 热门职位展示 */}
      <section id="jobs" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              <span className="icon-briefcase mr-2"></span>热门职位
            </h2>
            <Link to="/jobs" className="text-blue-600 hover:text-blue-800 transition-colors">
              查看更多 <span className="icon-angle-right ml-1"></span>
            </Link>
          </div>
          
          {/* 职位列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobs.map(job => (
              <div 
                key={job.id} 
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <span className="text-sm text-gray-500">{job.date}</span>
                </div>
                <p className="text-gray-600 font-medium mb-3">{job.company}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="icon-map-marker mr-1"></span> {job.location}
                  <span className="mx-2">•</span>
                  <span className="icon-clock-o mr-1"></span> {job.type}
                </div>
                <p className="text-blue-600 font-bold mb-4">{job.salary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => alert(`您已申请${job.title}职位！`)} 
                  className="w-full py-2 text-center bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
                >
                  立即申请
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;