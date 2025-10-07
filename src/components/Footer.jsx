import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="icon-briefcase text-xl"></span>
              <span className="text-lg font-bold">招聘平台</span>
            </div>
            <p className="text-gray-400 mb-4">
              连接人才与雇主的专业招聘服务平台，致力于为求职者和企业提供优质的招聘服务。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="icon-facebook"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="icon-twitter"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="icon-linkedin"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="icon-instagram"></span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#jobs" className="text-gray-400 hover:text-white transition-colors">职位</a></li>
              <li><a href="#companies" className="text-gray-400 hover:text-white transition-colors">公司</a></li>
              <li><a href="#guides" className="text-gray-400 hover:text-white transition-colors">求职指南</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">支持</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">意见反馈</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="icon-map-marker mt-1 mr-2"></span>
                <span>北京市朝阳区建国路88号</span>
              </li>
              <li className="flex items-center">
                <span className="icon-phone mr-2"></span>
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="icon-envelope mr-2"></span>
                <span>contact@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 招聘平台. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;