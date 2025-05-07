---
title: "ethers.js 和 web3.js 有什么区别？"
date: "2023-08-10"
tags: ["ethers.js", "web3.js", "工具库"]
---

## 概述

ethers.js 和 web3.js 都是用于与以太坊区块链交互的 JavaScript 库，它们各有特点，本文将对它们进行比较。

## 设计理念

- **web3.js**：以太坊基金会维护的官方 JavaScript 库，设计更为全面和传统
- **ethers.js**：由 Richard Moore 开发，设计更为现代，代码体积更小，API 更易用

## 关键区别

### 1. 体积和依赖

- **web3.js**：体积较大，依赖较多
- **ethers.js**：体积更小，依赖更少，更适合前端应用

### 2. API 设计

- **web3.js**：API 设计更接近以太坊 RPC 规范，更为底层
- **ethers.js**：API 设计更为现代和直观，对开发者更友好

### 3. 钱包和私钥管理

- **web3.js**：需要额外配置来处理私钥管理
- **ethers.js**：内置更友好的钱包和私钥管理功能

### 4. ENS(以太坊域名服务)支持

- **web3.js**：需要额外配置来支持 ENS
- **ethers.js**：原生支持 ENS

## 代码对比

### Provider 创建

**web3.js**:

```javascript
import Web3 from "web3";

// 使用 HTTP 提供者
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_KEY");

// 使用 MetaMask
const web3 = new Web3(window.ethereum);
```

**ethers.js**:

```javascript
import { ethers } from "ethers";

// 使用 HTTP 提供者
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/YOUR_INFURA_KEY"
);

// 使用 MetaMask
const provider = new ethers.providers.Web3Provider(window.ethereum);
```

## 合约交互

**web3.js**:

```js
const contract = new web3.eth.Contract(abi, contractAddress);
const result = await contract.methods.someFunction().call();
const tx = await contract.methods
  .someWriteFunction()
  .send({ from: userAddress });
```

**ethers.js**:

```js
const contract = new ethers.Contract(contractAddress, abi, provider);
const result = await contract.someFunction();
const tx = await contract.connect(signer).someWriteFunction();
```

选择建议

- 如果你是以太坊开发的新手，ethers.js 可能更易于学习
- 如果你需要一个轻量级的解决方案，ethers.js 是更好的选择
- 如果你需要更全面的功能和长期的社区支持，web3.js 可能更适合
- 在现代 Web3 前端开发中，ethers.js 正变得越来越流行
