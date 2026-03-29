// 移动端导航栏折叠功能
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 导航栏激活效果和移动端菜单收起
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // 仅对 href="#"的链接阻止默认行为
        if (href === '#') {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        } else {
            // 有效页面跳转，不阻止默认行为
            if (navToggle && navMenu && window.innerWidth <= 768) {
                setTimeout(() => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }, 300);
            }
        }
    });
});

// 搜索功能实现
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

if (searchInput && searchBtn) {
    function handleSearch() {
        const keyword = searchInput.value.trim();
        if (!keyword) return;
        
        const searchParams = new URLSearchParams({
            q: keyword
        });
        
        window.location.href = `resource-library.html?${searchParams.toString()}`;
    }
    
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// 英雄卡片入场动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.hero-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
});

// 分类卡片动画
document.querySelectorAll('.category-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
});
