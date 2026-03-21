// 移动端导航栏折叠功能
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
    
    // 点击导航项后自动收起菜单
    navMenu.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('show');
        });
    });
}

// 导航栏激活效果
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // 如果是空链接，阻止默认行为并只切换激活状态
        if (href === '#') {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        }
        // 如果是有效链接，允许正常跳转，不阻止默认行为
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

// 卡片点击效果
document.querySelectorAll('.content-card, .learning-item').forEach(card => {
    card.addEventListener('click', function() {
        console.log('Selected:', this.textContent.trim());
        // 后续可添加实际跳转逻辑或弹窗显示详细内容
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