# Chapter 5: Confirmatory Factor Analysis and Structural Equation Modeling

## 5.1 概述

### CFA（验证性因子分析）
用于研究观察变量与连续潜变量（因子）之间的关系。当观察变量为分类变量时，CFA也称为**项目反应理论（IRT）**分析。

### MIMIC（Multiple Indicator Multiple Cause）
包含协变量的CFA模型，研究因子与协变量之间的关系，用于理解测量不变性和群体异质性。

### SEM（结构方程模型）
包含两部分：
- **测量模型**：观察变量与潜变量的关系（同CFA）
- **结构模型**：潜变量之间的关系、观察变量之间的关系、潜变量与非因子指标观察变量之间的关系

### 支持的变量类型
- 连续变量（continuous）
- 删失变量（censored）
- 二元/有序分类变量（binary/ordinal）
- 无序分类变量（nominal）
- 计数变量（counts）

---

## 5.2 基本CFA语法

### 示例 5.1：连续指标CFA

```mplus
MODEL: f1 BY y1-y3;   ! f1由y1,y2,y3测量
        f2 BY y4-y6;   ! f2由y4,y5,y6测量
```

**默认设置**：
- 每个BY语句的第一个因子载荷固定为1（定义因子尺度）
- 估计因子指标截距和残差方差
- 残差不相关
- 估计因子方差
- 因子相关（外生变量）
- 默认估计量：ML

### 示例 5.2：分类指标CFA

```mplus
VARIABLE: CATEGORICAL ARE u1-u6;
MODEL: f1 BY u1-u3;
        f2 BY u4-u6;
```

**说明**：
- 默认估计量：稳健WLS（WLSMV）
- 使用Probit回归
- 指定`ESTIMATOR=ML`使用Logistic回归（需数值积分）

### 示例 5.3：混合指标类型CFA

```mplus
VARIABLE: CATEGORICAL ARE u1-u3;  ! 分类变量
MODEL: f1 BY u1-u3;                ! Probit回归
        f2 BY y4-y6;                ! 线性回归
```

### 示例 5.4：删失和计数指标CFA

```mplus
VARIABLE: CENSORED ARE y1-y3 (a);  ! 从上方删失
          COUNT ARE u4-u6;          ! 计数变量
MODEL: f1 BY y1-y3;                ! 删失回归
        f2 BY u4-u6;                ! Poisson回归
```

---

## 5.3 IRT模型（示例 5.5）

### 广义部分评分模型（GPCM）

```mplus
VARIABLE: CATEGORICAL ARE u1-u20 (gpcm);
ANALYSIS: ESTIMATOR = MLR;
MODEL: f BY u1-u20*;   ! *释放第一个载荷
        f@1;            ! 固定因子方差为1
```

### 双参数Logistic模型（2PL）

```mplus
VARIABLE: CATEGORICAL ARE u1-u20;  ! 二元变量
ANALYSIS: ESTIMATOR = MLR;
MODEL: f BY u1-u20*;
        f@1;
```

### 三参数Logistic模型（3PL）

```mplus
VARIABLE: CATEGORICAL = u1-u20(3pl);
MODEL: f BY u1-u20*;
        f@1;
        [u1$2-u20$2] (a1-a20);  ! 第二个阈值（猜测参数）
MODEL PRIORS:
        a1-a20~N(1.386,1);       ! 先验分布
```

### 四参数Logistic模型（4PL）

```mplus
VARIABLE: CATEGORICAL = u1-u20(4pl);
MODEL: [u1$2-u20$2] (a1-a20);     ! 上渐近线参数
        [u1$3-u20$3] (b1-b20);     ! 下渐近线参数
```

**IRT阈值说明**：
- `$1`：第一个阈值（难度参数）
- `$2`：第二个阈值（猜测参数，3PL/4PL）
- `$3`：第三个阈值（上渐近线，4PL）

---

## 5.4 高级CFA模型

### 二阶因子分析（示例 5.6）

```mplus
MODEL: f1 BY y1-y3;    ! 一阶因子
        f2 BY y4-y6;
        f3 BY y7-y9;
        f4 BY y10-y12;
        f5 BY f1-f4;    ! 二阶因子
```

### 非线性CFA（示例 5.7）

```mplus
ANALYSIS: TYPE = RANDOM;
          ALGORITHM = INTEGRATION;
MODEL: f BY y1-y5;
        fxf | f XWITH f;    ! 定义二次项
        y1-y5 ON fxf;        ! 二次效应
```

### MIMIC模型（示例 5.8）

```mplus
MODEL: f1 BY y1-y3;
        f2 BY y4-y6;
        f1 f2 ON x1-x3;      ! 因子对协变量的回归
```

