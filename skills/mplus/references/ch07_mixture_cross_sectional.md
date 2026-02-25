# Chapter 7: Mixture Modeling with Cross-Sectional Data

## 7.1 概述

### 混合模型（Mixture Modeling）
混合模型使用分类潜变量来表示子群体（亚总体），群体成员身份未知，但从数据中推断。这被称为**有限混合建模（finite mixture modeling）**。

### 潜类别分析（LCA）
LCA是混合模型的一个特例，潜类别解释观察因变量之间的关系，类似于因子分析。与因子分析不同的是，LCA提供了个体分类。

### 支持的变量类型
- 连续变量（continuous）
- 删失变量（censored）
- 二元/有序分类变量（binary/ordinal）
- 无序分类变量（nominal）
- 计数变量（counts）
- 上述类型的组合

### 一般混合模型的两个部分
1. **测量模型**：描述观察因变量与分类潜变量之间的关系
2. **结构模型**：描述分类潜变量之间的关系、观察变量之间的关系、分类潜变量与非潜类别指标的观察变量之间的关系

### 估计方法
- 使用**最大似然估计**
- 为避免局部解，自动生成不同的起始值集合，报告似然值最佳的解

### 特殊功能
- 单组或多组分析
- 缺失数据处理
- 复杂调查数据
- 潜变量交互和非线性因子分析
- 随机斜率
- 线性和非线性参数约束
- 间接效应
- Bootstrap标准误和置信区间
- Wald卡方检验

---

## 7.2 混合回归分析

### 示例 7.1：连续因变量的混合回归（自动起始值）

```mplus
VARIABLE: CLASSES = c (2);           ! 定义2个潜类别
ANALYSIS: TYPE = MIXTURE;
MODEL:
    %OVERALL%                       ! 总体模型（所有类别共有）
        y ON x1 x2;                 ! y对协变量回归
        c ON x1;                    ! 分类潜变量对协变量的多项逻辑回归
    %c#2%                          ! 类别2特定模型
        y ON x2;                    ! 类别2中释放x2斜率的等值约束
        y;                          ! 释放残差方差的等值约束
```

**说明**：
- `c` 指向 `y`：y的截距跨类别变化
- `c` 指向 `x2→y` 的箭头：回归斜率跨类别变化
- `TYPE = MIXTURE`：启用混合模型分析

**起始值机制**：
- 初始阶段：生成20组随机起始值，每组优化10次迭代
- 最终阶段：选择似然最高的4组进行完整优化
- 使用 `STARTS` 和 `STITERATIONS` 选项可更彻底地调查多个解

### 示例 7.2：计数变量的混合回归（零膨胀Poisson）

```mplus
VARIABLE: COUNT = u (i);             ! i=零膨胀Poisson模型
MODEL:
    %OVERALL%
        u ON x1 x2;                 ! Poisson回归部分
        u#1 ON x1 x2;               ! 膨胀部分（逻辑回归）
        c ON x1;
    %c#2%
        u ON x2;                    ! 类别2释放Poisson斜率
```

**说明**：
- `u#1`：二元潜膨胀变量，表示无法取零以外值的概率

---

## 7.3 潜类别分析（LCA）

### 示例 7.3：二元潜类别指标（自动起始值）

```mplus
VARIABLE: CLASSES = c (2);
        CATEGORICAL = u1-u4;        ! 二元潜类别指标
        AUXILIARY = x1-x10 (R3STEP); ! 辅助变量（三步法）
ANALYSIS: TYPE = MIXTURE;
OUTPUT: TECH1 TECH8 TECH10;
```

**说明**：
- 不指定MODEL命令时，使用自动起始值
- 默认估计阈值和分类潜变量的均值
- `TECH10`：请求分类变量的拟合信息
- `R3STEP`：三步法分析协变量

### 示例 7.4：用户指定起始值（无随机起始）

```mplus
ANALYSIS: TYPE = MIXTURE;
        STARTS = 0;                 ! 关闭随机起始
MODEL:
    %OVERALL%
    %c#1%
        [u1$1*1 u2$1*1 u3$1*-1 u4$1*-1];  ! 类别1阈值起始值
    %c#2%
        [u1$1*-1 u2$1*-1 u3$1*1 u4$1*1];  ! 类别2阈值起始值
```

**说明**：
- `*` 后数字为起始值
- `$1` 表示第一个阈值（二元变量只有一个）
- 方括号表示阈值

### 示例 7.5：用户指定起始值（带随机起始）

```mplus
ANALYSIS: TYPE = MIXTURE;
        STARTS = 100 10;            ! 100组初始起始值，10次最终优化
        STITERATIONS = 20;          ! 初始阶段20次迭代
```

### 示例 7.6：三分类潜类别指标

