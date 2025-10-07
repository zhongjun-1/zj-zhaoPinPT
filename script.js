// 移动端菜单切换
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // 减去导航栏高度
                behavior: 'smooth'
            });
            
            // 如果是移动端，点击后关闭菜单
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// 导航栏滚动效果
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.add('py-2', 'shadow-lg');
        header.classList.remove('py-3', 'shadow-md');
    } else {
        header.classList.add('py-3', 'shadow-md');
        header.classList.remove('py-2', 'shadow-lg');
    }
    
    lastScrollTop = scrollTop;
});

// 职位卡片悬停效果增强
const jobCards = document.querySelectorAll('.job-card-hover');

jobCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // 可以添加更多交互效果
    });
    
    card.addEventListener('mouseleave', () => {
        // 可以添加更多交互效果
    });
});

// 表单提交事件
const searchForm = document.querySelector('section:nth-child(2) form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // 这里可以添加搜索逻辑
        alert('搜索功能即将上线！');
    });
}

// 页面加载完成后的动画效果
window.addEventListener('load', () => {
    // 可以添加页面加载动画
    document.body.classList.add('loaded');
});