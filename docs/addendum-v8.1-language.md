# Mplus Version 8.1 语言附录

本附录描述了 Version 8.1 中引入的变更，包括对自 2017 年 4 月发布 Version 8 以来发现的小问题的修正，以及以下新特性：

- 使用残差动态结构方程模型（RDSEM）进行密集纵向数据的时间序列分析（Asparouhov, Hamaker, & Muthén, 2018; Asparouhov & Muthén, 2018a）
- 对 DSEM、RDSEM 和其他 TYPE=TWOLEVEL 模型的随机斜率预测变量进行潜变量分解（潜变量中心化）（Asparouhov & Muthén, 2018b），如 Mplus Version 8 用户指南中示例 9.1 的随机截距模型所示
- 使用贝叶斯估计器对 DSEM 和其他 TYPE=TWOLEVEL 模型进行潜变量分解（潜变量中心化）的滞后分类结局和分类预测变量的随机斜率（Asparouhov & Muthén, 2018b）
- 自动检查两个结构方程模型是否嵌套或等价（Bentler & Satorra, 2010），并扩展到多组模型和加权最小二乘估计器（Asparouhov & Muthén, 2018c）
- 扩展和修改的 SRMR（Asparouhov & Muthén, 2018d）
- 加权最小二乘估计器的双变量残差检验和因子得分标准误
- TWOLEVEL 的聚类特定图
- 扩展的优势比输出
- 使用 OUTPUT 命令的 H1SE 选项进行 TYPE=BASIC 的相关性标准误

---

## 使用残差动态结构方程模型（RDSEM）进行密集纵向数据的时间序列分析

使用动态结构方程模型（DSEM; Asparouhov, Hamaker, & Muthén, 2018）对密集纵向数据进行时间序列分析，关注的是某一时间点上的结局变量对同一变量在一个或多个先前时间点上的回归。残差动态结构方程模型（RDSEM; Asparouhov, Hamaker, & Muthén, 2018; Asparouhov & Muthén, 2018a）关注的是某一时间点上的结局变量对同一时间点上一个或多个预测变量的回归。在 RDSEM 中，跨时间的自回归是针对结局的残差指定的。RDSEM 适用于 N=1 和两层多级模型。

### 回归分析

以下 RDSEM 示例基于 Mplus Version 8 用户指南中的 DSEM 示例 9.31。唯一的区别是 MODEL 命令中随机斜率 sy 的指定。在 DSEM 中，因变量 y 对因变量 y&1（即前一时刻的 y）进行回归。在 RDSEM 中，因变量 y 的残差（称为 y^）对前一时刻因变量 y 的残差（称为 y^1）进行回归。

```mplus
VARIABLE: NAMES = y x w xm subject;
WITHIN = x;
BETWEEN = w xm;
CLUSTER = subject;
LAGGED = y(1);
DEFINE: CENTER X (GROUPMEAN);
ANALYSIS: TYPE = TWOLEVEL RANDOM;
ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (2000);
MODEL: %WITHIN%
sy | y^ ON y^1; !DSEM: sy | y ON y&1;
sx | y ON x;
logv | y;
%BETWEEN%
y ON w xm;
sy ON w xm;
sx ON w xm;
logv ON w xm;
y sy sx logv WITH y sy sx logv;
```

在上述示例中，协变量 x 没有缺失数据。当协变量 x 有缺失数据时（这通常与 TINTERVAL 选项同时出现），任何在 x 上有一个或多个时间点缺失的观测值都不会用于分析。为避免这种情况，可以通过指定协变量 x 对先前时间点的自回归将其带入模型中。然后它被作为因变量处理，可以使用缺失数据理论。以下是在 RDSEM 上下文中指定 x 对先前时间点自回归的示例：

```mplus
x^ ON x^1;
```

在上述示例中，协变量 x 在 WITHIN 列表中，其聚类级变量 xm 在 BETWEEN 列表中。协变量 x 在 DEFINE 命令中进行组均值中心化。使用观测协变量 x 和 xm 的替代方法是对 x 进行潜变量分解（潜变量中心化），将其分解为潜在组内和组间成分，并在分析中使用这些成分（Asparouhov & Muthén, 2018b）。部分输入如下所示。WITHIN 选项和 DEFINE 命令被注释掉，聚类级 xm 变量不使用。在 MODEL 命令中，协变量 x 在模型的组内部分指 x 的潜在组内部分，在组间部分指 x 的潜在组间部分。

```mplus
VARIABLE: NAMES = y x w xm subject;
USEVARIABLES = y x w;
! WITHIN = x;
BETWEEN = w;
CLUSTER = subject;
LAGGED = y(1);
!DEFINE: CENTER X (GROUPMEAN);
ANALYSIS: TYPE = TWOLEVEL RANDOM;
ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (2000);
MODEL: %WITHIN%
sy | y^ ON y^1;
sx | y ON x;
logv | y;
%BETWEEN%
y ON w x;
sy ON w x;
sx ON w x;
logv ON w x;
w WITH x;
y sy sx logv WITH y sy sx logv;
```

### 因子分析

以下 RDSEM 示例基于 Mplus Version 8 用户指南中的 DSEM 示例 9.34。有四个区别：添加了协变量 x、因子 f 对协变量 x 的随机斜率回归、指定因子 f 残差的自回归，以及指定因子指标 y1 到 y4 残差的自回归。对协变量 x 进行潜变量分解（潜变量中心化）。

```mplus
VARIABLE: NAMES = y1-y4 x subject;
CLUSTER = subject;
LAGGED = y1-y4 (1);
ANALYSIS: TYPE = TWOLEVEL RANDOM;
ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (2000);
MODEL: %WITHIN%
f BY y1-y4(&1);
s | f ON x;
f^ ON f^1;
y1^-y4^ PON y1^1 - y4^1;
logv | f;
%BETWEEN%
fb BY y1-y4*;
fb@1;
fb s logv ON x;
fb s logv WITH fb s logv;
```

### 线性趋势分析

以下 RDSEM 示例基于 Mplus Version 8 用户指南中的 DSEM 示例 9.37。唯一的区别是 MODEL 命令中随机斜率 sy 的指定。在 RDSEM 中，因变量 y 的残差（称为 y^）对前一时刻因变量 y 的残差（称为 y^1）进行回归。

```mplus
VARIABLE: NAMES = y x w xm time subject;
WITHIN = x time;
BETWEEN = w xm;
CLUSTER = subject;
LAGGED = y(1);
DEFINE: CENTER x (GROUPMEAN);
ANALYSIS: TYPE = TWOLEVEL RANDOM;
ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (10000);
MODEL: %WITHIN%
sy | y^ ON y^1;
sx | y ON x;
s | y ON time;
logv | y;
%BETWEEN%
sy ON w xm;
sx ON w xm;
s ON w xm;
logv ON w xm;
y ON w xm;
sy-logv y WITH sy-logv y;
```

---

## 使用潜变量分解（潜变量中心化）的滞后分类结局和分类预测变量的随机斜率

以下 DSEM 示例展示了一个具有滞后分类结局和具有随机斜率的分类预测变量的模型，对结局和预测变量都使用潜变量分解（潜变量中心化）（Asparouhov & Muthén, 2018b）。

```mplus
VARIABLE: NAMES = y x w xm subject;
USEVARIABLES = y x w;
CATEGORICAL = y x;
BETWEEN = w;
CLUSTER = subject;
LAGGED = y(1);
ANALYSIS: TYPE = TWOLEVEL RANDOM;
ESTIMATOR = BAYES;
PROCESSORS = 2;
BITERATIONS = (2000);
MODEL: %WITHIN%
sy | y ON y&1;
sx | y ON x;
%BETWEEN%
y ON w x;
sy ON w x;
sx ON w x;
w WITH x;
y sy sx WITH y sy sx;
```

---

## 自动检查两个结构方程模型是否嵌套或等价

自动检查两个结构方程模型是否嵌套或等价（Bentler & Satorra, 2010）已被实现并扩展到多组模型和加权最小二乘估计器（Asparouhov & Muthén, 2018c）。此检查分两步进行。

第一步用于嵌套模型，使用 SAVEDATA 命令的 NESTED 选项运行 H0 模型（参数最少的限制模型）：

```mplus
SAVEDATA:
NESTED IS nested.dat;
```

其中 nested.dat 是保存模型估计均值、方差和协方差的文件，用于第二步作为样本统计量。

第二步用于嵌套模型，使用 ANALYSIS 命令的 NESTED 选项运行 H1 模型（参数最多的限制最少模型）：

```mplus
ANALYSIS:
NESTED IS nested.dat;
```

对于参数数量相同的等价模型，顺序无关紧要。

结果显示模型是嵌套的、非嵌套的、等价的，还是无法得出结论。

---

## 参考文献

- Asparouhov, T., Hamaker, E.L. & Muthén, B. (2018). Dynamic structural equation models. *Structural Equation Modeling: A Multidisciplinary Journal*, 25:3, 359-388.

- Asparouhov, T. & Muthén, B. (2018a). Comparison of DSEM and RDSEM. Technical appendix. Los Angeles: Muthén & Muthén.

- Asparouhov, T. & Muthén, B. (2018b). Latent variable centering of predictor and mediator variables in multilevel and time series models. Technical appendix. Los Angeles: Muthén & Muthén.

- Asparouhov, T. & Muthén, B. (2018c). Nesting and equivalence testing in Mplus. Technical appendix. Los Angeles: Muthén & Muthén.

- Asparouhov, T. & Muthén, B. (2018d). SRMR in Mplus. Technical appendix. Los Angeles: Muthén & Muthén.

- Bentler, P. & Satorra, A. (2010). Testing model nesting and equivalence. *Psychological Methods*, 15, 111-123.
