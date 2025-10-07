import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StorageViewerPage = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // 从localStorage读取用户数据
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const storedCurrentUser = JSON.parse(localStorage.getItem('user') || 'null');
    
    setUsers(storedUsers);
    setCurrentUser(storedCurrentUser);
  }, []);

  const clearAllData = () => {
    if (window.confirm('确定要清除所有用户数据吗？此操作不可恢复。')) {
      localStorage.removeItem('users');
      localStorage.removeItem('user');
      setUsers([]);
      setCurrentUser(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">用户数据查看器</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">localStorage 数据位置说明</h3>
            <p className="text-gray-700 mb-4">
              注册的用户信息保存在浏览器的 <strong>localStorage</strong> 中，这是浏览器提供的本地存储功能。
              具体来说：
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>所有注册用户信息保存在键名为 <code className="bg-gray-100 px-1 rounded">'users'</code> 的数组中</li>
              <li>当前登录用户信息保存在键名为 <code className="bg-gray-100 px-1 rounded">'user'</code> 的对象中</li>
              <li>这些数据仅保存在您的本地浏览器中，不会发送到服务器</li>
            </ul>
            
            <div className="p-4 bg-blue-50 rounded-md mb-4">
              <h4 className="font-semibold text-blue-700 mb-2">如何在浏览器中查看：</h4>
              <ol className="list-decimal pl-6 text-gray-700">
                <li>按 F12 打开开发者工具</li>
                <li>切换到 "Application" 或 "存储" 标签页</li>
                <li>在左侧导航中选择 "Local Storage" &gt; "http://localhost:5173"</li>
                <li>在右侧可以看到所有存储的键值对</li>
              </ol>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">当前存储的用户数据</h3>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">注册用户列表 (users):</h4>
              {users.length > 0 ? (
                <div className="bg-gray-50 p-4 rounded-md overflow-auto max-h-60">
                  {users.map((user, index) => (
                    <div key={index} className="mb-2 pb-2 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                      <p><strong>邮箱:</strong> {user.email}</p>
                      <p><strong>密码:</strong> {user.password}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">暂无注册用户</p>
              )}
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">当前登录用户 (user):</h4>
              {currentUser ? (
                <div className="bg-gray-50 p-4 rounded-md">
                  <p><strong>邮箱:</strong> {currentUser.email}</p>
                  <p><strong>登录状态:</strong> {currentUser.isLoggedIn ? '已登录' : '未登录'}</p>
                </div>
              ) : (
                <p className="text-gray-500">当前没有登录用户</p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={clearAllData}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              清除所有数据
            </button>
            <Link
              to="/"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageViewerPage;