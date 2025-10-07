import React from 'react';

function HomeSection({ searchKeyword, setSearchKeyword, handleSearch }) {
  return (
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
  );
}

export default HomeSection;