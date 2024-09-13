# 哔文绘
提供简单的js，让网页可以展示b站小黄脸表情

### 如何使用
很简单 你只需要引用js即可食用：

（注意，建议直接在本地使用！）

``<script src="bim2.js"></script>``

查看/em/bim2.json输入对应的字符

输入 span 或 i 元素 即可，这是例子：

``<span class="bmoji bim">:笑哭</span>``

``<i class="kucoin bim">:flat_icon</i>``

当然，你也可以输入这些class值为表情调整对齐方式：

`` .bim-t, .bim-b, .bim-m, .bim-s ``

t 为居上 b 为 基线 m 为 居底 s 为 sub

bim 默认为 居中

### 效果展示
![Screenshot_2024-09-11-21-48-41-955_com microsoft emmx-edit](https://github.com/user-attachments/assets/d4fb9f34-ce6b-4e86-8ce6-0f69eb9f97d1)

### 关于项目

此项目的表情图片来自

[walinejs/emojis](https://github.com/walinejs/emojis)

由第一个提交b站小黄脸的PR的的仓库，由于未按照walinejs标准所以没有通过，本项目删除了不必要的表情，因为能用到展示的并不多也不是很多人会用这个表情

### 版权

你也可以fork此项目进行调整，因为这没什么技术，部分代码由AI协助，我们只是提供便利的使用