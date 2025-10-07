import React from 'react';
import { Link } from 'react-router-dom';

// 公司数据
const COMPANY_DATA = [
  {
    id: 1,
    name: "科技创新有限公司",
    logo: "<span className='icon-rocket'></span>",
    industry: "互联网",
    employees: "500-1000人"
  },
  {
    id: 2,
    name: "互联网科技有限公司",
    logo: "<span className='icon-globe'></span>",
    industry: "软件服务",
    employees: "1000-5000人"
  },
  {
    id: 3,
    name: "云计算服务有限公司",
    logo: "<span className='icon-cloud'></span>",
    industry: "云计算",
    employees: "100-500人"
  },
  {
    id: 4,
    name: "数字创意设计有限公司",
    logo: "<span className='icon-paint-brush'></span>",
    industry: "设计",
    employees: "50-100人"
  }
];

const CompaniesPage = () => {
  // 在实际应用中，这些数据会从API获取
  const companies = COMPANY_DATA;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 热门公司 */}
      <section id="companies" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              <span className="icon-building mr-2"></span>热门公司
            </h2>
            <Link to="/companies" className="text-blue-600 hover:text-blue-800 transition-colors">
              查看更多 <span className="icon-angle-right ml-1"></span>
            </Link>
          </div>
          
          {/* 公司列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map(company => (
              <div 
                key={company.id} 
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4 text-center">
                  <span className={`icon-${company.logo.includes('rocket') ? 'rocket' : company.logo.includes('globe') ? 'globe' : company.logo.includes('cloud') ? 'cloud' : 'paint-brush'}`}></span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>
                <div className="text-center text-gray-500 text-sm">
                  <p className="mb-1">{company.industry}</p>
                  <p>{company.employees}</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <Link 
                  to={`/company/${company.id}`} 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  查看详情 <span className="icon-angle-right ml-1"></span>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;