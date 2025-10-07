import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// 模拟职位详情数据
const JOB_DETAIL_DATA = [
  {
    id: 1,
    title: "高级前端开发工程师",
    company: "科技有限公司",
    logo: "<span className='icon-rocket'></span>",
    location: "北京",
    type: "全职",
    salary: "30K-50K",
    date: "2024-09-15",
    tags: ["React", "Vue", "JavaScript", "TypeScript"],
    description: "负责公司前端产品的开发和维护，优化用户体验，与产品和后端团队紧密配合，参与技术选型和架构设计。",
    requirements: [
      "3年以上前端开发经验，熟悉React、Vue等主流框架",
      "熟悉前端工程化和性能优化",
      "良好的沟通能力和团队协作精神",
      "有大型项目经验者优先"
    ],
    benefits: ["五险一金", "年终奖", "弹性工作", "定期团建", "技术培训"]
  },
  {
    id: 2,
    title: "数据分析师",
    company: "金融科技公司",
    logo: "<span className='icon-bar-chart'></span>",
    location: "上海",
    type: "全职",
    salary: "25K-40K",
    date: "2024-09-10",
    tags: ["数据分析", "SQL", "Python", "Tableau"],
    description: "负责公司业务数据的分析和挖掘，提供数据支持和决策建议，制作数据报表和可视化图表。",
    requirements: [
      "本科以上学历，统计学、数学、计算机相关专业",
      "熟悉SQL、Python等数据分析工具",
      "良好的逻辑思维和数据分析能力",
      "有金融行业经验者优先"
    ],
    benefits: ["五险一金", "绩效奖金", "带薪年假", "补充医疗保险"]
  },
  {
    id: 3,
    title: "产品经理",
    company: "互联网巨头",
    logo: "<span className='icon-cube'></span>",
    location: "深圳",
    type: "全职",
    salary: "35K-55K",
    date: "2024-09-05",
    tags: ["产品设计", "用户研究", "需求分析", "项目管理"],
    description: "负责产品的规划和设计，制定产品路线图，协调研发、设计、运营等团队，推动产品落地和迭代。",
    requirements: [
      "3年以上互联网产品经理经验",
      "优秀的产品思维和用户体验意识",
      "良好的沟通协调和项目管理能力",
      "有成功产品经验者优先"
    ],
    benefits: ["五险一金", "股票期权", "带薪年假", "健身房"]
  }
];

const JobDetailPage = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // 在实际应用中，这里会从API获取数据
    const job = JOB_DETAIL_DATA.find(j => j.id === parseInt(id));
    if (job) {
      setJobDetail(job);
    } else {
      // 如果没有找到对应ID的职位，可以显示404页面
      console.error('未找到该职位');
    }
  }, [id]);

  const handleApply = () => {
    setIsSubmitting(true);
    // 模拟提交申请的过程
    setTimeout(() => {
      alert(`您已成功申请${jobDetail?.title}职位！我们会尽快与您联系。`);
      setIsSubmitting(false);
    }, 1000);
  };

  if (!jobDetail) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">正在加载职位信息...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link to="/jobs" className="text-blue-600 hover:text-blue-800 flex items-center">
            <span className="icon-angle-left mr-1"></span> 返回职位列表
          </Link>
        </div>

        {/* 职位基本信息 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{jobDetail.title}</h1>
              <p className="text-xl text-blue-600 font-medium">{jobDetail.company}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-blue-600 mb-1">{jobDetail.salary}</p>
              <p className="text-gray-500">发布于 {jobDetail.date}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="icon-map-marker mr-1"></span> {jobDetail.location}
            </div>
            <div className="flex items-center">
              <span className="icon-clock-o mr-1"></span> {jobDetail.type}
            </div>
            <div className="flex flex-wrap gap-2 ml-auto">
              {jobDetail.tags.map((tag, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧：职位描述和要求 */}
          <div className="lg:w-2/3">
            {/* 职位描述 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">职位描述</h2>
              <p className="text-gray-600 leading-relaxed">{jobDetail.description}</p>
            </div>

            {/* 职位要求 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">职位要求</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {jobDetail.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* 公司福利 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">公司福利</h2>
              <div className="flex flex-wrap gap-2">
                {jobDetail.benefits.map((benefit, index) => (
                  <span key={index} className="bg-green-50 text-green-700 px-3 py-2 rounded">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧：申请按钮和公司信息 */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">立即申请</h2>
              <button 
                onClick={handleApply} 
                disabled={isSubmitting}
                className={`w-full py-3 text-center text-white rounded-md transition-colors ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {isSubmitting ? '提交中...' : '投递简历'}
              </button>
              <p className="text-gray-500 text-sm mt-4">
                申请后，招聘方将在3个工作日内查看您的简历
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">关于公司</h3>
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 text-blue-600">
                    <span className="icon-building"></span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{jobDetail.company}</p>
                    <p className="text-sm text-gray-500">科技行业</p>
                  </div>
                </div>
                <Link to="/companies" className="text-blue-600 hover:text-blue-800 text-sm">
                  查看公司详情 <span className="icon-angle-right ml-1"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;