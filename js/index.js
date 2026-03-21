// 移动端导航栏折叠功能
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
}

// 导航栏激活效果和移动端菜单收起
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // 如果是空链接，阻止默认行为并只切换激活状态
        if (href === '#') {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // 移动端关闭菜单
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('show');
            }
        } else {
            // 如果是有效链接（如 .html 文件），允许正常跳转
            // 移动端延迟收起菜单，确保跳转动画可见
            if (navToggle && navMenu && window.innerWidth <= 768) {
                setTimeout(() => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('show');
                }, 300);
            }
        }
    });
});