```mplus
MODEL:
    %c#1%
        [u1$1*.5 u2$1*.5];          ! 第一个阈值起始值
        [u1$2*1 u2$2*1];            ! 第二个阈值起始值（必须递增）
    %c#2%
        [u1$1*-.5 u2$1*-.5];
        [u1$2*0 u2$2*0];
```

**说明**：每个指标有两个阈值（3类别-1=2）

### 示例 7.7：无序分类潜类别指标

```mplus
VARIABLE: NOMINAL = u1-u4;          ! 指定无序分类变量
```

**说明**：类别使用 `#数字` 表示，如 `u1#1`、`u1#2`

### 示例 7.8：无序分类指标（用户起始值）

```mplus
MODEL:
    %c#1%
        [u1#1-u4#1*0];              ! 类别1第一类别均值
        [u1#2-u4#2*1];              ! 类别1第二类别均值
    %c#2%
        [u1#1-u4#1*-1];
        [u1#2-u4#2*-1];
```

### 示例 7.9：连续潜类别指标（潜剖面分析）

```mplus
VARIABLE: CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
```

**默认设置**：
- 估计潜类别指标的均值和方差
- 均值不跨类别等值（默认）
- 方差跨类别等值（默认）
- 协方差固定为0（默认）

### 示例 7.10：连续指标（用户起始值）

```mplus
MODEL:
    %c#1%
        [y1-y4*1];                  ! 均值起始值
        y1-y4;                      ! 释放方差等值约束
    %c#2%
        [y1-y4*-1];
        y1-y4;
```

### 示例 7.11：混合变量类型的LCA

```mplus
VARIABLE: CATEGORICAL = u1;         ! 二元变量
        CENSORED = y1 (b);          ! b=从下方删失
        NOMINAL = u2;               ! 无序分类变量
        COUNT = u3 (i);             ! i=零膨胀计数
MODEL:
    %c#1%
        [u1$1*-1 y1*3 u2#1*0 u2#2*1 u3*.5 u3#1*1.5];
        y1*2;                       ! 删失变量的残差方差
```

---

## 7.4 含协变量的LCA

### 示例 7.12：含协变量和直接效应的LCA

```mplus
MODEL:
    %OVERALL%
        c ON x;                     ! c对x的多项逻辑回归
        u4 ON x;                    ! 直接效应（u4对x的逻辑回归）
```

**说明**：`u4 ON x` 是协变量对指标的直接影响，默认跨类别等值

---

## 7.5 验证性LCA

### 示例 7.13：含参数约束的验证性LCA

```mplus
MODEL:
    %OVERALL%
    %c#1%
        [u1$1*-1];
        [u2$1-u3$1*-1] (1);         ! u2和u3为平行测量
        [u4$1*-1] (p1);
    %c#2%
        [u1$1@-15];                 ! u1在类别2中概率为1
        [u2$1-u3$1*1] (2);
        [u4$1*1] (p2);
MODEL CONSTRAINT:
        p2 = -p1;                   ! u4错误率在两类别中相同
```

### 示例 7.14：两个分类潜变量的验证性LCA

```mplus
VARIABLE: CLASSES = cu (2) cy (3);   ! 两个分类潜变量
ANALYSIS: TYPE = MIXTURE;
        PARAMETERIZATION = LOGLINEAR;
MODEL:
    %OVERALL%
        cu WITH cy;                 ! 两个潜变量相关
MODEL cu:
    %cu#1%
        [u1$1-u4$1];                ! cu的指标
MODEL cy:
    %cy#1%
        [y1-y4];                    ! cy的指标（连续）
```

**说明**：`MODEL 潜变量名:` 用于指定多个分类潜变量的模型

---

## 7.6 对数线性模型

### 示例 7.15：三维表的对数线性模型

```mplus
VARIABLE: FREQWEIGHT = w;           ! 频数权重
        CATEGORICAL = u1-u3;
        CLASSES = c1 (2) c2 (2) c3 (2);
ANALYSIS: TYPE = MIXTURE;
        STARTS = 0;
        PARAMETERIZATION = LOGLINEAR;
MODEL:
    %OVERALL%
        c1 WITH c3;
        c2 WITH c3;                 ! 条件独立性：c1与c2独立，给定c3
MODEL c1:
    %c1#1%
        [u1$1@15];                  ! 完美测量（阈值±15）
    %c1#2%
        [u1$1@-15];
```

### 示例 7.16：部分条件独立性的LCA

```mplus
ANALYSIS: PARAMETERIZATION = RESCOVARIANCES;
MODEL:
    %OVERALL%
    %c#1%
        [u1$1-u4$1*-1];
        u2 WITH u3;                 ! 类别1中u2与u3残差协方差
```

---

## 7.7 混合CFA和SEM

### 示例 7.17：混合CFA建模

