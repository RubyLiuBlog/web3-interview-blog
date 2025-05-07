# Web3 前端面试题库

![GitHub stars](https://img.shields.io/github/stars/RubyLiuBlog/web3-interview-blog)
![GitHub forks](https://img.shields.io/github/forks/RubyLiuBlog/web3-interview-blog)
![GitHub issues](https://img.shields.io/github/issues/RubyLiuBlog/web3-interview-blog)

这是一个开源的 Web3 前端开发面试题库，旨在帮助开发者准备面试和提升技术能力。

## 特点

- 高质量的 Web3 前端面试题集合
- 详细的解答和示例代码
- 由社区共同维护和更新
- 使用 Next.js 的 App Router 和 SSG 功能构建，性能优异
- 使用 TypeScript 确保类型安全

## 内容类别

- 区块链基础知识
- 以太坊和智能合约
- Web3.js Ethers.js 和 Wagmi
- Next.js 与 Web3 集成
- DApp 开发最佳实践
- Web3 安全注意事项

## 如何贡献

我们欢迎并鼓励社区贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解如何参与。

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/RubyLiuBlog/web3-interview-blog.git
cd web3-interview-blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 技术栈

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- Markdown 处理

## 目录结构

```bash
web3-interview-blog/
├── content/                # 存放 Markdown 文件
│   └── questions/          # 按类别存放面试题
├── src/                    # 源代码目录
│   ├── app/                # App Router 页面
│   │   ├── page.tsx        # 首页
│   │   ├── layout.tsx      # 根布局
│   │   └── questions/      # 问题详情页路由
│   │       └── [id]/
│   │           └── page.tsx
│   ├── components/         # React 组件
│   ├── lib/                # 工具函数
│   └── types/              # TypeScript 类型定义
├── public/                 # 静态资源
└── next.config.js          # Next.js 配置
```

## 许可证

MIT
