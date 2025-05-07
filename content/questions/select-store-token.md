---
title: "使用Next.js开发的Dapp应用，使用钱包登陆以后，后端返回token应该存在哪里"
date: "2025-05-06"
tags: ["Next.js"]
---

# Next.js Dapp 应用中钱包登录后的 Token 存储方案

## 客户端存储选项

1. **localStorage**

   - **适用场景**：客户端组件中
   - **优点**：简单实现，持久化存储
   - **缺点**：仅浏览器端可用，不安全，XSS 风险

2. **Cookie**

   - **适用场景**：需要在客户端/服务端共享的场景
   - **优点**：可设置 HttpOnly 提高安全性
   - **缺点**：每次请求都会发送，大小限制

3. **内存状态管理**
   - **工具**：React Context、Zustand、Redux 等
   - **优点**：访问快速，适合会话期间使用
   - **缺点**：页面刷新后丢失

## 最佳实践

### 推荐方案

- **短期 Token**：使用 HttpOnly Cookie 存储

  - 防 XSS 攻击
  - 服务端可访问
  - 可设置适当过期时间

- **长期会话**：结合使用
  1. 短期访问 Token 存 Cookie（HttpOnly）
  2. 刷新 Token 存储在更安全的机制中

### 实现考虑

- 客户端组件中使用"use client"
- 考虑使用 Next.js 的 middleware 进行 token 验证
- 实现自动刷新 token 机制

### 注意事项

- 避免在 localStorage 中存储敏感 token
- 考虑使用加密技术增强安全性
- 实现适当的 token 过期和刷新逻辑
