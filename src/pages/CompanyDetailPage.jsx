import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// 模拟公司详情数据
const COMPANY_DETAIL_DATA = [
  {
    id: 1,
    name: "科技创新有限公司",
    logo: "icon-rocket",
    industry: "互联网",
    employees: "500-1000人",
    founded: "2015年",
    location: "北京市海淀区中关村科技园区",
    introduction: "科技创新有限公司成立于2015年，是一家专注于人工智能和大数据技术研发的高科技企业。公司致力于为企业提供智能化解决方案，帮助传统企业实现数字化转型。",
    culture: "公司秉持开放、创新、协作的企业文化，鼓励员工勇于探索新技术和新方法，为客户创造价值的同时实现个人成长。",
    benefits: ["五险一金", "年终奖", "弹性工作", "定期团建", "技术培训", "晋升空间"],
    featuredJobs: [
      { id: 1, title: "前端开发工程师", salary: "25K-35K", location: "北京" },
      { id: 2, title: "后端开发工程师", salary: "30K-40K", location: "北京" },
      { id: 3, title: "数据分析师", salary: "20K-30K", location: "北京" }
    ]
  },
  {
    id: 2,
    name: "互联网科技有限公司",
    logo: "icon-globe",
    industry: "软件服务",
    employees: "1000-5000人",
    founded: "2010年",
    location: "上海市浦东新区张江高科技园区",
    introduction: "互联网科技有限公司是一家全球领先的软件服务提供商，专注于企业级应用开发和云计算服务。公司拥有一支高素质的技术团队，为客户提供全方位的技术支持和解决方案。",
    culture: "我们倡导'客户至上、诚信为本、创新为魂'的企业文化，不断提升服务质量和技术水平，为客户创造更大价值。",
    benefits: ["五险一金", "绩效奖金", "带薪年假", "补充医疗保险", "员工旅游", "股票期权"],
    featuredJobs: [
      { id: 4, title: "产品经理", salary: "20K-30K", location: "上海" },
      { id: 5, title: "UI/UX设计师", salary: "18K-25K", location: "上海" },
      { id: 6, title: "测试工程师", salary: "15K-25K", location: "上海" }
    ]
  },
  {
    id: 3,
    name: "云计算服务有限公司",
    logo: "icon-cloud",
    industry: "云计算",
    employees: "100-500人",
    founded: "2018年",
    location: "深圳市南山区科技园",
    introduction: "云计算服务有限公司是一家新兴的云计算服务提供商，专注于云基础设施建设和云安全服务。公司拥有自主研发的云计算平台，为客户提供稳定、安全、高效的云服务。",
    culture: "我们坚持'技术创新、服务至上'的理念，努力打造行业领先的云计算服务平台，为客户的业务发展提供强大支持。",
    benefits: ["五险一金", "项目奖金", "餐补交通补", "定期体检", "健身房", "下午茶"],
    featuredJobs: [
      { id: 7, title: "云架构师", salary: "35K-50K", location: "深圳" },
      { id: 8, title: "DevOps工程师", salary: "25K-35K", location: "深圳" },
      { id: 9, title: "网络安全工程师", salary: "20K-30K", location: "深圳" }
    ]
  }
];

const CompanyDetailPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟API请求延迟
    const timer = setTimeout(() => {
      const companyData = COMPANY_DETAIL_DATA.find(c => c.id === parseInt(id));
      if (companyData) {
        setCompany(companyData);
      } else {
        console.error('未找到该公司');
      }
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">正在加载公司信息...</h2>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">未找到该公司</h2>
          <Link to="/companies" className="text-blue-600 hover:text-blue-800">
            返回公司列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 返回按钮 */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/companies" className="text-blue-600 hover:text-blue-800 flex items-center">
          <span className="icon-angle-left mr-1"></span> 返回公司列表
        </Link>
      </div>

      {/* 公司头部信息 */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* 公司logo */}
            <div className="text-6xl text-blue-600 p-4 bg-blue-50 rounded-lg">
              <span className={`icon-${company.logo}`}></span>
            </div>
            
            {/* 公司基本信息 */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{company.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <span className="icon-building mr-1"></span> {company.industry}
                </div>
                <div className="flex items-center">
                  <span className="icon-users mr-1"></span> {company.employees}
                </div>
                <div className="flex items-center">
                  <span className="icon-calendar mr-1"></span> {company.founded}成立
                </div>
                <div className="flex items-center">
                  <span className="icon-map-marker mr-1"></span> {company.location}
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Link to={`/company/${company.id}/jobs`} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  查看所有职位
                </Link>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                  关注公司
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容区域 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 左侧：公司介绍 */}
            <div className="lg:w-2/3">
              {/* 公司简介 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">公司简介</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {company.introduction}
                </p>
              </div>

              {/* 企业文化 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">企业文化</h2>
                <p className="text-gray-600 leading-relaxed">
                  {company.culture}
                </p>
              </div>

              {/* 福利待遇 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">福利待遇</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {company.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-md">
                      <span className="icon-check-circle text-green-500 mr-2"></span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧：热门职位 */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">热门职位</h2>
                <div className="space-y-4">
                  {company.featuredJobs.map(job => (
                    <div key={job.id} className="p-4 border border-gray-200 rounded-md hover:border-blue-300 transition-colors">
                      <h3 className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                        <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-blue-600 font-medium">{job.salary}</span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <span className="icon-map-marker mr-1"></span> {job.location}
                        </span>
                      </div>
                      <Link 
                        to={`/jobs/${job.id}`} 
                        className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-800"
                      >
                        查看详情 <span className="icon-angle-right ml-1"></span>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    to={`/company/${company.id}/jobs`} 
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                  >
                    查看所有职位 <span className="icon-angle-right ml-1"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetailPage;