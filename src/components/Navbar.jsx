import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="icon-briefcase text-2xl"></span>
          <span className="text-xl font-bold text-blue-600">招聘平台</span>
        </div>
        
        {/* 桌面端菜单 */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">首页</Link>
          <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">职位</Link>
          <Link to="/companies" className="text-gray-700 hover:text-blue-600 transition-colors">公司</Link>
          <Link to="/guides" className="text-gray-700 hover:text-blue-600 transition-colors">求职指南</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">关于我们</Link>
        </div>
        
        {/* 用户按钮 - 根据登录状态显示不同内容 */}
        <div className="hidden md:flex items-center space-x-4">
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {/* 用户头像 */}
                <img 
                  src={currentUser.avatar} 
                  alt="用户头像" 
                  className="w-10 h-10 rounded-full border-2 border-blue-200"
                />
                {/* 用户名称 */}
                <span className="text-gray-700">{currentUser.username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                登出
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                登录
              </Link>
              <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                注册
              </Link>
            </>
          )}
        </div>
        
        {/* 移动端菜单按钮 */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="菜单"
        >
          <span className="icon-bars text-xl"></span>
        </button>
      </div>
      
      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link to="/" className="py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>首页</Link>
            <Link to="/jobs" className="py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>职位</Link>
            <Link to="/companies" className="py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>公司</Link>
            <Link to="/guides" className="py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>求职指南</Link>
            <Link to="/about" className="py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>关于我们</Link>
            <div className="flex flex-col space-y-3 py-2">
              {currentUser ? (
                <>
                  <div className="flex items-center justify-center space-x-3 py-2 text-center text-gray-700">
                    {/* 移动端用户头像 */}
                    <img 
                      src={currentUser.avatar} 
                      alt="用户头像" 
                      className="w-8 h-8 rounded-full border-2 border-blue-200"
                    />
                    <span>欢迎, {currentUser.username}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    登出
                  </button>
                </>
              ) : (
                <div className="flex space-x-3">
                  <Link to="/login" className="flex-1 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    登录
                  </Link>
                  <Link to="/register" className="flex-1 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    注册
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;