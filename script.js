// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.borderBottomColor = window.scrollY > 30 ? '#e2e8f0' : 'transparent';
});

// 移动端导航菜单
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
        }
    });
});

// 能力进度条动画
const abilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ability-fill').forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
            abilityObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const abilitiesSection = document.querySelector('.abilities-section');
if (abilitiesSection) abilityObserver.observe(abilitiesSection);

// 滚动淡入动画
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-card, .ability-card, .eval-card, .edu-card, .profile-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// visible class
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// 时间线标记动画
const markerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1.2)';
            setTimeout(() => { entry.target.style.transform = 'scale(1)'; }, 300);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.timeline-marker').forEach(el => {
    el.style.transition = 'transform 0.3s ease';
    markerObserver.observe(el);
});

console.log('🎨 孙学文作品集网站已加载完成！');