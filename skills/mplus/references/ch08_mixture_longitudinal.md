# Chapter 8: Mixture Modeling With Longitudinal Data

## 8.1 概述

### 混合建模基础
混合建模（Mixture Modeling）指使用**分类潜变量**来代表亚群体的建模方法，其中群体成员身份未知但从数据中推断。在纵向数据混合建模中，未观察到的异质性通过分类和连续潜变量捕获。

### 三种主要纵向混合模型

| 模型类型 | 英文缩写 | 特点 |
|---------|---------|------|
| **潜类别增长分析** | LCGA | 对应不同潜轨迹类别，类别内不允许个体差异 |
| **增长混合模型** | GMM | 类别内允许个体差异（随机效应） |
| **潜转移分析** | LTA | 潜类别指标跨时间测量，允许个体在类别间转移 |
| **离散时间生存混合分析** | DTSMA | 重复观察结果代表事件历史 |

### 可用功能
- 单组或多组分析
- 缺失数据处理
- 复杂调查数据
- 潜变量交互和非线性因子分析
- 随机斜率
- 个体变化观察时间
- 线性和非线性参数约束
- Bootstrap标准误和置信区间
- Wald卡方检验

### 支持的变量类型
- 连续变量
- 删失变量
- 二元/有序分类变量
- 计数变量
- 上述类型的组合

---

## 8.2 增长混合模型（GMM）示例

### 示例 8.1：连续结果的GMM（自动起始值）

```mplus
VARIABLE: NAMES ARE y1–y4 x;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
          STARTS = 40 8;
MODEL: %OVERALL%
        i s | y1@0 y2@1 y3@2 y4@3;
        i s ON x;        ! 增长因子对协变量回归
        c ON x;          ! 类别对协变量多项logistic回归
```

**关键说明**：
- `TYPE = MIXTURE` 指定混合模型
- `STARTS = 40 8`：40个初始随机起始值，8个最终阶段优化
- 箭头从c到增长因子表示截距跨类别变化
- 默认估计量：MLR（带稳健标准误的极大似然）

### 示例 8.2：连续结果的GMM（用户指定起始值）

```mplus
MODEL: %OVERALL%
        i s | y1@0 y2@1 y3@2 y4@3;
        i s ON x;
        c ON x;
       %c#1%
        [i*1 s*.5];     ! 类别1起始值
       %c#2%
        [i*3 s*1];      ! 类别2起始值
```

**说明**：使用 `*` 指定起始值，方括号 `[]` 表示截距。

### 示例 8.3：删失结果的GMM

```mplus
VARIABLE: CENSORED = y1-y4 (b);  ! b=从下方删失
ANALYSIS: TYPE = MIXTURE;
          ALGORITHM = INTEGRATION;
```

**说明**：需要数值积分，2维积分共225个积分点。

### 示例 8.4：分类结果的GMM

```mplus
VARIABLE: CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
          ALGORITHM = INTEGRATION;
MODEL: %OVERALL%
        i s | u1@0 u2@1 u3@2 u4@3;
```

**参数化特点**：
- 阈值跨时间等值作为默认
- 截距增长因子截距在最后一个类别固定为0

### 示例 8.5：计数结果的GMM（零膨胀Poisson和负二项）

**零膨胀Poisson**：
```mplus
VARIABLE: COUNT = u1-u8 (i);  ! i=零膨胀
ANALYSIS: TYPE = MIXTURE;
          STARTS = 40 8;
          STITERATIONS = 20;
          ALGORITHM = INTEGRATION;
MODEL: %OVERALL%
        i s q | u1@0 u2@.1 u3@.2 u4@.3 u5@.4 u6@.5 u7@.6 u8@.7;
        ii si qi | u1#1@0 u2#1@.1 u3#1@.2 u4#1@.3 u5#1@.4 u6#1@.5 u7#1@.6 u8#1@.7;
        s-qi@0;         ! 固定斜率方差为0
```

**负二项模型**：
```mplus
VARIABLE: COUNT = u1-u8 (nb);  ! nb=负二项
```

**说明**：
- 同时估计两个增长模型：计数部分和膨胀部分
- `#1` 表示潜膨胀变量

### 示例 8.6：含分类远端结果的GMM

