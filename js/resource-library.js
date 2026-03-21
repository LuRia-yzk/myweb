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

// 分类导航滚动定位
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.category-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// 监听滚动，自动高亮当前分类
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.category-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 下载按钮交互效果
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // 模拟下载提示
        const packageName = this.closest('.download-package').querySelector('h3').textContent;
        alert(`准备下载：${packageName}\n\n实际项目中将触发文件下载功能`);
    });
});