// 导航栏交互效果
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

// 卡片点击效果
document.querySelectorAll('.culture-card, .selection-item').forEach(card => {
    card.addEventListener('click', function() {
        console.log('Navigating to:', this.querySelector('h3')?.textContent || this.querySelector('h4')?.textContent);
        // 后续可添加实际跳转逻辑
    });
});