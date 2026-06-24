# dsy-chat

基于大语言模型的智能对话应用，支持流式响应、多模型切换、文件上传与代码高亮。

## 技术栈

- **框架**: Vue 3 + Vite
- **UI 库**: Element Plus
- **状态管理**: Pinia + 持久化
- **路由**: Vue Router
- **Markdown**: markdown-it + highlight.js
- **样式**: SCSS

## 功能

- 多模型支持（DeepSeek-R1 / V3、Qwen、GLM 等）
- 流式 / 非流式响应切换
- 代码块语法高亮 + 一键复制
- 文件上传（图片 / 文档）
- 对话管理（新建 / 编辑标题）
- 搜索对话框（`Ctrl + K`）
- 模型参数可调（Temperature、Top-P、Top-K、Max Tokens）
- 本地持久化配置

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 使用

1. 点击「开始对话」进入聊天页
2. 打开设置面板，填入 [SiliconFlow API Key](https://cloud.siliconflow.cn/account/ak)
3. 选择模型，开始对话

## 项目结构

```
src/
├── assets/
│   ├── photo/          # 图标资源
│   └── styles/         # 全局样式与变量
├── components/         # 组件
│   ├── ChatInput.vue   # 聊天输入框
│   ├── ChatMessage.vue # 消息气泡
│   ├── DialogEdit.vue  # 编辑对话框
│   ├── PopupMenu.vue   # 对话列表弹出菜单
│   ├── SearchDialog.vue# 搜索 / 快速对话
│   └── SettingsPanel.vue# 设置面板
├── router/             # 路由配置
├── stores/             # Pinia 状态管理
├── utils/              # API 请求 & 工具函数
├── views/
│   ├── HomePage.vue    # 首页
│   └── ChatView.vue    # 聊天页
├── App.vue
└── main.js
```
