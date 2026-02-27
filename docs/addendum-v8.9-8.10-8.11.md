# Versions 8.9, 8.10, and 8.11 Mplus Language Addendum

在本补充说明中，描述了 Versions 8.9、8.10 和 8.11 中引入的变更。这些变更包括自 2022年4月 Version 8.8、2023年2月 Version 8.9 和 2023年6月 Version 8.10 发布以来发现的新特性和对 minor 问题的修正。

---

## 版本 8.9 的新特性

- 现在可以使用 ANALYSIS 命令的 MODEL 选项自动测试单组纵向模型的测量不变性（measurement invariance）。
- 对齐分析（Alignment）现在可用于单组纵向模型（Asparouhov & Muthén, 2023a, Section 5.3）。
- 多组对齐分析已通过允许 SEM 和提供标准化结果得到扩展（Asparouhov & Muthén, 2022）。
- ALIGNMENT=FIXED 新增设置用于选择最优参考组或时间点，设置使用星号（*）符号。
- 新增一种称为惩罚结构方程建模（Penalized Structural Equation Modeling, PSEM）的方法。PSEM 使用对齐损失函数（Alignment Loss Function, ALF）先验进行最大似然估计，可以改善 EFA、SEM、多组对齐和纵向对齐等模型的估计（Asparouhov & Muthén, 2023a）。
- 随机相关（Random correlations）现在可用于连续、二元、有序分类（ordinal）变量或这些变量类型的组合，适用于 TYPE=TWOLEVEL 和 TYPE=CROSSCLASSIFIED 且 ESTIMATOR=BAYES 的情况（Asparouhov & Muthén, 2023b, Section 9.1）。
- 新增 DSEM 特性，包括随机相关以及对 TINTERVAL、SAVEDATA、MONTECARLO 和绘图的更改。详见 Mplus Web Talk No. 6。

---

## 版本 8.10 的新特性

- 在纵向测量不变性的自动测试中增加了残差协方差（residual covariances）、残差自回归（residual auto-regressions）和随机截距（random intercepts）。
- PSEM 现在可用于使用加权最小二乘估计的分类变量（Asparouhov & Muthén, 2023a）。
- 新增 PSEM 惩罚函数：LASSO 和 GEOMIN。
- 使用 ALIGNMENT 时增加了 DIFF 先验的额外输出。
- 允许在 ESEM 中使用 Hat (^) 语言。
- 新增组间直方图，用于显示具有显著性颜色标记的聚类特定随机效应。

---

## 版本 8.11 的新特性

- DSEM（动态结构方程建模）的密集纵向数据分类结果现在可用于 TYPE=CROSSCLASSIFIED。应用示例见 Muthén, Asparouhov 和 Shiffman (2024)。
- RDSEM（残差动态结构方程建模）现在可用于 TYPE=CROSSCLASSIFIED。应用示例见 Muthén, Asparouhov 和 Keijsers (2024) 以及 Muthén, Asparouhov 和 Shiffman (2024)。
- 连续时间残差动态结构方程建模（Continuous-Time Residual Dynamic Structural Equation Modeling, CT-RDSEM）可用于 TYPE=TWOLEVEL 和 TYPE=TWOLEVEL RANDOM，使用 VARIABLE 命令的 CTIME 选项指定时间变量，使用 PLOT 命令的 DRIFT 选项绘制自回归曲线（Asparouhov & Muthén, 2024）。
- SAVEDATA 命令新增 H5RESULTS 选项，用于将分析结果保存到 H5 文件，该文件可在 R 中用于创建 R 数据框，可能与 MplusAutomation 包连接。
- DEFINE 命令的 CLUSTER_MEAN 选项现在可用于 TYPE=THREELEVEL 和 TYPE=CROSSCLASSIFIED。

---

## 测量不变性测试（TESTING FOR MEASUREMENT INVARIANCE）

ANALYSIS 命令的 MODEL 选项用于自动测试多组模型和单组纵向模型的测量不变性。对于多组模型，使用 GROUPING 选项或 KNOWNCLASS 选项。

测量不变性测试可用于：
- 连续变量：使用最大似然和 Bayes 估计量的 CFA 和 ESEM 模型
- 删失变量：使用加权最小二乘和最大似然估计量
- 二元和有序分类（ordinal）变量：使用加权最小二乘、最大似然和 Bayes 估计量
- 计数变量：使用最大似然估计量

不适用于：删失膨胀（censored-inflated）、计数膨胀（count-inflated）、名义变量、连续时间生存、负二项变量或变量类型的组合。