```mplus
VARIABLE: CATEGORICAL = u;  ! 远端结果
MODEL: %OVERALL%
        i s | y1@0 y2@1 y3@2 y4@3;
        i s ON x;
        c ON x;
```

**说明**：远端结果u通过logistic回归对类别潜变量c回归，表现为u的阈值跨类别变化。

### 示例 8.7：序贯过程GMM

```mplus
VARIABLE: CLASSES = c1 (3) c2 (2);
MODEL: %OVERALL%
        i1 s1 | y1@0 y2@1 y3@2 y4@3;   ! 第一过程
        i2 s2 | y5@0 y6@1 y7@2 y8@3;   ! 第二过程
        c2 ON c1;                       ! 类别间转移
MODEL c1:
        %c1#1% [i1 s1];
        %c1#2% [i1*1 s1];
        %c1#3% [i1*2 s1];
MODEL c2:
        %c2#1% [i2 s2];
        %c2#2% [i2*-1 s2];
```

**说明**：
- 多个分类潜变量，每个有自己的MODEL命令
- `c2 ON c1` 表示从c1到c2的转移概率

### 示例 8.8：已知类别的GMM（多组分析）

```mplus
VARIABLE: CLASSES = cg (2) c (2);
          KNOWNCLASS = cg (g = 0 g = 1);
MODEL: %OVERALL%
        i s | y1@0 y2@1 y3@2 y4@3;
        c ON cg x;          ! 类别概率跨组变化
       %cg#1.c#1% [i*2 s*1];   ! 组合类别起始值
       %cg#1.c#2% [i*0 s*0];
       %cg#2.c#1% [i*3 s*1.5];
       %cg#2.c#2% [i*1 s*.5];
```

**说明**：
- `KNOWNCLASS` 指定已知类别的分类潜变量
- 用 `.` 组合类别标签，如 `cg#1.c#1`

---

## 8.3 潜类别增长分析（LCGA）示例

### LCGA vs GMM 关键区别
| 特征 | LCGA | GMM |
|------|------|-----|
| 类别内个体差异 | **不允许**（方差固定为0） | 允许 |
| 需要INTEGRATION | 否 | 是（某些情况） |
| 使用 | `TYPE=MIXTURE` | `TYPE=MIXTURE` + `ALGORITHM=INTEGRATION` |

### 示例 8.9：二元结果的LCGA

```mplus
VARIABLE: CATEGORICAL = u1-u4;
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        i s | u1@0 u2@1 u3@2 u4@3;
```

**LCGA默认设置**：
- 增长因子方差固定为0
- 增长因子协方差固定为0
- 截距增长因子均值在最后一个类别固定为0

### 示例 8.10：三类别结果的LCGA

```mplus
VARIABLE: CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        i s | u1@0 u2@1 u3@2 u4@3;
        ! [u1$1-u4$1*-.5] (1);  ! 阈值起始值（可选）
        ! [u1$2-u4$2*.5] (2);
```

**说明**：三类别变量有2个阈值。

### 示例 8.11：计数结果的LCGA（零膨胀Poisson）

```mplus
VARIABLE: COUNT = u1-u4 (i);
          CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        i s | u1@0 u2@1 u3@2 u4@3;
        ii si | u1#1@0 u2#1@1 u3#1@2 u4#1@3;
```

---

## 8.4 隐马尔可夫模型和LTA示例

### 示例 8.12：隐马尔可夫模型（四个时间点）

```mplus
VARIABLE: CATEGORICAL = u1-u4;
          CLASSES = c1(2) c2(2) c3(2) c4(2);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        [c2#1-c4#1] (1);     ! 截距等值
        c4 ON c3 (2);        ! 转移矩阵等值
        c3 ON c2 (2);
        c2 ON c1 (2);
MODEL c1: %c1#1% [u1$1] (3); %c1#2% [u1$1] (4);
MODEL c2: %c2#1% [u2$1] (3); %c2#2% [u2$1] (4);
MODEL c3: %c3#1% [u3$1] (3); %c3#2% [u3$1] (4);
MODEL c4: %c4#1% [u4$1] (3); %c4#2% [u4$1] (4);
```

**说明**：
- 一阶马尔可夫过程
- 转移矩阵跨时间等值
- 测量等值性通过标签(3)(4)实现

### 示例 8.13：含二元协变量的LTA

