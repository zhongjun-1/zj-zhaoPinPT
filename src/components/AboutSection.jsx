import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            关于我们
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们致力于连接优质雇主与人才，提供最全面的招聘服务平台
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 服务特点 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl text-blue-600 mb-4">
              <span className="icon-bullhorn"></span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">海量职位</h3>
            <p className="text-gray-600">
              我们汇聚了数千个优质职位，涵盖各个行业和领域，满足不同求职者的需求。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl text-blue-600 mb-4">
              <span className="icon-handshake-o"></span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">优质雇主</h3>
            <p className="text-gray-600">
              我们与众多知名企业建立了合作关系，为求职者提供与顶尖雇主接触的机会。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl text-blue-600 mb-4">
              <span className="icon-comments"></span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">专业服务</h3>
            <p className="text-gray-600">
              我们提供专业的求职指导和建议，帮助求职者提高竞争力，顺利找到理想工作。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;