# Chapter 6: Growth Modeling, Survival Analysis, and N=1 Time Series Analysis

## 6.1 概述

### 增长模型（Growth Models）
增长模型研究个体在一个或多个结果变量上随时间的发展变化。结果变量可以是：
- 观察变量或连续潜变量
- 连续变量、删失变量、二元/有序分类变量、计数变量
- 多种变量类型的组合

**Mplus的增长模型特点**：
- 采用多元方法（multivariate approach）：4个时间点的测量产生四变量结果向量
- 不同于多层建模的单变量方法
- 灵活性：允许不同时间点的残差方差差异、残差相关、结果变量间回归

**处理时间与结果关系的两种方法**：
1. 时间分数作为模型参数（结构方程建模方法）
2. 时间作为反映个体变化观察时间的变量（多层建模方法）

### 生存分析（Survival Analysis）
- **离散时间生存分析**：记录频率较低（如月度、年度）
- **连续时间生存分析**：记录频率较高（如小时、日度）
- 可以整合到一般潜变量建模框架中

### N=1时间序列分析
用于分析单个被试的密集纵向数据：
- 生态瞬时评估（EMA）
- 经验抽样方法
- 每日日记方法
- 动态评估

数据特点：大量时间点（20-200），时间上紧密间隔

---

## 6.2 增长模型示例

### 示例 6.1：连续结果的线性增长模型

```mplus
MODEL: i s | y11@0 y12@1 y13@2 y14@3;
```

**说明**：
- `|` 符号用于命名和定义增长因子
- `i` = 截距增长因子（初始状态因子）
- `s` = 斜率增长因子
- 时间分数固定为 0, 1, 2, 3（等距时间点）
- 默认估计量：ML

**默认设置**：
- 结果变量截距固定为0
- 估计增长因子的均值和方差
- 估计增长因子协方差
- 残差方差可跨时间不同，残差不相关

### 示例 6.2：删失结果的线性增长模型

```mplus
VARIABLE: CENSORED ARE y11-y14 (b);  ! b=从下方删失（下限效应）
ANALYSIS: ESTIMATOR = MLR;           ! 需要数值积分
MODEL: i s | y11@0 y12@1 y13@2 y14@3;
```

### 示例 6.3：删失膨胀模型（Censored-Inflated）

```mplus
VARIABLE: CENSORED ARE y11-y14 (bi);  ! bi=删失膨胀模型
ANALYSIS: INTEGRATION = 7;
MODEL: i s | y11@0 y12@1 y13@2 y14@3;       ! 连续部分
        ii si | y11#1@0 y12#1@1 y13#1@2 y14#1@3;  ! 膨胀部分
        si@0;  ! 固定斜率方差为0
```

**说明**：同时估计两个增长模型：
- 连续部分：针对能取删失点及以上值的个体
- 膨胀部分：针对只能取删失点值的概率（二元潜变量）

### 示例 6.4：分类结果的线性增长模型

```mplus
VARIABLE: CATEGORICAL ARE u11-u14;
MODEL: i s | u11@0 u12@1 u13@2 u14@3;
```

**说明**：
- 默认估计量：稳健WLS（WLSMV）
- 使用Probit模型和Delta参数化
- 第一个时间点的尺度因子固定为1

### 示例 6.5：Theta参数化的分类结果增长模型

```mplus
VARIABLE: CATEGORICAL ARE u11-u14;
ANALYSIS: PARAMETERIZATION = THETA;
MODEL: i s | u11@0 u12@1 u13@2 u14@3;
```

**Delta vs Theta参数化**：
- Delta：尺度因子可作为参数，残差方差不可
- Theta：残差方差可作为参数，尺度因子不可

### 示例 6.6：计数结果的线性增长模型（Poisson）

```mplus
VARIABLE: COUNT ARE u11-u14;
MODEL: i s | u11@0 u12@1 u13@2 u14@3;
```

**说明**：
- 默认估计量：MLR（需要数值积分）
- 本例使用2维积分，共225个积分点

### 示例 6.7：零膨胀Poisson增长模型

```mplus
VARIABLE: COUNT ARE u11-u14 (i);  ! i=零膨胀
ANALYSIS: INTEGRATION = 7;
MODEL: i s | u11@0 u12@1 u13@2 u14@3;
        ii si | u11#1@0 u12#1@1 u13#1@2 u14#1@3;
        s@0 si@0;  ! 固定两个斜率方差
```

### 示例 6.8：估计时间分数的增长模型

```mplus
MODEL: i s | y11@0 y12@1 y13*2 y14*3;
```

**说明**：
- `*` 表示自由参数
- 数字为起始值
- 为识别模型，两个时间分数必须固定

### 示例 6.9：二次增长模型

```mplus
MODEL: i s q | y11@0 y12@1 y13@2 y14@3;
```

**说明**：
- `i` = 截距因子
- `s` = 线性斜率因子（时间分数 0,1,2,3）
- `q` = 二次斜率因子（时间分数自动计算为 0,1,4,9）
- 三个增长因子均值、方差和相关都估计

### 示例 6.10：含时不变和时变协变量的增长模型

```mplus
MODEL: i s | y11@0 y12@1 y13@2 y14@3;
        i s ON x1 x2;        ! 时不变协变量
        y11 ON a31;          ! 时变协变量
        y12 ON a32;
        y13 ON a33;
        y14 ON a34;
```

### 示例 6.11：分段增长模型

```mplus
MODEL: i s1 | y1@0 y2@1 y3@2 y4@2 y5@2;   ! 第一阶段
        i s2 | y1@0 y2@0 y3@0 y4@1 y5@2;   ! 第二阶段
```

**说明**：
- 一个截距因子 `i` 必须在两个|语句中都命名
- `s1` 捕获前三个时间点的线性增长
- `s2` 捕获后三个时间点的线性增长

### 示例 6.12：个体变化观察时间和随机斜率

```mplus
VARIABLE: TSCORES = a11-a14;   ! 个体观察时间
ANALYSIS: TYPE = RANDOM;
MODEL: i s | y1-y4 AT a11-a14;    ! AT指定个体时间
        st | y1 ON a21;             ! 时变协变量的随机斜率
        st | y2 ON a22;
        st | y3 ON a23;
        st | y4 ON a24;
        i s st ON x;                ! 三个随机效应对协变量回归
```

### 示例 6.13：双平行过程的增长模型

```mplus
MODEL: i1 s1 | y11@0 y12@1 y13@2 y14@3;   ! 第一个过程
        i2 s2 | y21@0 y22@1 y23@2 y24@3;   ! 第二个过程
        s1 ON i2;                          ! 过程2截距→过程1斜率
        s2 ON i1;                          ! 过程1截距→过程2斜率
```

**默认设置**：
- 截距因子：均值和方差估计，协方差估计
- 斜率因子：截距和残差方差估计，相关（残差相关）

### 示例 6.14：多指标线性增长模型（连续结果）

```mplus
MODEL: f1 BY y11 y21-y31 (1-2);      ! 时间1因子
        f2 BY y12 y22-y32 (1-2);      ! 时间2因子
        f3 BY y13 y23-y33 (1-2);      ! 时间3因子
        [y11 y12 y13] (3);            ! 等值截距
        [y21 y22 y23] (4);
        [y31 y32 y33] (5);
        i s | f1@0 f2@1 f3@2;         ! 对因子做增长
```

**说明**：
- 需要跨时间的测量等值性
- 使用标签(1-2)约束因子载荷等值
- 使用括号约束截距等值

### 示例 6.15：多指标线性增长模型（分类结果）

```mplus
VARIABLE: CATEGORICAL ARE u11 u21 u31 u12 u22 u32 u13 u23 u33;
MODEL: f1 BY u11 u21-u31 (1-2);
        f2 BY u12 u22-u32 (1-2);
        f3 BY u13 u23-u33 (1-2);
        [u11$1 u12$1 u13$1] (3);      ! 等值阈值
        [u21$1 u22$1 u23$1] (4);
        [u31$1 u32$1 u33$1] (5);
        {u11-u31@1 u12-u33};          ! 尺度因子
        i s | f1@0 f2@1 f3@2;
```

### 示例 6.16：两部分（半连续）增长模型

```mplus
DATA TWOPART:                       ! 创建二元+连续变量
        NAMES = y1-y4;
        BINARY = bin1-bin4;
        CONTINUOUS = cont1-cont4;
VARIABLE: CATEGORICAL = bin1-bin4;
        MISSING = ALL(999);
ANALYSIS: ESTIMATOR = MLR;
MODEL: iu su | bin1@0 bin2@1 bin3@2 bin4@3;    ! 二元部分
        iy sy | cont1@0 cont2@1 cont3@2 cont4@3;  ! 连续部分
        su@0; iu WITH sy@0;
```

**DATA TWOPART规则**：
1. 原值缺失 → 两个新变量都缺失
2. 原值 > 分割点（默认0）→ 二元=1，连续=log(原值)
3. 原值 ≤ 分割点 → 二元=0，连续=缺失

### 示例 6.17：一阶自相关残差的增长模型

```mplus
MODEL: i s | y1@0 y2@1 y3@2 y4@3;
        y1-y4 (resvar);               ! 等值残差方差
        y1-y3 PWITH y2-y4 (p1);       ! 相邻时间点协方差
        y1-y2 PWITH y3-y4 (p2);       ! 隔一个时间点协方差
        y1 WITH y4 (p3);              ! 首尾协方差
MODEL CONSTRAINT:
        NEW (corr);
        p1 = resvar*corr;             ! ρ
        p2 = resvar*corr**2;          ! ρ²
        p3 = resvar*corr**3;          ! ρ³
```

### 示例 6.18：多组多队列增长模型

```mplus
VARIABLE: GROUPING = g (1=1990 2=1989 3=1988);
MODEL: i s | y1@0 y2@.2 y3@.4 y4@.6;    ! 1990队列时间分数
        [i](1); [s](2); i(3); s(4); i WITH s(5);  ! 跨组等值
MODEL 1989:
        i s | y1@.1 y2@.3 y3@.5 y4@.7;    ! 1989队列时间分数
MODEL 1988:
        i s | y1@.2 y2@.4 y3@.6 y4@.8;    ! 1988队列时间分数
```

**时间分数计算**：(年龄差)/10，避免大值导致收敛问题

| 队列/测量时间 | 2000 | 2002 | 2004 | 2006 |
|--------------|------|------|------|------|
| 1988 (年龄)   | 12   | 14   | 16   | 18   |
| 1989 (年龄)   | 11   | 13   | 15   | 17   |
| 1990 (年龄)   | 10   | 12   | 14   | 16   |
| 时间分数      | 0    | 0.1  | 0.2  | 0.3  |

---

## 6.3 生存分析示例

### 示例 6.19：离散时间生存分析

```mplus
VARIABLE: CATEGORICAL = u1-u4;
        MISSING = ALL (999);
ANALYSIS: ESTIMATOR = MLR;
MODEL: f BY u1-u4@1;      ! 固定载荷=1（比例优势假设）
        f ON x;            ! 协变量影响
        f@0;               ! 固定残差方差为0
```

**数据编码**：
- 1 = 事件发生
- 0 = 事件未发生
- 缺失 = 事件已在之前发生或退出研究

### 示例 6.20：Cox回归模型（连续时间）

```mplus
VARIABLE: SURVIVAL = t;                    ! 生存时间变量
        TIMECENSORED = tc (0=NOT 1=RIGHT); ! 右删失
MODEL: t ON x;                             ! 对数线性回归
```

**说明**：使用轮廓似然法估计（Asparouhov et al., 2006）

### 示例 6.21：参数比例风险模型

```mplus
VARIABLE: SURVIVAL = t(20*1);    ! 20个时间间隔，长度1
        TIMECENSORED = tc (0=NOT 1=RIGHT);
ANALYSIS: BASEHAZARD = ON;       ! 基线风险作为模型参数
MODEL: [t#1-t#21];               ! 21个基线风险参数
        t ON x;
```

### 示例 6.22：含潜变量影响的生存分析

```mplus
VARIABLE: SURVIVAL = t (20*1);
        TIMECENSORED = tc;
        CATEGORICAL = u1-u4;
ANALYSIS: ALGORITHM = INTEGRATION;
        BASEHAZARD = ON;
MODEL: f BY u1-u4;               ! 测量因子
        [t#1-t#21];
        t ON x f;                ! 因子影响生存
        f ON x;
```

---

## 6.4 N=1时间序列分析示例

### 示例 6.23：AR(1)自回归模型

```mplus
VARIABLE: NAMES = y;
        LAGGED = y(1);           ! y的一阶滞后
ANALYSIS: ESTIMATOR = BAYES;
        PROCESSORS = 2;
        BITERATIONS = (2000);    ! 最小2000次迭代
MODEL: y ON y&1;                 ! &1表示滞后1期
OUTPUT: TECH1 TECH8;
PLOT: TYPE = PLOT3;
```

**滞后变量表示**：`y&1` = y在t-1时刻的值

**AR(2)模型**：
```mplus
VARIABLE: LAGGED = y(2);
MODEL: y ON y&1 y&2;             ! 或 y ON y&1@0 y&2; 仅滞后2期
```

### 示例 6.24：含协变量的AR(1)模型

```mplus
VARIABLE: NAMES ARE y x;
        LAGGED = y(1) x(1);      ! 两个变量都滞后1期
MODEL: y ON y&1 x x&1;           ! y对y的滞后、x、x的滞后回归
```

### 示例 6.25：双变量交叉滞后模型（VAR(1)）

```mplus
VARIABLE: NAMES = y1 y2;
        LAGGED = y1(1) y2(1);
MODEL: y1 ON y1&1 y2&1;          ! y1对自身滞后和y2滞后回归
        y2 ON y2&1 y1&1;          ! y2对自身滞后和y1滞后回归
```

**说明**：也称为一阶向量自回归模型（VAR(1)）

---

## 6.5 章节示例列表

### 增长模型示例（6.1-6.18）
- **6.1**：连续结果线性增长模型
- **6.2**：删失结果增长模型
- **6.3**：删失膨胀增长模型
- **6.4**：分类结果增长模型（Delta参数化）
- **6.5**：分类结果增长模型（Theta参数化）
- **6.6**：计数结果增长模型（Poisson）
- **6.7**：零膨胀Poisson增长模型
- **6.8**：估计时间分数的增长模型
- **6.9**：二次增长模型
- **6.10**：含时不变和时变协变量的增长模型
- **6.11**：分段增长模型
- **6.12**：个体变化观察时间和随机斜率
- **6.13**：双平行过程增长模型
- **6.14**：多指标线性增长模型（连续）
- **6.15**：多指标线性增长模型（分类）
- **6.16**：两部分（半连续）增长模型
- **6.17**：一阶自相关残差增长模型
- **6.18**：多组多队列增长模型

### 生存分析示例（6.19-6.22）
- **6.19**：离散时间生存分析
- **6.20**：Cox回归模型
- **6.21**：参数比例风险模型
- **6.22**：含潜变量影响的生存分析

### N=1时间序列分析示例（6.23-6.28）
- **6.23**：AR(1)自回归模型
- **6.24**：含协变量的AR(1)模型
- **6.25**：双变量交叉滞后模型
- **6.26**：AR(1) CFA模型（连续指标）
- **6.27**：AR(1) IRT模型（二元指标）
- **6.28**：双因子双变量交叉滞后模型

---

## 参考

- 来源：Mplus User's Guide, Chapter 6 (p.113-164)
- 版本：Version 8 (2017)
- 作者：Linda K. Muthén & Bengt O. Muthén
- 关键参考文献：
  - Olsen & Schafer (2001) - 两部分增长模型
  - Muthén & Masyn (2005) - 离散时间生存分析
  - Asparouhov et al. (2006) - 连续时间生存分析
  - Singer & Willett (2003) - Cox回归模型
  - Shumway & Stoffer (2011) - 时间序列分析
  - Larsen (2005) - 潜变量与生存分析
