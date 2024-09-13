document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/em/bim2.json', true);  // 修改路径以适应你的文件位置
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // 成功获取数据
            var data = JSON.parse(xhr.responseText);

            // 遍历 JSON 对象中的每一个键
            Object.keys(data).forEach(function(key) {
                var keyData = data[key];
                var path = keyData.path;
                var bimt = keyData.bimt;
                var bims = keyData.bims;

                // 确保数据项是对象，并且有值
                if (typeof keyData === 'object' && keyData !== null) {
                    // 选择所有带有 class 中包含 bim 的 span 或 i 元素
                    document.querySelectorAll('span.' + key + ', i.' + key).forEach(function(element) {
                        var elementText = element.textContent.trim();
                        // 检查文本是否在 bimt 数组中
                        var index = bimt.indexOf(elementText);
                        if (index !== -1) {
                            var bimi = bims[index];
                            var alignmentClass = {
                                'bim': 'middle',
                                'bim-t': 'top',
                                'bim-b': 'baseline',
                                'bim-m': 'bottom',
                                'bim-s': 'sub'
                            }[Array.from(element.classList).find(function(cls) { return cls.startsWith('bim'); })] || '';

                            // 生成图片 URL
                            var bimg = path + bimi + '.png';

                            // 更新元素的 HTML
                            element.innerHTML = '<img src="' + bimg + '" alt="' + elementText + '" style="max-width:1.2em;height:auto;vertical-align:' + alignmentClass + ';"/>';
                        }
                    });
                }
            });
        } else {
            console.error('Failed to load data:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error('Request error');
    };
    xhr.send();
});
