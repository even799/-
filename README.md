# 个人作品集网站

一个现代化、创意型的个人作品集网站，适合求职展示使用。

## 特性

✨ **现代设计**
- 渐变色彩搭配
- 流畅的动画效果
- 响应式设计，支持移动端

🎯 **完整功能**
- 个人简介展示
- 技能特长可视化
- 项目作品展示
- 联系表单

🚀 **交互体验**
- 平滑滚动
- 悬停效果
- 视差滚动
- 鼠标跟随动画

## 文件结构

```
portfolio/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 如何使用

### 1. 打开网站
直接在浏览器中打开 `index.html` 文件即可查看。

### 2. 自定义内容

**个人信息**（在 `index.html` 中修改）：
- 第 24 行：修改姓名
- 第 26 行：修改职位描述
- 第 70-72 行：修改个人简介
- 第 75-87 行：修改统计数据

**技能特长**（第 100-165 行）：
- 修改技能类别
- 更新技术标签
- 调整熟练度（`data-progress` 属性）

**项目作品**（第 176-261 行）：
- 添加项目名称和描述
- 更新技术栈标签
- 填写项目链接

**联系方式**（第 276-285 行）：
- 修改邮箱地址
- 修改电话号码
- 修改所在城市

**社交媒体链接**（第 287-310 行）：
- 更新 GitHub 链接
- 更新 LinkedIn 链接
- 更新其他社交媒体

### 3. 自定义样式

在 `style.css` 的 `:root` 部分修改配色方案：

```css
:root {
    --primary-color: #6366f1;      /* 主色调 */
    --secondary-color: #8b5cf6;    /* 次要色 */
    --accent-color: #ec4899;       /* 强调色 */
}
```

### 4. 添加项目图片

将项目截图替换 `project-placeholder` div：

```html
<!-- 原来的占位符 -->
<div class="project-placeholder">项目 1</div>

<!-- 替换为实际图片 -->
<img src="your-image.jpg" alt="项目名称" style="width: 100%; height: 100%; object-fit: cover;">
```

### 5. 添加个人照片

在"关于我"部分添加真实照片：

```html
<!-- 在第 60 行附近替换 SVG 占位符 -->
<img src="your-photo.jpg" alt="个人照片" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;">
```

## 部署建议

### 本地预览
直接用浏览器打开 `index.html` 文件

### 在线部署

**方式 1: GitHub Pages**
1. 创建 GitHub 仓库
2. 上传所有文件
3. 在仓库设置中启用 GitHub Pages
4. 访问 `https://your-username.github.io/repository-name`

**方式 2: Netlify**
1. 注册 Netlify 账号
2. 拖拽文件夹到 Netlify
3. 获得免费的 HTTPS 域名

**方式 3: Vercel**
1. 注册 Vercel 账号
2. 导入 GitHub 仓库或上传文件
3. 自动部署并获得域名

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, Animation)
- Vanilla JavaScript (ES6+)
- 无需任何框架或构建工具

## 性能优化建议

1. **图片优化**：使用 WebP 格式，压缩图片大小
2. **字体优化**：考虑使用系统字体或 CDN 加载 Web 字体
3. **代码压缩**：部署前压缩 CSS 和 JS 文件
4. **CDN 加速**：将静态资源托管到 CDN

## 自定义建议

### 添加更多动画
在 `style.css` 中添加更多 `@keyframes` 动画

### 集成后端
使用以下服务处理联系表单：
- Formspree
- EmailJS
- Google Forms

### 添加分析
集成 Google Analytics 追踪访问数据

### 添加更多页面
创建独立的项目详情页面

## 常见问题

**Q: 如何更改配色？**
A: 修改 `style.css` 中的 CSS 变量（`:root` 部分）

**Q: 如何添加更多项目？**
A: 复制 `.project-card` div 结构并修改内容

**Q: 如何让表单真正发送邮件？**
A: 集成 Formspree 或 EmailJS 等服务，或添加后端 API

**Q: 如何优化移动端显示？**
A: 已包含响应式设计，可在 `@media` 查询中进一步调整

## 许可

此模板可自由使用和修改，用于个人或商业项目。

## 支持

如有问题或建议，欢迎反馈！

---

**祝你求职顺利！🎉**