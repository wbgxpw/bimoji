document.addEventListener('DOMContentLoaded', function() {
    // 获取当前脚本的 URL 前缀
    const scriptElements = document.getElementsByTagName('script');
    let scriptUrl = '';

    for (let i = 0; i < scriptElements.length; i++) {
        const src = scriptElements[i].getAttribute('src');
        if (src && src.includes('bim.js')) { // 假设这个JS文件名是 bim.js
            scriptUrl = src.split('/').slice(0, -1).join('/');
            break;
        }
    }

    // 拼接完整的 JSON 请求 URL
    fetch(`${scriptUrl}/em/bim2.json`)
        .then(response => response.json())
        .then(data => {
            // 遍历 JSON 对象中的每一个键
            Object.keys(data).forEach(key => {
                const keyData = data[key];
                const path = keyData.path;
                const bimt = keyData.bimt;
                const bims = keyData.bims;

                // 确保数据项是对象，并且有值
                if (typeof keyData === 'object' && keyData !== null) {
                    // 选择所有带有 class 中包含 bim 的 span 或 i 元素
                    document.querySelectorAll(`span.${key}, i.${key}`).forEach(element => {
                        const elementText = element.textContent.trim();
                        // 检查文本是否在 bimt 数组中
                        const index = bimt.indexOf(elementText);
                        if (index !== -1) {
                            const bimi = bims[index];
                            const alignmentClass = {
                                'bim': 'middle',
                                'bim-t': 'top',
                                'bim-b': 'baseline',
                                'bim-m': 'bottom',
                                'bim-s': 'sub'
                            }[Array.from(element.classList).find(cls => cls.startsWith('bim'))] || '';

                            // 拼接完整的图片 URL
                            const bimg = `${scriptUrl}${path}${bimi}.png`;

                            // 更新元素的 HTML
                            element.innerHTML = `<img src="${bimg}" alt="${elementText}" style="max-width:1.2em;height:auto;vertical-align:${alignmentClass};"/>`;
                        }
                    });
                }
            });
        })
        .catch(error => console.error('Error loading emoticon data:', error));
});
