---
title: "JS 数组去重有哪些方式"
date: "2025-05-06"
tags: ["JavaScript"]
---

### **JavaScript 数组去重方法总结**

#### **1. 使用 `Set`（ES6 最简单方式）**

```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)]; // [1, 2, 3, 4]
```

- **优点**：代码简洁，性能较好。
- **缺点**：无法处理对象引用去重（`Set` 认为 `{} !== {}`）。

#### **2. `filter` + `indexOf`（ES5 兼容）**

```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
```

- **优点**：兼容旧浏览器。
- **缺点**：时间复杂度 O(n²)，性能较差（大数组不推荐）。

#### **3. `reduce` 去重**

```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = arr.reduce(
  (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
  []
);
```

- **优点**：灵活，可结合复杂逻辑。
- **缺点**：每次迭代创建新数组（性能一般）。

#### **4. 对象键值去重（适用于基本类型）**

```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = Object.keys(
  arr.reduce((acc, cur) => ((acc[cur] = true), acc), {})
).map(Number); // 注意：键会被转为字符串
```

- **优点**：一次遍历，性能较好。
- **缺点**：仅适用于可转为字符串的值（如数字、字符串）。

#### **5. 对象数组去重（按属性）**

```javascript
const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
const uniqueArr = arr.filter(
  (item, index, self) => index === self.findIndex((obj) => obj.id === item.id)
);
```

- **适用场景**：根据对象某个属性（如 `id`）去重。
- **缺点**：`findIndex` 嵌套导致性能较差（大数组慎用）。

#### **6. `Map` 去重（支持对象引用）**

```javascript
const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
const map = new Map();
arr.forEach((item) => map.set(item.id, item)); // 按 id 去重
const uniqueArr = [...map.values()];
```

- **优点**：高性能，支持复杂对象。

---

### **性能对比（大数组优先选 `Set` 或 `Map`）**

| 方法               | 时间复杂度 | 适用场景           |
| ------------------ | ---------- | ------------------ |
| `Set`              | O(n)       | 基本类型去重       |
| `Map`              | O(n)       | 对象按属性去重     |
| `filter`+`indexOf` | O(n²)      | 小数组或兼容性场景 |

**推荐选择**：

- **简单数组** → `[...new Set(arr)]`
- **对象数组** → `Map` 或 `reduce` + 属性判断
- **兼容旧环境** → `filter` + `indexOf`
