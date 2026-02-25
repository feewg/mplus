# Chapter 3: Regression and Path Analysis

## 3.1 概述

回归分析是建模观察变量之间关系的标准方法。路径分析允许同时建模多个相关的回归关系，其中一个变量在一个关系中可以是因变量，在另一个关系中可以是自变量（中介变量）。

### 支持的因变量类型

| 变量类型 | 回归模型 |
|---------|---------|
| 连续变量 | 线性回归 |
| 删失变量 | 删失正态回归（Tobit），可选膨胀 |
| 二元/有序分类 | Probit 或 Logistic 回归（比例优势） |
| 无序分类 | 多项 Logistic 回归 |
| 计数变量 | Poisson 回归，可选零膨胀 |

### 可用的特殊功能

- 单组或多组分析
- 缺失数据处理
- 复杂调查数据
- 随机斜率
- 线性和非线性参数约束
- 间接效应（包括特定路径）
- 所有结果类型的最大似然估计
- Bootstrap 标准误和置信区间
- Wald 卡方参数相等性检验

---

## 3.2 回归分析示例

### 示例 3.1：线性回归

```mplus
TITLE: Linear regression with continuous dependent variable
DATA: FILE IS ex3.1.dat;
VARIABLE: NAMES ARE y1-y6 x1-x4;
          USEVARIABLES ARE y1 x1 x3;
MODEL: y1 ON x1 x3;
```

**要点**：
- 默认估计量：最大似然（ML）
- `ON` 语句描述 y1 对 x1 和 x3 的线性回归
- 无需指定 x 变量的均值、方差和协方差（作为模型条件）

### 示例 3.2：删失回归

```mplus
VARIABLE: CENSORED ARE y1 (b);
ANALYSIS: ESTIMATOR = MLR;
MODEL: y1 ON x1 x3;
```

**CENSORED 选项参数**：
- `b`：从下方删失（下限效应，floor effect）
- `a`：从上方删失（上限效应，ceiling effect）
- `bi`：从下方删失 + 膨胀模型
- `ai`：从上方删失 + 膨胀模型

默认估计量：稳健加权最小二乘（WLSMV）  
指定 `ESTIMATOR=MLR` 使用最大似然 + 稳健标准误

### 示例 3.3：删失膨胀回归

```mplus
VARIABLE: CENSORED ARE y1 (bi);
MODEL: y1 ON x1 x3;      ! 连续部分的删失回归
        y1#1 ON x1 x3;    ! 二元膨胀变量的Logistic回归
```

**说明**：同时估计两个回归：
1. 连续部分的删失回归（能取 censored point 以上值的个体）
2. 二元膨胀变量的 Logistic 回归（无法取 censored point 以上值的概率）

膨胀变量命名：`变量名#1`

### 示例 3.4：Probit 回归

```mplus
VARIABLE: CATEGORICAL = u1;
MODEL: u1 ON x1 x3;
```

**说明**：
- 适用于二元或有序分类因变量
- 默认估计量：稳健加权最小二乘（WLSMV）
- 程序自动确定类别数量

### 示例 3.5：Logistic 回归

```mplus
VARIABLE: CATEGORICAL IS u1;
ANALYSIS: ESTIMATOR = ML;
MODEL: u1 ON x1 x3;
```

**说明**：指定 `ESTIMATOR=ML` 进行 Logistic 回归（默认为 Probit）

### 示例 3.6：多项 Logistic 回归

```mplus
VARIABLE: NOMINAL IS u1;
MODEL: u1 ON x1 x3;
```

**替代语法**：
```mplus
MODEL: u1#1 u1#2 ON x1 x3;
```

**说明**：
- 适用于无序分类因变量
- 类别引用方式：`u1#1`, `u1#2`, `u1#3`...
- 最后一个类别的截距和斜率默认固定为0
- 默认估计量：ML + 稳健标准误

### 示例 3.7：Poisson 回归

```mplus
VARIABLE: COUNT IS u1;
MODEL: u1 ON x1 x3;
```

**说明**：适用于计数因变量，默认估计量：ML + 稳健标准误

### 示例 3.8：零膨胀 Poisson 和负二项回归

**零膨胀 Poisson**：
```mplus
VARIABLE: COUNT IS u1 (i);
MODEL: u1 ON x1 x3;      ! 计数部分的Poisson回归
        u1#1 ON x1 x3;    ! 零膨胀的Logistic回归
```

**负二项回归**：
```mplus
VARIABLE: COUNT IS u1 (nb);
MODEL: u1 ON x1 x3;
```

**COUNT 选项参数**：
- `i`：零膨胀模型
- `nb`：负二项模型
- `nbi`：零膨胀负二项模型

### 示例 3.9：随机系数回归

```mplus
DEFINE: CENTER x1 x2 (GRANDMEAN);
ANALYSIS: TYPE = RANDOM;
MODEL: s | y ON x1;      ! 定义随机斜率 s
        s WITH y;         ! 释放 s 与 y 的残差协方差
        y s ON x2;        ! y 和 s 对 x2 的回归
```