MODEL 命令只能包含一阶因子的 BY 语句。因子的度量可以通过在每个组/时间点将因子载荷固定为1来设置，也可以通过在一个组/时间点将因子方差固定为1来设置。不允许部分测量不变性。

MODEL 选项有三个用于测试测量不变性的设置：CONFIGURAL、METRIC 和 SCALAR。这些设置可以单独使用来设置特定模型，也可以一起使用来测试模型的测量不变性。

- **CONFIGURAL**：产生在所有组/时间点具有相同因子数量和相同零因子载荷模式的模型
- **METRIC**：产生因子载荷在组/时间点之间保持相等的模型
- **SCALAR**：产生因子载荷和截距/阈值在组/时间点之间保持相等的模型

### 使用 MODEL 选项测试测量不变性

```mplus
MODEL = CONFIGURAL METRIC SCALAR;
```

这指定将估计 configural、metric 和 scalar 模型，并对模型进行差异检验。

### 测试纵向测量不变性

对于测试纵向测量不变性，使用特定时间的 MODEL 命令和总体 MODEL 命令来描述分析模型。特定时间的 MODEL 命令用于指定要测试测量不变性的因子模型。必须为每个时间点指定特定时间的 MODEL 命令，且每个特定时间 MODEL 命令的因子指标顺序必须相同。

特定时间的 MODEL 命令标记为 t1 表示第一个时间点，t2 表示第二个时间点，等等。

**示例：在三个时间点测量因子的特定时间 MODEL 命令**

```mplus
MODEL t1:
  F1 BY y11 y12 y13;

MODEL t2:
  F2 BY y21 y22 y23;

MODEL t3:
  F3 BY y31 y32 y33;
```

总体 MODEL 命令用于指定跨时间的关系，如残差协方差、残差自回归和随机截距。

**示例：指定跨时间的残差协方差**

```mplus
MODEL:
  y11 WITH y21;
  y21 WITH y31;
  y12 WITH y22;
  y22 WITH y32;
  y13 WITH y23;
  y23 WITH y33;
```

---

## 用于测试测量不变性的模型

### 连续、删失和计数变量的模型

以下模型按限制程度从低到高列出。

**Configural 模型：**
- 因子载荷、截距和残差方差在组/时间点之间自由
- 因子均值在所有组/时间点固定为零
- 如果通过将因子载荷固定为1来设置因子度量，则因子方差在组/时间点之间自由
- 如果通过释放所有因子载荷并将因子方差固定为1来设置因子度量，则因子方差在所有组/时间点固定为1

**Metric 模型：**
- 因子载荷约束为在组/时间点之间相等
- 截距和残差方差在组/时间点之间自由
- 因子均值在所有组/时间点固定为零

**Scalar 模型：**
- 因子载荷和截距约束为在组/时间点之间相等
- 残差方差在组/时间点之间自由
- 因子均值在一个组/时间点固定为零，在其他组/时间点自由

### 二元变量的模型

**加权最小二乘估计 - Delta 参数化：**

对于使用加权最小二乘估计和 Delta 参数化的二元变量，只考虑 configural 和 scalar 模型。Metric 模型不可识别，因为尺度因子或残差方差允许在组/时间点之间变化。

**Configural 模型：**
- 因子载荷和阈值在组/时间点之间自由
- 尺度因子在所有组/时间点固定为1
- 因子均值在所有组/时间点固定为零

**Scalar 模型：**
- 因子载荷和阈值约束为在组/时间点之间相等
- 尺度因子在一个组/时间点固定为1，在其他组/时间点自由
- 因子均值在一个组/时间点固定为零，在其他组/时间点自由

**加权最小二乘估计 - Theta 参数化：**

**Configural 模型：**
- 因子载荷和阈值在组/时间点之间自由
- 残差方差在所有组/时间点固定为1
- 因子均值在所有组/时间点固定为零

**Scalar 模型：**
- 因子载荷和阈值约束为在组/时间点之间相等
- 残差方差在一个组/时间点固定为1，在其他组/时间点自由
- 因子均值在一个组/时间点固定为零，在其他组/时间点自由

**最大似然和 Bayes 估计：**

对于二元变量和最大似然估计，考虑 configural、metric 和 scalar 模型。Metric 模型是可识别的，因为残差方差隐式地在所有组/时间点固定为1。

**Configural 模型：**
- 因子载荷和阈值在组/时间点之间自由
- 因子均值在所有组/时间点固定为零

**Metric 模型：**
- 因子载荷约束为在组/时间点之间相等
- 阈值在组/时间点之间自由
- 因子均值在所有组/时间点固定为零

