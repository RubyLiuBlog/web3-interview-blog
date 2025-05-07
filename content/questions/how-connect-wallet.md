---
title: "如何在 React 应用中实现钱包连接功能？"
date: "2023-08-05"
tags: ["React", "钱包连接", "ethers.js"]
---

## 概述

在 Web3 应用中，连接用户钱包是与区块链交互的第一步。本文介绍如何在 React 应用中实现钱包连接功能。

## 使用 ethers.js

```typescript
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const ConnectWallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);

  // 检查是否已安装 MetaMask
  useEffect(() => {
    const checkMetaMask = () => {
      if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask 已安装!");
      } else {
        console.log("请安装 MetaMask!");
      }
    };

    checkMetaMask();
  }, []);

  // 连接钱包
  const connectWallet = async () => {
    try {
      // 请求用户授权
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // 创建 ethers provider
      const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

      setAccount(accounts[0]);
      setProvider(ethersProvider);

      console.log("钱包连接成功:", accounts[0]);
    } catch (error) {
      console.error("连接钱包时出错:", error);
    }
  };

  return (
    <div>
      {account ? (
        <div>
          <p>已连接钱包: {account}</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          连接钱包
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
```

## 处理账户切换和网络变化

MetaMask 提供了事件监听器，可以监听账户和网络的变化：

```typescript
useEffect(() => {
  if (window.ethereum) {
    // 监听账户变化
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      setAccount(accounts[0] || null);
    });

    // 监听链ID变化
    window.ethereum.on("chainChanged", (chainId: string) => {
      // 处理链ID变化，通常需要刷新页面
      window.location.reload();
    });
  }

  return () => {
    // 清理监听器
    if (window.ethereum) {
      window.ethereum.removeListener("accountsChanged", () => {});
      window.ethereum.removeListener("chainChanged", () => {});
    }
  };
}, []);
```

## 最佳实践

1. 总是检查浏览器环境是否支持以太坊提供程序
2. 处理连接错误并向用户提供反馈
3. 使用状态管理库（如 Redux 或 Context API）在应用程序中共享钱包状态
4. 考虑支持多种钱包（MetaMask、WalletConnect 等）
5. 实现网络检测，确保用户连接到正确的网络
