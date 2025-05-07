---
title: "你都使用过哪些Wagmi的hook"
date: "2025-05-06"
tags: ["Wagmi", "Hooks", "web3"]
---

# Wagmi Hooks 使用经验

## 核心连接 Hooks

1. **`useConnect`**

   - 连接钱包
   - 获取可用连接器列表
   - 处理连接状态和错误

2. **`useDisconnect`**

   - 断开钱包连接
   - 清理会话状态

3. **`useAccount`**

   - 获取当前连接账户信息
   - 监听账户变化
   - 检查连接状态

4. **`useNetwork`**

   - 获取当前网络信息
   - 监测网络变化
   - 检查支持的网络

5. **`useSwitchNetwork`**
   - 切换网络功能
   - 处理网络切换错误

## 合约交互 Hooks

1. **`useContractRead`**

   - 读取合约状态
   - 自动重新获取数据

2. **`useContractWrite`**

   - 执行合约写入操作
   - 处理交易状态

3. **`usePrepareContractWrite`**

   - 预先验证合约写入操作
   - 获取 gas 估算

4. **`useContractEvent`**
   - 监听合约事件
   - 处理事件回调

## 交易 Hooks

1. **`useTransaction`**

   - 获取交易详情

2. **`useSendTransaction`**

   - 发送原生代币交易

3. **`usePrepareSendTransaction`**

   - 预先验证交易参数

4. **`useWaitForTransaction`**
   - 等待交易完成
   - 处理交易确认

## 签名 Hooks

1. **`useSignMessage`**

   - 签名消息
   - 处理签名结果

2. **`useSignTypedData`**
   - 签名 EIP-712 类型化数据

## 余额和代币 Hooks

1. **`useBalance`**

   - 获取原生代币余额
   - 自动刷新余额

2. **`useToken`**

   - 获取 ERC20 代币信息

3. **`useTokenBalance`**
   - 获取 ERC20 代币余额

## 其他实用 Hooks

1. **`useEnsName`/`useEnsAddress`**

   - ENS 名称解析

2. **`useBlockNumber`**

   - 获取当前区块高度

3. **`useFeeData`**

   - 获取当前 gas 费用信息

4. **`useChainId`**
   - 获取当前链 ID

注：我的使用经验基于 Wagmi v1.x 版本，具体 hook 可能随着版本更新有所变化。
