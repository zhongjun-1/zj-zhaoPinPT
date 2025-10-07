import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 关于我们 */}
      <section id="about" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              <span className="icon-info-circle mr-2"></span>关于我们
            </h2>
            <p className="text-gray-600 mb-6">
              我们是一家专注于连接人才与优质雇主的招聘平台，致力于为求职者提供更多职业发展机会，
              为企业提供高质量的人才解决方案。
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex-1 min-w-[120px]">
                <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                <p className="text-gray-600">合作企业</p>
              </div>
              <div className="flex-1 min-w-[120px]">
                <div className="text-3xl font-bold text-blue-600 mb-2">10000+</div>
                <p className="text-gray-600">优质职位</p>
              </div>
              <div className="flex-1 min-w-[120px]">
                <div className="text-3xl font-bold text-blue-600 mb-2">100万+</div>
                <p className="text-gray-600">注册用户</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;