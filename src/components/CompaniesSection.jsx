import React from 'react';

function CompaniesSection({ companyData }) {
  return (
    <section id="companies" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            <span className="icon-building mr-2"></span>热门公司
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
            查看更多 <span className="icon-angle-right ml-1"></span>
          </a>
        </div>
        
        {/* 公司列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.map(company => (
            <div 
              key={company.id} 
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow group"
            >
              <div className="text-4xl mb-4 text-center">{company.logo}</div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-blue-600 transition-colors">
                {company.name}
              </h3>
              <div className="text-center text-gray-500 text-sm">
                <p className="mb-1">{company.industry}</p>
                <p>{company.employees}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  查看职位 <span className="icon-angle-right ml-1"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompaniesSection;