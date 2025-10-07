import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // 简单的表单验证
    if (!email || !password) {
      setError('请填写所有必填字段');
      setIsLoading(false);
      return;
    }

    // 模拟登录请求
      setTimeout(() => {
        // 在实际应用中，这里应该是一个API请求
        // 从localStorage中获取用户列表
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        
        // 检查用户是否存在且密码正确
        const user = existingUsers.find(user => user.email === email && user.password === password);
        
        if (user) {
          // 登录成功，使用AuthProvider的login方法
          const success = login({ email });
          if (success) {
            navigate('/');
          }
        } else {
          setError('邮箱或密码错误');
        }
        setIsLoading(false);
      }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">用户登录</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                邮箱
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入您的邮箱"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                密码
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入您的密码"
                required
              />
              <div className="mt-2 text-right">
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 text-sm">
                  忘记密码？
                </Link>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '登录中...' : '登录'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-gray-600">还没有账号？</span>
            <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
              立即注册
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;