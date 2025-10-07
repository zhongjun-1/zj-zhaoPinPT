import React from 'react';

function JobsSection({ filteredJobs }) {
  return (
    <section id="jobs" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            <span className="icon-briefcase mr-2"></span>热门职位
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
            查看更多 <span className="icon-angle-right ml-1"></span>
          </a>
        </div>
        
        {/* 职位列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredJobs.map(job => (
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
              <button className="w-full py-2 text-center bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
                立即申请
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobsSection;