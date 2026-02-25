# Chapter 2: Getting Started With Mplus

## 2.1 Mplus 语言概述

Mplus 用户语言由**十个命令**组成，每个命令都有多个选项。默认选项已针对最常见的分析类型进行优化，使用户输入最小化。

### 十个核心命令

| 命令 | 必需 | 功能描述 |
|------|------|---------|
| `TITLE` | 否 | 为分析提供标题 |
| `DATA` | **是** | 提供要分析的数据集信息 |
| `VARIABLE` | **是** | 提供数据集中变量的信息 |
| `DEFINE` | 否 | 转换现有变量并创建新变量 |
| `ANALYSIS` | 否 | 描述分析的技术细节 |
| `MODEL` | 否 | 描述要估计的模型 |
| `OUTPUT` | 否 | 请求默认输出之外的附加输出 |
| `SAVEDATA` | 否 | 保存分析数据、辅助数据和各种分析结果 |
| `PLOT` | 否 | 请求图形显示 |
| `MONTECARLO` | 否 | 指定蒙特卡洛模拟研究的细节 |

### 语法规则

#### 基本规则
- 命令可以按**任意顺序**排列
- `DATA` 和 `VARIABLE` 命令是**必需**的
- 所有命令必须**另起一行**并以**冒号(:)**结尾
- 分号(;)分隔命令选项
- 每行记录**不能超过90列**
- 可以使用大写和/或小写字母以及制表符

#### 缩写规则
- 命令和选项可以缩短为**四个或更多字母**
- 选项设置可以使用完整单词或粗体显示的单词部分

#### 注释规则
- 感叹号(!)表示注释，该行后续内容被忽略
- 多行注释：以 `!*` 开始，以 `*!` 结束

#### 关键词和列表
- `IS`, `ARE`, `=` 可在除 `DEFINE`, `MODEL CONSTRAINT`, `MODEL TEST` 外的所有命令中互换使用
- 列表项可用空格或逗号分隔
- 连字符(-)表示变量或数字列表（如 `y1-y6` 表示 y1 到 y6）
- 特殊关键词 `ALL` 表示所有变量

---

## 2.2 典型示例

### 示例1：MIMIC模型（因子分析含协变量）

```mplus
TITLE: this is an example of a MIMIC model
  with two factors, six continuous factor
  indicators, and three covariates
DATA: FILE IS mimic.dat;
VARIABLE: NAMES ARE y1-y6 x1-x3;
MODEL: f1 BY y1-y3;
       f2 BY y4-y6;
       f1 f2 ON x1-x3;
```

### 示例2：增长模型（含时间不变协变量）

```mplus
TITLE: this is an example of a linear growth
  model for a continuous outcome at four
  time points with the intercept and slope
  growth factors regressed on two time-
  invariant covariates
DATA: FILE IS growth.dat;
VARIABLE: NAMES ARE y1-y4 x1 x2;
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
       i s ON x1 x2;
```

**说明**：`| y1@0 y2@1 y3@2 y4@3` 表示线性增长模型，y1-y4 分别在时间点 0,1,2,3 测量。

### 示例3：潜类别分析（含协变量和直接效应）

```mplus
TITLE: this is an example of a latent class
  analysis with two classes, one covariate,
  and a direct effect
DATA: FILE IS lcax.dat;
VARIABLE: NAMES ARE u1-u4 x;
          CLASSES = c (2);
          CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
MODEL:
  %OVERALL%
  c ON x;
  u4 ON x;
```

### 示例4：多层次回归模型

```mplus
TITLE: this is an example of a multilevel
  regression analysis with one individual-
  level outcome variable regressed on an
  individual-level background variable where
  the intercept and slope are regressed on a
  cluster-level variable
DATA: FILE IS reg.dat;
VARIABLE: NAMES ARE clus y x w;
          CLUSTER = clus;
          WITHIN = x;
          BETWEEN = w;
          MISSING = .;
DEFINE: CENTER x (GRANDMEAN);
ANALYSIS: TYPE = TWOLEVEL RANDOM;
MODEL:
  %WITHIN%
  s | y ON x;
  %BETWEEN%
  y s ON w;
```

---

## 2.3 示例章节概览

接下来的十一章包含不同类型分析的典型输入设置示例：

| 章节 | 内容 |
|------|------|
| Chapter 3 | 回归和路径分析 |
| Chapter 4 | 探索性因子分析 |
| Chapter 5 | 验证性因子分析和结构方程模型 |
| Chapter 6 | 增长建模和生存分析 |
| Chapter 7 | 横断面数据混合建模 |
| Chapter 8 | 纵向数据混合建模 |
| Chapter 9 | 复杂调查数据的多层次建模 |
| Chapter 10 | 多层次混合建模 |
| Chapter 11 | 缺失数据建模和贝叶斯分析 |
| Chapter 12 | 蒙特卡洛模拟研究 |
| Chapter 13 | 特殊功能 |

### 示例文件命名规则

对于 Example 3.1，文件命名为：
- `ex3.1.inp` - 输入文件
- `ex3.1.dat` - 数据文件
- `ex3.1.out` - 输出文件
- `mcex3.1.inp` - 蒙特卡洛输入文件
- `mcex3.1.out` - 蒙特卡洛输出文件

### 输入约定

- **大写**：程序命令、选项、设置和关键词
- **小写**：用户提供的信息
- Mplus**不区分大小写**

### 变量命名约定

| 前缀 | 变量类型 |
|------|---------|
| `y` | 连续和删失结果变量 |
| `u` | 二元、有序分类、无序分类和计数结果变量 |
| `t` | 连续时间生存分析中的时间事件变量 |
| `x` | 背景变量（自变量） |
| `a` | 时变背景变量 |
| `w` | 组间背景变量 |
| `f` | 连续潜变量 |
| `c` | 分类潜变量 |
| `i` | 截距增长因子 |
| `s`, `q` | 斜率增长因子和随机斜率 |

---

## 2.4 Mplus 版本功能

### Mplus Base（基础版）
覆盖章节：3, 5, 6, 11, 13 和部分 4, 12

**不包含**：
- `TYPE=MIXTURE`
- `TYPE=TWOLEVEL`
- `TYPE=THREELEVEL`
- `TYPE=CROSSCLASSIFIED`

### Mplus Base + Mixture Add-On（混合模型附加版）
覆盖章节：3, 5, 6, 7, 8, 11, 13 和部分 4, 12

**不包含**：
- `TYPE=TWOLEVEL`
- `TYPE=THREELEVEL`
- `TYPE=CROSSCLASSIFIED`

### Mplus Base + Multilevel Add-On（多层次附加版）
覆盖章节：3, 5, 6, 9, 11, 13 和部分 4, 12

**不包含**：
- `TYPE=MIXTURE`

### Mplus Base + Combination Add-On（组合版）
覆盖**所有章节**，无任何分析限制。

---

## 参考

- 来源：Mplus User's Guide, Chapter 2 (p.13-18)
- 版本：Version 8 (2017)
- 作者：Linda K. Muthén & Bengt O. Muthén