**要点**：
- `TYPE = RANDOM` 启用随机斜率
- `|` 符号定义随机斜率：`随机斜率名 | 因变量 ON 自变量`
- `CENTER` 对协变量进行总均值中心化
- 随机斜率可用于建模残差方差的异质性

### 示例 3.10：非线性参数约束

```mplus
VARIABLE: NOMINAL = u;
MODEL: [u#1] (p1);       ! 给参数加标签
        [u#2] (p2);
        [u#3] (p2);       ! p2 标签相同表示参数相等
MODEL CONSTRAINT:
        p2 = log ((exp (p1) - 1)/2 - 1);  ! 非线性约束
```

**要点**：
- 参数标签：在参数后加 `(标签名)`
- 相同标签的参数被约束为相等
- `MODEL CONSTRAINT` 定义线性和非线性约束

---

## 3.3 路径分析示例

### 示例 3.11：连续变量的路径分析

```mplus
MODEL: y1 y2 ON x1 x2 x3;    ! y1, y2 作为中介变量
        y3 ON y1 y2 x2;       ! y3 对中介变量和协变量的回归
```

**说明**：
- y1 和 y2 中介 x1-x3 对 y3 的影响
- 默认估计残差方差，残差不相关
- 默认估计量：最大似然

### 示例 3.12：分类变量的路径分析

```mplus
VARIABLE: CATEGORICAL ARE u1-u3;
MODEL: u1 u2 ON x1 x2 x3;
        u3 ON u1 u2 x2;
```

**说明**：
- 默认使用 Probit 回归
- 默认估计量：稳健 WLS
- 指定 `ESTIMATOR=ML` 使用 Logistic 回归

### 示例 3.13：Theta 参数化的分类变量路径分析

```mplus
ANALYSIS: PARAMETERIZATION = THETA;
```

**参数化方式对比**：

| 参数化 | 尺度因子 | 残差方差 |
|--------|---------|---------|
| Delta（默认） | 可作为参数 | 不可作为参数 |
| Theta | 不可作为参数 | 可作为参数 |

### 示例 3.14：连续和分类变量组合的路径分析

```mplus
VARIABLE: CATEGORICAL IS u1;
MODEL: y1 y2 ON x1 x2 x3;    ! 线性回归
        u1 ON y1 y2 x2;       ! Probit 回归（默认）
```

### 示例 3.15：删失、分类和无序分类变量组合的路径分析

```mplus
VARIABLE: CENSORED IS y1 (a);      ! 从上方删失
          CATEGORICAL IS u1;        ! 二元/有序分类
          NOMINAL IS u2;            ! 无序分类
MODEL: y1 u1 ON x1 x2 x3;          ! 删失回归 + Logistic回归
        u2 ON y1 u1 x2;             ! 多项Logistic回归
```

---

## 3.4 多组分析和特殊选项

### 多组分析指定

| 结果变量类型 | 多组分析方法 |
|-------------|-------------|
| 连续、WLS删失、二元、有序分类 | `GROUPING` 选项（个体数据）或 `NGROUPS`（汇总数据） |
| ML删失、无序分类、计数 | `KNOWNCLASS` + `TYPE=MIXTURE` |

### 缺失数据

- 默认：使用所有可用数据在缺失数据理论下估计模型
- `LISTWISE`：删除任何分析变量有缺失值的观测

### 复杂调查数据

```mplus
ANALYSIS: TYPE = COMPLEX;
VARIABLE: STRATIFICATION = strat;
          CLUSTER = clus;
          WEIGHT = w;
          SUBPOPULATION = sub;
```

### 随机斜率

```mplus
ANALYSIS: TYPE = RANDOM;
MODEL: s | y ON x;    ! 定义随机斜率 s
```

### 间接效应

```mplus
MODEL INDIRECT: y IND x;        ! 总间接效应
                y IND x z;      ! 特定路径间接效应
```

### Bootstrap

```mplus
ANALYSIS: BOOTSTRAP = 500;      ! Bootstrap 500次
OUTPUT: CINTERVAL(BCBOOTSTRAP); ! 偏差校正Bootstrap置信区间
```

---

## 3.5 章节示例列表

### 回归分析示例（3.1-3.10）
- 3.1：线性回归
- 3.2：删失回归
- 3.3：删失膨胀回归
- 3.4：Probit 回归
- 3.5：Logistic 回归
- 3.6：多项 Logistic 回归
- 3.7：Poisson 回归
- 3.8：零膨胀 Poisson 和负二项回归
- 3.9：随机系数回归
- 3.10：无序分类变量的非线性约束

### 路径分析示例（3.11-3.18）
- 3.11：连续因变量路径分析
- 3.12：分类因变量路径分析
- 3.13：Theta 参数化的分类变量路径分析
- 3.14：连续和分类变量组合的路径分析
- 3.15：删失、分类和无序分类变量组合的路径分析
- 3.16：Bootstrap 标准误、间接效应和置信区间的路径分析
- 3.17：含缺失数据的分类因变量和连续中介变量路径分析
- 3.18：调节中介效应（间接效应图）

---

## 参考

- 来源：Mplus User's Guide, Chapter 3 (p.19-42)
- 版本：Version 8 (2017)
- 作者：Linda K. Muthén & Bengt O. Muthén