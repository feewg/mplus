# Chapter 1: Introduction

## 1.1 Mplus 概述

Mplus 是一个统计建模程序，为研究人员提供灵活的数据分析工具。主要特点包括：

- **广泛的模型选择**：提供多种模型、估计量和算法
- **友好的用户界面**：易于使用，提供数据和结果的图形显示
- **多样的数据类型支持**：
  - 横断面数据和纵向数据
  - 单层数据和多层次数据
  - 来自不同群体的数据（包括观察到的或未观察到的异质性）
  - 包含缺失值的数据
- **丰富的变量类型**：连续变量、删失变量、二元变量、有序分类变量（序数）、无序分类变量（名义）、计数变量，或这些类型的组合
- **蒙特卡洛模拟**：支持数据生成和模型分析

## 1.2 Mplus 建模框架

Mplus 建模框架的核心主题是**潜变量（Latent Variables）**，其通用性来自于同时使用：

### 连续潜变量（Continuous Latent Variables）- f
用于表示：
- **因子（Factors）**：对应未观察到的构念
- **随机效应（Random Effects）**：个体发展差异
- **组间变异**：层次数据中系数的跨组变异
- **脆弱性（Frailties）**：生存时间中未观察到的异质性
- **易感性（Liabilities）**：疾病的遗传易感性
- **缺失数据**：潜变量响应值

### 分类潜变量（Categorical Latent Variables）- c
用于表示：
- **潜类别（Latent Classes）**：同质个体群体
- **潜轨迹类别（Latent Trajectory Classes）**：未观察群体中的发展类型
- **混合成分（Mixture Components）**：未观察群体的有限混合
- **缺失数据**：潜变量响应类别

### 符号约定
| 符号 | 含义 |
|------|------|
| x | 背景变量（自变量） |
| y | 连续和删失结果变量 |
| u | 二元、有序分类、无序分类和计数结果变量 |
| f | 连续潜变量（因子） |
| c | 分类潜变量（潜类别） |

## 1.3 模型类型

### Ellipse A：仅含连续潜变量的模型

包括以下模型：
- 回归分析（Regression analysis）
- 路径分析（Path analysis）
- 探索性因子分析（Exploratory factor analysis, EFA）
- 验证性因子分析（Confirmatory factor analysis, CFA）
- 项目反应理论建模（Item response theory modeling, IRT）
- 结构方程建模（Structural equation modeling, SEM）
- 增长建模（Growth modeling）
- 离散时间生存分析（Discrete-time survival analysis）
- 连续时间生存分析（Continuous-time survival analysis）
- 时间序列分析（Time series analysis）

**特殊功能**：
- 单组或多组分析
- 缺失数据处理（MCAR、MAR、NMAR）和多重插补
- 复杂调查数据特征：分层、聚类、不等概率选择（抽样权重）、子群体分析、复制权重、有限总体校正
- 潜变量交互和最大似然非线性因子分析
- 随机斜率
- 个体变化的观测时间
- 线性和非线性参数约束
- 间接效应（包括特定路径）
- 所有结果类型的最大似然估计
- Bootstrap 标准误和置信区间
- 参数相等性的 Wald 卡方检验
- 潜变量因子得分和合理值

### Ellipse B：仅含分类潜变量的模型

包括以下模型：
- 回归混合建模（Regression mixture modeling）
- 路径分析混合建模（Path analysis mixture modeling）
- 潜类别分析（Latent class analysis, LCA）
- 含协变量和直接效应的潜类别分析
- 验证性潜类别分析
- 多分类潜变量的潜类别分析
- 对数线性建模（Loglinear modeling）
- 潜变量分布的非参数建模
- 多组分析
- 有限混合建模（Finite mixture modeling）
- 依从者平均因果效应建模（CACE）
- 潜转换分析和隐马尔可夫建模（含混合和协变量）
- 潜类别增长分析
- 离散时间生存混合分析
- 连续时间生存混合分析

**特殊功能**：
- 组间分类潜变量分析
- 识别可能影响分类潜变量的未包含协变量检验
- 潜类别间未包含变量均值相等性检验
- 潜类别合理值

### 完整框架：连续和分类潜变量组合模型

包括以下模型：
- 含随机效应的潜类别分析
- 因子混合建模（Factor mixture modeling）
- 结构方程混合建模
- 含潜轨迹类别的增长混合建模
- 离散时间生存混合分析
- 连续时间生存混合分析

## 1.4 复杂调查数据建模

Mplus 提供两种处理复杂调查数据的方法：

### 方法1：标准误调整
计算标准误和模型拟合卡方检验时考虑：
- 分层（Stratification）
- 聚类抽样导致的观测非独立性
- 不等概率选择

支持：
- 子群体分析
- 复制权重
- 有限总体校正
- 抽样权重：通过最大化加权对数似然函数估计参数
- 三明治估计量计算标准误

### 结果变量类型的回归模型

| 变量类型 | 回归模型 |
|---------|---------|
| 连续变量 | 线性回归 |
| 删失变量 | 删失（Tobit）回归，可选膨胀 |
| 二元/有序分类 | Probit 或 Logistic 回归 |
| 无序分类 | 多项 Logistic 回归 |
| 计数变量 | Poisson 或负二项回归，可选零膨胀 |

## 1.5 多层次建模

Mplus 支持多层次模型，可同时描述：
- **Within（个体水平）**：个体层面的变异
- **Between（群组水平）**：群组层面的变异

---

## 参考

- 来源：Mplus User's Guide, Chapter 1 (p.1-12)
- 版本：Version 8 (2017)
- 作者：Linda K. Muthén & Bengt O. Muthén