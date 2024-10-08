// 创建 appbar 容器
const appbar = document.createElement('div');
appbar.className = 'mdui-appbar mdui-appbar-fixed mdui-shadow-0'; // 设置 appbar 类

// 创建选项卡容器
const tabContainer = document.createElement('div');
tabContainer.className = 'mdui-tab mdui-tab-centered mdui-theme-layout-dark';
tabContainer.setAttribute('mdui-tab', '');

// 获取当前页面的路径
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

// 定义所有的链接和对应的标签
const links = [
    { href: 'index.html', text: '主页' },
    { href: 'start.html', text: '食用文档' },
    { href: 'search.html', text: '搜索表情' },
    { href: 'about.html', text: '关于' }
];

// 逐个添加链接
links.forEach(link => {
    const a = document.createElement('a');
    a.className = 'mdui-ripple mdui-ripple-white'; // 设置链接样式
    a.textContent = link.text;  // 文本
    a.href = link.href;  // 链接地址

    // 禁用当前页面的点击
    if (link.href === currentPath || (link.href === 'index.html' && (currentPath === '/' || currentPath === ''))) {
        a.classList.add('mdui-tab-active');  // 添加活动类
        a.style.pointerEvents = 'none';  // 禁用点击
    }

    // 添加到选项卡中
    tabContainer.appendChild(a);
});

// 将选项卡添加到 appbar
appbar.appendChild(tabContainer);

// 获取 .mdui-container 元素
const mduiContainer = document.querySelector('.mdui-container');

// 如果存在 .mdui-container，插入 appbar 到其上方
if (mduiContainer) {
    mduiContainer.insertAdjacentElement('beforebegin', appbar); // 在 .mdui-container 之前插入 appbar
} else {
    document.body.appendChild(appbar); // 如果没有，默认添加到 <body>
}

// 所有链接的点击事件处理
const allLinks = document.querySelectorAll('a'); // 选择所有链接

allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // 阻止默认的跳转行为
        event.preventDefault();

        // 延迟跳转
        setTimeout(() => {
            window.location.replace(link.href); // 无感跳转到链接
        }, 500);  // 0.5秒延迟
    });
});

// 创建 footer 元素
const footer = document.createElement('footer');
footer.classList.add('mdui-theme-layout-dark');
footer.innerHTML = `
    <p>Powered by <a href="https://www.mdui.org/docs/" target="_blank">MDUI</a><br>
    Copyright 2024 <a href="https://abin.pw" target="_blank">阿巴In</a></p>
`;

// 将 footer 元素插入到 body 的上方
document.body.appendChild(footer);

// 复制代码功能
document.getElementById('copyDiv').addEventListener('click', function() {
    const codeText = this.querySelector('code').textContent;

    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = codeText;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextarea);

    mdui.snackbar({
        message: '代码已复制到剪贴板',
        timeout: 2000,
        position: 'right-bottom' // 设置提示在右下角
    });
});

// 图片懒加载
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
});
