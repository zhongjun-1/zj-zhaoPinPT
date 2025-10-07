import React from 'react';

function GuidesSection({ guideData }) {
  return (
    <section id="guides" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            <span className="icon-book mr-2"></span>求职者指南
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
            更多指南 <span className="icon-angle-right ml-1"></span>
          </a>
        </div>
        
        {/* 指南列表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guideData.map(guide => (
            <div 
              key={guide.id} 
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow group"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {guide.title}
              </h3>
              <p className="text-gray-600 mb-4">{guide.content}</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                阅读全文 <span className="icon-angle-right ml-1"></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuidesSection;