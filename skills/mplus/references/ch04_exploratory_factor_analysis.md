# Chapter 4: Exploratory Factor Analysis

## 4.1 概述

探索性因子分析（Exploratory Factor Analysis, EFA）用于确定解释一组观察变量相关性所需的连续潜变量（因子）数量。观察变量称为**因子指标（factor indicators）**。

### 支持的因子指标类型

- 连续变量（continuous）
- 删失变量（censored）
- 二元变量（binary）
- 有序分类变量（ordinal）
- 计数变量（counts）
- 上述类型的组合

### 探索性结构方程建模（ESEM）

当因子指标为连续、删失、二元、有序分类变量及其组合时，也可以使用**探索性结构方程建模（ESEM）**进行EFA。ESEM示例见Chapter 5（验证性因子分析部分）。

---

## 4.2 EFA 技术特性

### 旋转方法

Mplus提供多种正交和斜交旋转方法：

| 旋转类型 | 方法 |
|---------|------|
| 斜交（Oblique） | GEOMIN（默认）、PROMAX、OBLIMIN |
| 正交（Orthogonal） | VARIMAX、QUARTIMAX、EQUAMAX |

**参考文献**：Jennrich & Sampson (1966), Browne (2001), Bernaards & Jennrich (2005), Jennrich & Bentler (2011, 2012)

### 旋转解的标准误

使用Jennrich (1973, 1974, 2007)描述的算法提供旋转解的标准误。Cudeck & O'Dell (1994)讨论了旋转解标准误的优势。

### 卡方差异检验

自动进行m-1因子与m因子的卡方差异检验：
- MLM, MLR, WLSM：使用缩放校正因子
- WLSMV, MLMV：使用DIFFTEST选项

### 特殊功能

所有EFA模型支持：
- 缺失数据处理
- 复杂调查数据
- 混合建模（Mixture modeling）

---

## 4.3 EFA 语法

### 基本EFA语法

```mplus
ANALYSIS: TYPE = EFA 1 4;
```

**说明**：
- `TYPE = EFA`：执行探索性因子分析
- `1 4`：提取因子的数量范围（1到4个因子）
- 默认旋转：斜交GEOMIN
- 默认估计量：最大似然（ML）

### 旋转选项

```mplus
ANALYSIS: TYPE = EFA 1 4;
          ROTATION = VARIMAX;  ! 正交旋转
          ! 或其他旋转方法：PROMAX, OBLIMIN, QUARTIMAX, EQUAMAX
```

### 修改指数

```mplus
OUTPUT: MODINDICES;
```

用于请求残差相关（在EFA中固定为0）的修改指数和期望参数变化指数。

---

## 4.4 EFA 示例

### 示例 4.1：连续因子指标的EFA

**传统EFA方法**：
```mplus
TITLE: EFA with continuous factor indicators
DATA: FILE IS ex4.1a.dat;
VARIABLE: NAMES ARE y1-y12;
ANALYSIS: TYPE = EFA 1 4;
OUTPUT: MODINDICES;
```

**ESEM方法**：
```mplus
TITLE: EFA using ESEM
DATA: FILE IS ex4.1b.dat;
VARIABLE: NAMES ARE y1-y12;
MODEL: f1-f4 BY y1-y12 (*1);
OUTPUT: MODINDICES;
```

**ESEM语法说明**：
- `f1-f4 BY y1-y12 (*1)`：因子f1-f4由指标y1-y12测量
- `(*1)`：标签1表示f1,f2,f3,f4是一组EFA因子
- 默认使用斜交GEOMIN旋转
- 因子方差固定为1
- 因子指标截距和残差方差被估计
- 残差不相关

**EFA与ESEM结果相同**，但ESEM可以更方便地扩展到其他模型。

### 示例 4.2：分类因子指标的EFA

```mplus
TITLE: EFA with categorical factor indicators
DATA: FILE IS ex4.2.dat;
VARIABLE: NAMES ARE u1-u12;
          CATEGORICAL ARE u1-u12;
ANALYSIS: TYPE = EFA 1 4;
```

**说明**：
- 因子指标为二元或有序分类变量
- 默认估计量：稳健加权最小二乘（WLSMV）
- 使用ML估计时，每个因子需要一维数值积分
- 为减少计算时间，可将积分点数从默认7减少到3（近似解）

### 示例 4.3：混合变量类型的EFA

```mplus
TITLE: EFA with mixed variable types
DATA: FILE = ex4.3.dat;
VARIABLE: NAMES = u4-u6 y4-y6 u1-u3 y1-y3;
          CENSORED = y4-y6(b);      ! 删失变量（下方）
          CATEGORICAL = u1-u3;       ! 分类变量
          COUNT = u4-u6;             ! 计数变量
ANALYSIS: TYPE = EFA 1 4;
```

**说明**：
- y1-y3：连续变量
- y4-y6：删失变量（从下方删失）
- u1-u3：二元/有序分类变量
- u4-u6：计数变量
- 默认估计量：ML + 稳健标准误 + 数值积分
- 注意：因子数量和样本量增加会显著增加计算需求

---

## 4.5 章节示例列表

| 示例 | 描述 |
|------|------|
| 4.1 | 连续因子指标的EFA（传统EFA和ESEM） |
| 4.2 | 分类因子指标的EFA |
| 4.3 | 连续、删失、分类和计数因子指标的EFA* |
| 4.4 | 连续潜类别指标的探索性因子混合分析 |
| 4.5 | 连续因子指标的双层EFA |
| 4.6 | 个体和群组水平因子指标的双层EFA |
| 4.7 | 连续因子指标的双因子EFA |

*使用数值积分，计算量可能较大

---

## 4.6 EFA vs ESEM 对比

| 特性 | 传统EFA | ESEM |
|------|---------|------|
| 语法 | `TYPE = EFA 1 4` | `f1-f4 BY y1-y12 (*1)` |
| 模型扩展 | 有限 | 方便（可扩展到CFA、SEM等） |
| 旋转 | 在ANALYSIS中指定 | 默认GEOMIN，可在ANALYSIS中更改 |
| 结果 | 相同 | 相同 |

---

## 4.7 估计量选择

| 因子指标类型 | 默认估计量 | 替代估计量 |
|-------------|-----------|-----------|
| 连续 | ML | MLR, MLM, WLSMV |
| 分类 | WLSMV | ML（需数值积分） |
| 混合类型 | MLR + 数值积分 | - |

---

## 参考

- 来源：Mplus User's Guide, Chapter 4 (p.43-54)
- 版本：Version 8 (2017)
- 作者：Linda K. Muthén & Bengt O. Muthén
- 关键参考文献：
  - Asparouhov & Muthén (2009a) - ESEM
  - Jennrich & Sampson (1966) - 旋转算法
  - Muthén (1978) - 二元变量因子分析