### 均值结构CFA（示例 5.9）

```mplus
MODEL: f1 BY y1a y1b@1 y1c@1;   ! @1固定载荷为1
        f2 BY y2a y2b@1 y2c@1;
        [y1a y1b y1c] (1);      ! 等值截距
        [y2a y2b y2c] (2);
```

### 阈值结构CFA（示例 5.10）

```mplus
VARIABLE: CATEGORICAL ARE u1a-u1c u2a-u2c;
MODEL: f1 BY u1a u1b@1 u1c@1;
        f2 BY u2a u2b@1 u2c@1;
        [u1a$1 u1b$1 u1c$1] (1);  ! 等值阈值
        [u2a$1 u2b$1 u2c$1] (2);
```

---

## 5.5 SEM模型

### 基本SEM（示例 5.11）

```mplus
MODEL: f1 BY y1-y3;
        f2 BY y4-y6;
        f3 BY y7-y9;
        f4 BY y10-y12;
        f4 ON f3;          ! 结构关系
        f3 ON f1 f2;
```

### 含间接效应的SEM（示例 5.12）

```mplus
MODEL: f4 ON f3;
        f3 ON f1 f2;
MODEL INDIRECT:
        f4 IND f3 f1;      ! f1->f3->f4的间接效应
```

### 含潜变量交互的SEM（示例 5.13）

```mplus
ANALYSIS: TYPE = RANDOM;
          ALGORITHM = INTEGRATION;
MODEL: f4 ON f3;
        f3 ON f1 f2;
        f1xf2 | f1 XWITH f2;   ! 定义交互项
        f3 ON f1xf2;            ! 交互效应
```

---

## 5.6 多组分析

### 无均值结构多组CFA（示例 5.14）

```mplus
VARIABLE: GROUPING IS g (1 = male 2 = female);
ANALYSIS: MODEL = NOMEANSTRUCTURE;
MODEL: f1 BY y1-y3;
        f2 BY y4-y6;
        f1 f2 ON x1-x3;
MODEL female:
        f1 BY y3;           ! 释放y3的跨组等值约束
```

### 有均值结构多组CFA（示例 5.15）

```mplus
MODEL female:
        f1 BY y3;
        [y3];               ! 释放y3截距的等值约束
```

### 分类指标多组CFA（Delta参数化，示例 5.16）

```mplus
VARIABLE: CATEGORICAL ARE u1-u6;
          GROUPING IS g (1 = male 2 = female);
MODEL: f1 BY u1-u3;
        f2 BY u4-u6;
MODEL female:
        f1 BY u3;
        [u3$1];            ! 释放阈值
        {u3@1};            ! 固定尺度因子为1
```

### Theta参数化（示例 5.17）

```mplus
ANALYSIS: PARAMETERIZATION = THETA;
MODEL female:
        f1 BY u3;
        [u3$1];
        u3@1;              ! 固定残差方差为1（Theta参数化）
```

**参数化对比**：

| 参数化 | 尺度因子 | 残差方差 |
|--------|---------|---------|
| Delta（默认） | 可作为参数 | 不可作为参数 |
| Theta | 不可作为参数 | 可作为参数 |

---

## 5.7 双生子模型（ACE模型）

### 连续结果双生子模型（示例 5.18）

```mplus
VARIABLE: GROUPING = g (1 = mz 2 = dz);
ANALYSIS: MODEL = NOCOVARIANCES;   ! 默认协方差为0
MODEL: [y1-y2] (1);                 ! 等值截距
        y1-y2@0;                     ! 残差方差为0（由E因子捕获）
        a1 BY y1* (2);               ! A因子（加性遗传）
        a2 BY y2* (2);
        c1 BY y1* (3);               ! C因子（共同环境）
        c2 BY y2* (3);
        e1 BY y1* (4);               ! E因子（非共享环境）
        e2 BY y2* (4);
        a1-e2@1;                     ! 因子方差为1
        [a1-e2@0];                   ! 因子均值为0
        a1 WITH a2@1;                ! MZ双胞胎A因子相关1.0
        c1 WITH c2@1;                ! C因子相关1.0
MODEL dz: 
        a1 WITH a2@.5;               ! DZ双胞胎A因子相关0.5
```

### 使用参数约束的双生子模型（示例 5.21）

```mplus
MODEL: [y1-y2] (1);
        y1-y2 (var);                 ! 等值方差
        y1 WITH y2 (covmz);          ! MZ协方差
MODEL dz: 
        y1 WITH y2 (covdz);          ! DZ协方差
MODEL CONSTRAINT:
        NEW(a c e h);
        var = a**2 + c**2 + e**2;
        covmz = a**2 + c**2;
        covdz = 0.5*a**2 + c**2;
        h = a**2/(a**2 + c**2 + e**2);  ! 遗传度
```