**Scalar 模型：**
- 因子载荷和阈值约束为在组/时间点之间相等
- 因子均值在一个组/时间点固定为零，在其他组/时间点自由

### 有序分类（Ordinal）变量的模型

**加权最小二乘估计 - Delta 参数化：**

对于有序分类变量和加权最小二乘估计，只考虑 configural 和 scalar 模型。Metric 模型不可识别（Wu & Estabrook, 2016）。

**Configural 模型：**
- 因子载荷和阈值在组/时间点之间自由
- 尺度因子在所有组/时间点固定为1
- 因子均值在所有组/时间点固定为零

**Scalar 模型：**
- 因子载荷和阈值约束为在组/时间点之间相等
- 尺度因子在一个组/时间点固定为1，在其他组/时间点自由
- 因子均值在一个组/时间点固定为零，在其他组/时间点自由

**加权最小二乘估计 - Theta 参数化：**

**Configural 模型：**
- 因子载荷和阈值在组/时间点之间自由
- 残差方差在所有组/时间点固定为1
- 因子均值在所有组/时间点固定为零

**Scalar 模型：**
- 因子载荷和阈值约束为在组/时间点之间相等
- 残差方差在一个组/时间点固定为1，在其他组/时间点自由
- 因子均值在一个组/时间点固定为零，在其他组/时间点自由

**最大似然和 Bayes 估计：**

对于有序分类变量和最大似然估计，考虑 configural、metric 和 scalar 模型。Metric 模型是可识别的，因为残差方差隐式地在所有组/时间点固定为1。

**Configural 模型：**
- 因子载荷和阈值在组/时间点之间自由
- 因子均值在所有组/时间点固定为零

**Metric 模型：**
- 因子载荷约束为在组/时间点之间相等
- 阈值在组/时间点之间自由
- 因子均值在所有组/时间点固定为零

**Scalar 模型：**
- 因子载荷和阈值约束为在组/时间点之间相等
- 因子均值在一个组/时间点固定为零，在其他组/时间点自由

---

## 对齐分析（ALIGNMENT）

ALIGNMENT 选项用于多组和纵向模型，以评估测量不变性并比较因子均值、方差和结构参数在组（Asparouhov & Muthén, 2014, 2023c）和时间（Asparouhov & Muthén, 2023a, Section 5.3）之间的差异。

当有许多组或时间点时最有用，如国际学生评估项目（PISA）、国际数学和科学研究趋势（TIMSS）、国际阅读素养进展研究（PIRLS）等国家成就比较，以及国际社会调查项目（ISSP）和欧洲社会调查（ESS）等跨文化研究。

可用于多组和纵向模型，当所有变量为连续或二元时使用 ML、MLR、MLF 和 BAYES 估计量，当所有变量为有序分类时使用 ML、MLR、MLF 和 WLSMV 估计量。

ALIGNMENT 选项有两个设置：FIXED 和 FREE。
- **FIXED**：参考组中因子均值固定为零
- **FREE**：估计所有因子均值

FREE 是最通用的方法。当因子载荷非不变性较少时（可能在组数较少时发生），建议使用 FIXED。

ALIGNMENT 选项有两个子设置，一个用于指定参考组，另一个用于指定对齐优化第一步中使用的模型类型。参考组的默认设置是第一个组/时间点。还有一个星号（*）设置可选择最优参考组（Asparouhov & Muthén, 2023c）。星号（*）设置不适用于纵向对齐。模型类型的默认设置是 CONFIGURAL。替代设置是 BSEM，其中使用 Bayes 先验指定测量参数的近似不变性（Muthén & Asparouhov, 2013）。BSEM 设置不适用于纵向对齐。

子设置在 FIXED 或 FREE 设置后的括号中指定。

**示例：**

```mplus
ALIGNMENT = FREE;
```

其中默认参考组是第一个组/时间点，默认模型是 CONFIGURAL。

等效写法：

```mplus
ALIGNMENT = FREE (1 CONFIGURAL);
```

---

## 惩罚结构方程建模（PENALIZED STRUCTURAL EQUATION MODELING）

PSEM 是一种使用先验对模型估计施加惩罚的新方法。以下四种惩罚函数可用于 PSEM：Normal (N)、Alignment Loss Function (ALF)、LASSO 和 GEOMIN。它们可与 ML、MLR 和 WLSMV 估计量一起使用，以改善 EFA、SEM、增长模型、多组对齐和纵向对齐等模型的估计（Asparouhov & Muthén, 2023a）。

MODEL PRIORS 用于通过给出两个描述惩罚的参数来指定 N、ALF 和 LASSO 惩罚。第一个参数 (m) 是目标，典型值为零。第二个参数定义一个作为 v 的逆函数的惩罚，v 的典型值为1。随着 v 增加，惩罚减小，先验对分析的影响减小。相反，随着 v 减小，惩罚增加，先验对分析的影响增加。