```mplus
MODEL:
    %OVERALL%
        f BY y1-y5;
    %c#1%
        [f*1];                      ! 类别1中因子均值（类别2默认为0）
```

**说明**：允许因子分布非正态，因子均值跨类别变化

### 示例 7.18：含二阶因子的LCA（双生子分析）

```mplus
VARIABLE: CLASSES = c1(2) c2(2);     ! 两个一阶分类潜变量
ANALYSIS: TYPE = MIXTURE;
        ALGORITHM = INTEGRATION;
MODEL:
    %OVERALL%
        f BY;                       ! 命名二阶连续潜变量
        f@1;
        c1 c2 ON f*1 (1);           ! 等值约束（双生子关联强度）
MODEL c1:
    %c1#1%
        [u11$1-u13$1*-1];
```

**说明**：
- `c1` = 双生子1的潜类别
- `c2` = 双生子2的潜类别
- `f` = 二阶连续潜变量（关联强度）

### 示例 7.19：分类潜变量对连续潜变量的回归

```mplus
MODEL:
    %OVERALL%
        f BY u1-u4;                 ! 连续潜变量测量
        c ON f;                     ! 分类潜变量对连续潜变量的回归
    %c#1%
        [u5$1-u8$1];                ! c的潜类别指标
```

### 示例 7.20：结构方程混合模型

```mplus
MODEL:
    %OVERALL%
        f1 BY y1-y3;
        f2 BY y4-y6;
        f2 ON f1;                   ! f2对f1的回归
    %c#1%
        [f1*1 f2];                  ! 释放f1均值和f2截距
        f2 ON f1;                   ! 释放回归斜率
```

**说明**：
- `c→f1`：f1均值跨类别变化
- `c→f2`：f2截距跨类别变化
- `c→(f1→f2)`：回归斜率跨类别变化

---

## 7.8 多组分析和已知类别

### 示例 7.21：已知类别（多组分析）

```mplus
VARIABLE: CLASSES = cg (2) c (2);    ! cg=已知类别，c=未知潜类别
        KNOWNCLASS = cg (g = 0 g = 1);  ! g为分组变量
MODEL:
    %OVERALL%
        c ON cg;                    ! 潜类别对已知类别的回归
MODEL c:
    %c#1%
        [y1-y4];                    ! 均值跨潜类别变化
MODEL cg:
    %cg#1%
        y1-y4;                      ! 方差跨已知类别变化
```

**说明**：`KNOWNCLASS` 用于指定已知类别成员身份的分类潜变量

### 示例 7.22：类别内相关的多元正态混合模型

```mplus
MODEL:
    %OVERALL%
        y1 WITH y2-y4;              ! 类别内协方差（默认跨类别等值）
        y2 WITH y3 y4;
        y3 WITH y4;
    %c#2%
        [y1-y4*-1];                 ! 起始值
    %c#3%
        [y1-y4*1];
```

---

## 7.9 随机试验和CACE估计

### 示例 7.23：使用训练数据的CACE估计

```mplus
VARIABLE: TRAINING = c1 c2;         ! 训练数据变量
MODEL:
    %OVERALL%
        y ON x1 x2;                 ! x2=处理虚拟变量
        c ON x1;                    ! 依从状态对协变量回归
    %c#1%                          ! 不依从者
        [y];
        y;                          ! 释放残差方差
        y ON x2@0;                  ! 不依从者不接受处理
    %c#2%                          ! 依从者
        [y*.5];
        y;
```

**训练数据编码**：
- 处理组不依从者：c1=1, c2=0
- 处理组依从者：c1=0, c2=1
- 对照组：c1=1, c2=1（允许属于任一类别）

### 示例 7.24：使用潜类别指标的CACE估计

```mplus
VARIABLE: CATEGORICAL = u;          ! 二元潜类别指标（依从状态）
        MISSING = u (999);          ! 对照组缺失
MODEL:
    %c#1%
        [u$1@15];                   ! 类别1：完美测量不依从
        y ON x2@0;
    %c#2%
        [u$1@-15];                  ! 类别2：完美测量依从
```

---

## 7.10 其他混合模型

### 示例 7.25：两类别零膨胀Poisson回归

```mplus
VARIABLE: COUNT IS u1;              ! 不指定膨胀
MODEL:
    %OVERALL%
        u1 ON x1 x3;
        c ON x1 x3;                 ! 类别成员对协变量回归
    %c#1%
        [u1@-15];                   ! 低log率（概率为0）
        u1 ON x1@0 x3@0;            ! 无变异，斜率固定为0
```

**说明**：类别1包含只能取0的个体，类别2包含Poisson分布个体

### 示例 7.26：非正态因子分布的非参数表示

```mplus
VARIABLE: CLASSES = c (3);
MODEL:
    %OVERALL%
        f BY y1-y5;
        f@0;                        ! 因子方差固定为0
```

**说明**：
- 潜类别表示非正态性，而非实质性异质性
- 因子分布用直方图表示，类别数=直方图条数
- 也称半参数建模

### 示例 7.27：因子（IRT）混合分析

```mplus
ANALYSIS: TYPE = MIXTURE;
        ALGORITHM = INTEGRATION;
        STARTS = 100 20;
MODEL:
    %OVERALL%
        f BY u1-u8;
        [f@0];                      ! 因子均值固定为0
    %c#1%
        f BY u1@1 u2-u8;            ! 类别特定因子载荷
        f;                          ! 类别特定因子方差
        [u1$1-u8$1];                ! 类别特定阈值
```

**说明**：
- 放松LCA的条件独立性假设
- 因子表示类别内响应概率的个体差异
- 也称IRT混合模型

### 示例 7.28：分类结果的双组双生子模型

```mplus
VARIABLE: CATEGORICAL = u1 u2;
        CLASSES = cdz (2);
        KNOWNCLASS = cdz (dz = 0 dz = 1);  ! 0=MZ, 1=DZ
ANALYSIS: TYPE = MIXTURE;
        ALGORITHM = INTEGRATION;
        LINK = PROBIT;              ! Probit链接
MODEL:
    %OVERALL%
        [u1$1-u2$1] (1);            ! 阈值等值
        f1 BY u1;                   ! 每结果一个因子
        f2 BY u2;
        [f1-f2@0];                  ! 因子均值固定为0
        f1-f2 (varf);               ! 因子方差等值
    %cdz#1%
        f1 WITH f2(covmz);          ! MZ协方差
    %cdz#2%
        f1 WITH f2(covdz);          ! DZ协方差
MODEL CONSTRAINT:
        NEW(a c h);
        varf = a**2 + c**2 + .001;
        covmz = a**2 + c**2;
        covdz = 0.5*a**2 + c**2;
        h = a**2/(a**2 + c**2 + 1); ! 遗传度
```

**说明**：
- 使用**责任阈值模型（threshold model for liabilities）**
- ACE方差和协方差约束应用于正态分布的潜响应变量
- `.001` 避免奇异协方差矩阵

---

## 7.11 章节示例列表

### 混合回归分析（7.1-7.2）
- **7.1**：连续因变量混合回归（自动起始值）
- **7.2**：计数变量混合回归（零膨胀Poisson）

### 潜类别分析基础（7.3-7.11）
- **7.3**：二元指标LCA（自动起始值）
- **7.4**：二元指标LCA（用户起始值，无随机起始）
- **7.5**：二元指标LCA（用户起始值，有随机起始）
- **7.6**：三分类指标LCA
- **7.7**：无序分类指标LCA（自动起始值）
- **7.8**：无序分类指标LCA（用户起始值）
- **7.9**：连续指标LCA/潜剖面分析（自动起始值）
- **7.10**：连续指标LCA（用户起始值）
- **7.11**：混合变量类型LCA

### 含协变量和约束的LCA（7.12-7.16）
- **7.12**：含协变量和直接效应的LCA
- **7.13**：验证性LCA（参数约束）
- **7.14**：两个分类潜变量的验证性LCA
- **7.15**：三维表对数线性模型
- **7.16**：部分条件独立性LCA

### 混合CFA和SEM（7.17-7.20）
- **7.17**：混合CFA建模
- **7.18**：含二阶因子的LCA（双生子分析）
- **7.19**：分类潜变量对连续潜变量回归
- **7.20**：结构方程混合模型

### 多组分析和特殊应用（7.21-7.30）
- **7.21**：已知类别（多组分析）
- **7.22**：类别内相关的多元正态混合模型
- **7.23**：CACE估计（训练数据）
- **7.24**：CACE估计（潜类别指标缺失）
- **7.25**：两类别零膨胀Poisson回归
- **7.26**：非正态因子分布的非参数表示
- **7.27**：因子（IRT）混合分析
- **7.28**：分类结果双组双生子模型（ML约束）
- **7.29**：分类指标IRT双生子模型（约束）
- **7.30**：连续时间生存分析（Cox回归估计处理效应）

---

## 参考

- 来源：Mplus User's Guide, Chapter 7 (p.165-220)
- 版本：Version 8 (2017)
- 作者：Linda K. Muthén & Bengt O. Muthén
- 关键参考文献：
  - McLachlan & Peel (2000) - 有限混合模型
  - Muthén (2008) - 混合模型概述
  - McCutcheon (2002) - 验证性LCA
  - Little & Yau (1998) - CACE估计
  - Neale & Cardon (1992) - 双生子模型
  - Aitkin (1999) - 半参数建模
