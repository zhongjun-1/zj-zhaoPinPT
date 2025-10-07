import React, { createContext, useState, useEffect, useContext } from 'react';

// 创建认证上下文
const AuthContext = createContext();

// 认证提供者组件
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 在组件挂载时检查用户登录状态
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        // 从localStorage获取用户信息
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.isLoggedIn) {
            // 如果用户没有头像，为其生成一个
            if (!user.avatar) {
              const username = user.email.split('@')[0];
              const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=random`;
              user.avatar = avatarUrl;
              user.username = username;
              localStorage.setItem('user', JSON.stringify(user));
            }
            setCurrentUser(user);
          }
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // 登录方法
  const login = (userData) => {
    try {
      // 提取邮箱前缀作为用户名（用于生成头像）
      const username = userData.email.split('@')[0];
      // 生成头像URL（使用ui-avatars.com服务）
      const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=random`;
      
      const user = { 
        ...userData, 
        isLoggedIn: true, 
        avatar: avatarUrl,
        username: username
      };
      
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  };

  // 登出方法
  const logout = () => {
    try {
      localStorage.removeItem('user');
      setCurrentUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // 注册方法（这里只是保存用户信息，实际注册逻辑在RegisterPage中）
  const register = (userData) => {
    try {
      // 在实际应用中，这里应该调用API进行注册
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // 提取邮箱前缀作为用户名
      const username = userData.email.split('@')[0];
      
      // 保存用户信息时包含用户名
      existingUsers.push({ ...userData, username });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      return true;
    } catch (error) {
      console.error('Error during registration:', error);
      return false;
    }
  };

  // 检查用户是否已登录
  const isAuthenticated = () => {
    return !!currentUser && currentUser.isLoggedIn;
  };

  // 上下文值
  const value = {
    currentUser,
    isAuthenticated,
    login,
    logout,
    register,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// 自定义Hook，方便组件使用认证上下文
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};