**N、ALF 和 LASSO 的 MODEL PRIOR 规范：**

```mplus
p ~ N(0, v);     ! 惩罚为 p^2/v
p ~ ALF(0, v);   ! 惩罚为 sqrt(|p|)/v
p ~ LASSO(0, v); ! 惩罚为 |p|/v
```

其中 p 是 MODEL 命令中的参数标签。

**GEOMIN 先验：**

当模型涉及 EFA 或 ESEM 时，GEOMIN 先验用于将 GEOMIN 旋转函数指定为惩罚。它是一个多元先验，必须一起指定所有载荷参数。

```mplus
l1-ln ~ GEOMIN(m, v, eps);
```

其中 l1 – ln 是 MODEL 命令中因子载荷的参数标签。
- 第一个参数 m 指要旋转的因子载荷矩阵中的因子数，决定包含 n 个载荷参数的载荷矩阵，载荷矩阵的维度为 n/m × m
- 第二个参数 v 用于根据其他惩罚先验确定惩罚
- 第三个参数 eps 是可选的，是 GEOMIN 旋转函数的 epsilon，默认为 0.01

GEOMIN 先验中指定参数的顺序很重要。它们应该按列给出，从因子载荷矩阵的第一列开始。

**示例：**

```mplus
MODEL:
  f1-f3 BY y1-y10 (l1-l30);

MODEL PRIOR:
  l1-l30 ~ GEOMIN(3, 1);
```

或者：

```mplus
MODEL:
  f1 BY y1-y10 (l1-l10);
  f2 BY y1-y10 (l11-l20);
  f3 BY y1-y10 (l21-l30);

MODEL PRIOR:
  l1-l30 ~ GEOMIN(3, 1);
```

第二种规范允许给出旋转尺度上的起始值。在 PSEM 中不估计未旋转模型。此类起始值不能在 ESEM 或 EFA 中给出。

---

## 随机相关（RANDOM CORRELATIONS）

| 符号与 TYPE=RANDOM 和 ESTIMATOR=BAYES 一起使用，用于命名和定义模型中的随机相关变量。随机相关可用于 TYPE=TWOLEVEL 和 TYPE=CROSSCLASSIFIED。

| 符号左侧的名称命名随机相关变量。| 符号右侧的变量指定将具有随机相关的变量。模型中使用随机相关的 Fisher z 变换（Asparouhov & Muthén, 2023b, Section 9.1）。星号（*）或 @ 符号不能在 | 符号右侧使用。

随机相关变量的均值和方差默认为自由。随机相关变量之间的协方差默认为固定为零。随机相关变量与增长因子、使用 BY 语句定义的潜变量以及观测变量之间的协方差默认为固定为零。

**示例：**

```mplus
c | y1 WITH y2;
```

其中 c 是变量 y1 和 y2 的随机相关。

---

## TINTERVAL

TINTERVAL 选项与 TYPE=TWOLEVEL、TYPE=CROSSCLASSIFIED 和单层模型一起用于 DSEM（动态结构方程建模）和 RDSEM（残差动态结构方程建模），以指定用于创建时间变量的时间间隔，当测量时间在人与人之间不相同时（例如，由于随机测量场合）（Asparouhov, Hamaker, & Muthén, 2018; Muthén & Asparouhov, 2023）。

**示例：**

```mplus
TINTERVAL = hours (2 timeint);
```

其中 hours 是数据集中的时间变量，2 指定时间间隔为2，timeint 是程序创建的时间变量。变量 timeint 的值为 1, 2, 3 等。

对于 TYPE=CROSSCLASSIFIED，变量 timeint 应用作聚类变量。

对于 TYPE=TWOLEVEL、TYPE=CROSSCLASSIFIED 和单层模型，变量 timeint 不能在 MODEL 命令中使用。DEFINE 命令可用于创建变量 timeint 的副本或转换，可在 MODEL 命令中使用。

**示例：**

```mplus
DEFINE:
  t = timeint;
```

其中 t 是变量 timeint 的副本。

---

## CTIME

VARIABLE 命令的 CTIME 选项用于连续时间残差动态结构方程建模（CT-RDSEM），以指定数据集中的时间变量，即分析中使用的实际观测时间。

**示例：**

```mplus
CTIME = minutes;
```

其中 minutes 是实际观测时间。

---

## DRIFT

PLOT 命令的 DRIFT 选项用于连续时间残差动态结构方程建模（CT-RDSEM）以绘制自回归曲线。