---

## 5.8 参数约束（示例 5.20）

```mplus
MODEL: f1 BY y1 y2-y3(lam2-lam3);   ! 参数标签
        f1 (vf1);                    ! 因子方差标签
        y1-y3 (ve1-ve3);             ! 残差方差标签
MODEL CONSTRAINT:
        NEW(rel2 rel5 stan3 stan6);  ! 新参数
        rel2 = lam2**2*vf1/(lam2**2*vf1 + ve2);  ! 信度公式
        rel5 = rel2;                  ! 等值约束
        stan3 = lam3*SQRT(vf1)/SQRT(lam3**2*vf1 + ve3);  ! 标准化系数
        0 = stan6 - stan3;            ! 等值约束（差为0）
        ve2 > ve5;                    ! 不等式约束
        ve4 > 0;
```

---

## 5.9 ESEM（探索性结构方程建模）

### EFA with Covariates (MIMIC)（示例 5.24）

```mplus
MODEL: f1-f2 BY y1-y8(*1);           ! EFA因子
        f1-f2 ON x1-x2;              ! 因子对协变量回归
        y1 ON x1;                    ! 直接效应（测量非不变性）
        y8 ON x2;
```

### SEM with EFA and CFA Factors（示例 5.25）

```mplus
MODEL: f1-f2 BY y1-y6 (*1);          ! EFA因子
        f3 BY y7-y9;                 ! CFA因子
        f4 BY y10-y12;
        f3 ON f1-f2;                 ! 结构关系
        f4 ON f3;
```

### 纵向EFA（示例 5.26）

```mplus
MODEL: f1-f2 BY y1-y6 (*t1 1);       ! 时间点1，标签t1
        f3-f4 BY y7-y12 (*t2 1);      ! 时间点2，标签t2
        ! 数字1表示载荷等值
        y1-y6 PWITH y7-y12;          ! 残差相关（纵向）
```

### 多组EFA（示例 5.27）

```mplus
VARIABLE: GROUPING IS group (1 = g1 2 = g2);
MODEL: f1-f2 BY y1-y10 (*1);
        [f1-f2@0];                   ! 两组因子均值固定为0
MODEL g2: 
        f1-f2 BY y1-y10 (*1);        ! 释放载荷等值
        [y1-y10];                    ! 释放截距等值
```

### 双因子ESEM（示例 5.29）

```mplus
ANALYSIS: ROTATION = BI-GEOMIN;     ! 双因子旋转
MODEL: fg f1 f2 BY y1-y10 (*1);      ! fg=一般因子，f1/f2=特定因子
```

---

## 5.10 章节示例列表

### CFA示例（5.1-5.10）
- 5.1：连续指标CFA
- 5.2：分类指标CFA
- 5.3：连续和分类混合指标CFA
- 5.4：删失和计数指标CFA
- 5.5：IRT模型（GPCM、2PL、3PL、4PL）
- 5.6：二阶因子分析
- 5.7：非线性CFA
- 5.8：MIMIC模型（连续指标）
- 5.9：均值结构CFA
- 5.10：阈值结构CFA

### SEM示例（5.11-5.13）
- 5.11：连续指标SEM
- 5.12：含间接效应的SEM
- 5.13：含潜变量交互的SEM

### 多组分析示例（5.14-5.19）
- 5.14-5.17：多组CFA（连续/分类指标，Delta/Theta参数化）
- 5.18-5.19：双生子ACE模型（连续/分类结果）

### 参数约束示例（5.20-5.23）
- 5.20：CFA参数约束
- 5.21-5.22：双生子模型参数约束
- 5.23：QTL兄弟姐妹模型

### ESEM示例（5.24-5.30）
- 5.24：ESEM MIMIC
- 5.25：ESEM与CFA因子组合
- 5.26：纵向EFA
- 5.27：多组EFA
- 5.28：EFA残差方差>0约束
- 5.29：双因子ESEM
- 5.30：双因子ESEM（部分项目仅负荷一般因子）

### 贝叶斯CFA示例（5.31-5.33）
- 5.31：贝叶斯双因子CFA
- 5.32：贝叶斯MIMIC
- 5.33：贝叶斯近似测量不变性

---

## 参考

- 来源：Mplus User's Guide, Chapter 5 (p.55-112)
- 版本：Version 8 (2017)
- 作者：Linda K. Muthén & Bengt O. Muthén
- 关键参考文献：
  - Bollen (1989) - SEM
  - Asparouhov & Muthén (2009a) - ESEM
  - Neale & Cardon (1992) - 双生子模型
  - Jennrich & Bentler (2011, 2012) - 双因子EFA