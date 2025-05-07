# 贡献指南

感谢您对 Web3 前端面试题库的关注！这个项目旨在创建一个高质量的开源资源，帮助开发者准备 Web3 前端面试。

## 如何贡献

1. Fork 这个仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-question`)
3. 在 `content/questions` 目录中添加或修改面试题
4. 提交您的更改 (`git commit -m 'Add some amazing question'`)
5. 推送到分支 (`git push origin feature/amazing-question`)
6. 提交 Pull Request

## 面试题格式

每个面试题应该是一个独立的 Markdown 文件，包含以下前置元数据：

---

title: '问题标题'
date: 'YYYY-MM-DD'
tags: ['相关标签']

---

问题内容和答案...

## 质量标准

问题应该清晰、具体，并与 Web3 相关
答案应该准确、全面，并附有示例代码（如适用）
复杂概念应该尽可能简化解释
如有引用，请注明来源

## 本地开发

确保你的环境满足以下要求：

Node.js 18+
npm 或 yarn 或 pnpm
安装依赖并启动开发服务器：

```bash
pnpm install
pnpm run dev
```

## Pull Request 流程

1. 确保你的 PR 只关注一个主题（如添加一个新问题或修复特定问题）
2. PR 标题应该清晰描述你所做的更改
3. 如果你的 PR 解决了一个 Issue，请在 PR 描述中引用该 Issue
4. 所有测试必须通过才能合并 PR

感谢您的贡献！