**示例：**

```mplus
TYPE = DRIFT (0.2 3 0.1);
```

其中 0.2 是起始时间，3 是结束时间，0.1 是时间增量。

使用默认设置：

```mplus
TYPE = DRIFT;
```

其中起始时间是时间间隔分布下5%的值，结束时间是起始时间的2倍或时间间隔分布上5%的值中的较大者，增量是结束时间减去起始时间除以20。

---

## CLUSTER_MEAN

DEFINE 命令的 CLUSTER_MEAN 选项与 TYPE=COMPLEX、TYPE=TWOLEVEL、TYPE=THREELEVEL 和 TYPE=CROSSCLASSIFIED 以及 CLUSTER 选项一起使用，用于创建一个变量，该变量是个体水平变量在每个聚类中的值的平均值。在多组分析中，使用每组的均值创建该组的聚类均值。

**TYPE=TWOLEVEL 和 TYPE=CLUSTER：**

```mplus
clusmean = CLUSTER_MEAN(x);
```

其中变量 clusmean 是每个聚类中 x 值的平均值。平均值基于每个聚类中观测值的非缺失值集。任何所有观测值都缺失的聚类被分配聚类均值变量的缺失值。

**TYPE=THREELEVEL 和 TYPE=CROSSCLASSIFIED：**

```mplus
clusmean = CLUSTER_MEAN(x cluster);
```

其中变量 clusmean 是每个聚类中 x 值的平均值，cluster 是要平均的聚类变量。任何所有观测值都缺失的聚类被分配聚类均值变量的缺失值。

DEFINE 命令或 DATA 转换命令中指定的任何转换都在计算聚类均值之前完成。要与 CLUSTER_MEAN 选项一起使用，使用 DEFINE 命令创建的任何新变量必须放在原始变量之后的 USEVARIABLES 列表中。当 CLUSTER_MEAN 列表中的变量用于除 CENTER 和 STANDARDIZE 之外的其他转换时，使用变量的原始值。使用 CLUSTER_MEAN 选项创建的变量不能在后续的 DEFINE 语句中使用，除了 CENTER 和 STANDARDIZED 选项。

---

## H5RESULTS

SAVEDATA 命令的 H5RESULTS 选项用于指定将保存分析结果的 H5 文件的名称。

**示例：**

```mplus
H5RESULTS = results.H5;
```

其中 results.H5 是将保存分析结果的 H5 文件的名称。如果工作目录包含同名文件，它将被覆盖。数据以 H5 分层数据格式保存。

H5 文件可在 R 中用于创建 R 数据框，可能与 MplusAutomation 包连接。

---

## 参考文献

- Asparouhov, T. & Muthén, B. (2014). Multiple-group factor analysis alignment. *Structural Equation Modeling*, 21, 495-508.

- Asparouhov, T. & Muthén, B. (2023a). Penalized structural equation models. *Structural Equation Modeling: A Multidisciplinary Journal*, DOI: 10.1080/10705511.2023.2263913.

- Asparouhov, T. & Muthén, B. (2023b). Bayesian analysis using Mplus: Technical implementation. Technical Report. Los Angeles: Muthén & Muthén.

- Asparouhov, T. & Muthén, B. (2023c). Multiple group alignment for exploratory and structural equation models. *Structural Equation Modeling: A Multidisciplinary Journal*, 30(2), 169-191. DOI: 10.1080/10705511.2022.2127100

- Asparouhov, T. & Muthén, B. (2024). Continuous-time dynamic structural equation modeling. Technical Report. Los Angeles: Muthén & Muthén.

- Asparouhov, T., Hamaker, E.L. & Muthén, B. (2018). Dynamic structural equation models. *Structural Equation Modeling: A Multidisciplinary Journal*, 25:3, 359-388, DOI: 10.1080/10705511.2017.1406803

- Muthén, B. & Asparouhov, T. (2013). BSEM measurement invariance analysis. Mplus Web Notes: No. 17. www.statmodel.com.

- Muthén, B. & Asparouhov, T. (2023). Mplus Web Talk No. 6. www.statmodel.com/MplusWebTalks.shtml.

- Muthén, B., Asparouhov, T. & Keijsers, L. (2024). Dynamic structural equation modeling with cycles. Submitted for publication.

- Muthén, B., Asparouhov, T. & Shiffman, S. (2024). Dynamic structural equation modeling with floor effects. Submitted for publication.

- Wu, H., & Estabrook. R. (2016). Identification of confirmatory factor analysis models of different levels of invariance for ordered categorical outcomes. *Psychometrika*, 81, 1014–45.