```mplus
VARIABLE: CATEGORICAL = u11-u15 u21-u25;
          CLASSES = cg (2) c1 (3) c2 (3);
          KNOWNCLASS = cg (g = 0 g = 1);
ANALYSIS: TYPE = MIXTURE;
MODEL: %OVERALL%
        c1 c2 ON cg;           ! 协变量影响类别概率
MODEL cg:
        %cg#1% c2 ON c1;       ! 组特定转移概率
        %cg#2% c2 ON c1;
MODEL c1: ... ! 测量参数
MODEL c2: ... ! 测量参数
OUTPUT: TECH1 TECH8 TECH15;  ! TECH15=转移概率
```

**替代参数化**（概率参数化）：
```mplus
ANALYSIS: TYPE = MIXTURE;
          PARAMETERIZATION = PROBABILITY;
```

### 示例 8.14：含连续协变量的LTA

```mplus
VARIABLE: CLASSES = c1 (3) c2 (3);
ANALYSIS: TYPE = MIXTURE;
          PROCESSORS = 8;
MODEL: %OVERALL%
        c1 ON x;           ! 时间1类别对协变量
        c2 ON c1;          ! 转移
MODEL c1:
        %c1#1% c2 ON x;    ! 类别特定协变量影响转移
        ...
```

**说明**：`c2 ON x` 在c1的类别特定部分指定，允许协变量影响转移概率。

### 示例 8.15：移动-停留者LTA（概率参数化）

```mplus
VARIABLE: CLASSES = c(2) c1(3) c2(3) c3(3);
ANALYSIS: TYPE = MIXTURE;
          PARAMETERIZATION = PROBABILITY;
          STARTS = 100 20;
MODEL: %OVERALL%
        c1 ON c;           ! c=移动-停留类别
MODEL c:
        %c#1%              ! 移动者类别
          c2 ON c1;
          c3 ON c2;
        %c#2%              ! 停留者类别
          c2#1 ON c1#1@1; c2#2 ON c1#1@0;
          c2#1 ON c1#2@0; c2#2 ON c1#2@1;
          ...
```

**说明**：
- 概率参数化允许直接表达转移概率
- 停留者类别中，转移概率固定为确定性（0或1）

---

## 8.5 生存混合分析示例

### 示例 8.16：离散时间生存混合分析

（注：内容在第260页后被截断，参考Chapter 6的离散时间生存分析结合混合建模扩展）

### 示例 8.17：连续时间生存混合分析（Cox回归）

（注：参考Chapter 6的连续时间生存分析结合混合建模扩展）

---

## 8.6 章节示例列表

### GMM示例（8.1-8.8）
- **8.1**：连续结果GMM（自动起始值）
- **8.2**：连续结果GMM（用户指定起始值）
- **8.3**：删失结果GMM
- **8.4**：分类结果GMM
- **8.5**：计数结果GMM（零膨胀Poisson/负二项）
- **8.6**：含分类远端结果的GMM
- **8.7**：序贯过程GMM
- **8.8**：已知类别的GMM（多组分析）

### LCGA示例（8.9-8.11）
- **8.9**：二元结果LCGA
- **8.10**：三类别结果LCGA
- **8.11**：计数结果LCGA（零膨胀Poisson）

### 隐马尔可夫和LTA示例（8.12-8.15）
- **8.12**：四时间点隐马尔可夫模型
- **8.13**：含二元协变量的LTA
- **8.14**：含连续协变量的LTA
- **8.15**：移动-停留者LTA

### 生存混合分析示例（8.16-8.17）
- **8.16**：离散时间生存混合分析
- **8.17**：连续时间生存混合分析（Cox回归）

---

## 参考

- 来源：Mplus User's Guide, Chapter 8 (p.221-260)
- 版本：Version 8 (2017)
- 作者：Linda K. Muthén & Bengt O. Muthén
- 关键参考文献：
  - Muthén & Shedden (1999) - GMM基础
  - Nagin (1999) - LCGA
  - Muthén (2004, 2008) - 混合建模综述
  - Muthén & Asparouhov (2009) - GMM方法论
  - Collins & Wugalter (1992) - LTA
  - Reboussin et al. (1998) - 潜转移分析
  - Muthén & Masyn (2005) - 离散时间生存混合分析
