// ========== 导航栏 ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.borderBottomColor = window.scrollY > 30 ? '#e2e8f0' : 'transparent';
    // 页面进度条
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// 移动端
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

// ========== 鼠标跟随彩色光晕 ==========
const glow = document.createElement('div');
glow.className = 'mouse-glow';
document.body.appendChild(glow);
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
function animateGlow() {
    glow.style.transform = `translate(${mouseX - 150}px, ${mouseY - 150}px)`;
    requestAnimationFrame(animateGlow);
}
animateGlow();

// ========== 数字滚动动画 ==========
function animateNumbers() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();
        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            countObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
const statsArea = document.querySelector('.achievement-grid');
if (statsArea) countObserver.observe(statsArea);

// ========== 能力进度条 ==========
const abilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ability-fill').forEach(bar => {
                bar.style.width = bar.getAttribute('data-progress') + '%';
            });
            abilityObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
const abilitiesSection = document.querySelector('.abilities-section');
if (abilitiesSection) abilityObserver.observe(abilitiesSection);

// ========== 滚动淡入 ==========
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

// 添加 visible 样式
const fadeStyle = document.createElement('style');
fadeStyle.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(fadeStyle);

// ========== 卡片 3D 倾斜 ==========
document.querySelectorAll('.ability-card, .eval-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        this.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========== 打字机效果（个人简介区） ==========
const typeTarget = document.querySelector('.profile-desc');
if (typeTarget) {
    // 存原文，隐藏，然后逐字显示
    const fullText = typeTarget.textContent.trim();
    typeTarget.textContent = '';
    typeTarget.style.minHeight = typeTarget.offsetHeight + 'px';
    let charIndex = 0;
    const typeObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const timer = setInterval(() => {
                if (charIndex < fullText.length) {
                    typeTarget.textContent += fullText[charIndex];
                    charIndex++;
                } else {
                    clearInterval(timer);
                    typeTarget.style.borderRight = 'none';
                }
            }, 40);
            typeObserver.unobserve(typeTarget);
        }
    }, { threshold: 0.6 });
    typeTarget.style.borderRight = '2px solid var(--primary)';
    typeObserver.observe(typeTarget);
}

// ========== 时间线动画增强 ==========
document.querySelectorAll('.timeline-marker').forEach(el => {
    el.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});
const markerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1.3)';
            entry.target.style.boxShadow = '0 0 0 8px rgba(99,102,241,0.15)';
            setTimeout(() => {
                entry.target.style.transform = 'scale(1)';
                entry.target.style.boxShadow = entry.target.classList.contains('active')
                    ? '0 0 0 4px rgba(99,102,241,0.2)' : 'none';
            }, 400);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('.timeline-marker').forEach(el => markerObserver.observe(el));

console.log('✨ 孙学文作品集 - 交互动效已加载！');