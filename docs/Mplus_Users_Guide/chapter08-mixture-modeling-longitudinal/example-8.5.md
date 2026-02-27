# EXAMPLE 8.5: GMM for a count outcome using a zero-inflated Poisson model and a negative binomial model with automatic starting values and random starts

## Description
这个例子展示了如何对计数结果变量估计增长混合模型（GMM）。包含两部分：第一部分使用零膨胀泊松模型（zero-inflated Poisson model），第二部分使用负二项模型（negative binomial model）。计数变量在八个时间点测量，并估计二次增长模型。

## Mplus Input

### 第一部分：零膨胀泊松模型
```mplus
TITLE: this is an example of a GMM for a count
outcome using a zero-inflated Poisson
model with automatic starting values and
random starts
DATA: FILE IS ex8.5a.dat;
VARIABLE: NAMES ARE u1–u8 x;
CLASSES = c (2);
COUNT ARE u1-u8 (i);
ANALYSIS: TYPE = MIXTURE;
STARTS = 40 8;
STITERATIONS = 20;
ALGORITHM = INTEGRATION;
MODEL:
%OVERALL%
i s q | u1@0 u2@.1 u3@.2 u4@.3 u5@.4 u6@.5
u7@.6 u8@.7;
ii si qi | u1#1@0 u2#1@.1 u3#1@.2 u4#1@.3
u5#1@.4 u6#1@.5 u7#1@.6 u8#1@.7;
s-qi@0;
i s ON x;
c ON x;
OUTPUT: TECH1 TECH8;
```

### 第二部分：负二项模型
```mplus
TITLE: this is an example of a GMM for a count
outcome using a negative binomial model
with automatic starting values and random
starts
DATA: FILE IS ex8.5b.dat;
VARIABLE: NAMES ARE u1-u8 x;
CLASSES = c(2);
COUNT = u1-u8(nb);
ANALYSIS: TYPE = MIXTURE;
ALGORITHM = INTEGRATION;
MODEL:
%OVERALL%
i s q | u1@0 u2@.1 u3@.2 u4@.3 u5@.4 u6@.5
u7@.6 u8@.7;
s-q@0;
i s ON x;
c ON x;
OUTPUT: TECH1 TECH8;
```

## Explanation
这个例子与例8.1的区别在于结果变量是计数变量而不是连续变量。此外，结果在八个时间点测量而不是四个，并估计二次增长模型而不是线性增长模型。

**零膨胀泊松模型**：
COUNT选项用于指定哪些因变量在模型及其估计中被视为计数变量，以及将估计的模型类型。在第一部分中，估计零膨胀泊松模型。在上例中，u1、u2、u3、u4、u5、u6、u7和u8是计数变量。它们代表在八个等距时间点测量的结果变量。u1-u8后面的括号中的i表示将估计零膨胀泊松模型。

可以使用ANALYSIS命令的STARTS和STITERATIONS选项进行更彻底的多解调查。在本例中，使用40组初始阶段随机起始值，并进行8次最终阶段优化。在初始阶段分析中，使用20次迭代而不是默认的10次迭代。

通过指定ALGORITHM=INTEGRATION，将使用带稳健标准误的最大似然估计量，使用数值积分算法。在本例中，使用一个维度的积分，15个积分点。

对于零膨胀泊松模型，估计两个增长模型。第一个|语句描述能够为0及以上值的个体的结果计数部分的增长模型。第二个|语句描述结果的膨胀部分的增长模型，即无法假设除零以外的任何值的概率。通过向计数变量的名称添加井号(#)后跟数字1来引用二元潜膨胀变量。

在结果计数部分的增长模型参数化中，八个时间点的结果变量的截距默认固定为零。增长因子的截距和残差方差默认被估计，增长因子残差协方差默认被估计，因为增长因子不影响模型中除其自身指标外的任何变量。增长因子的截距默认不跨类别相等。增长因子的残差方差和残差协方差默认跨类别相等。在本例中，斜率增长因子s和q的方差固定为零。这意味着i、s和q之间的协方差固定为零。仅估计截距增长因子i的方差。

在结果膨胀部分的增长模型参数化中，八个时间点的结果变量的截距默认保持相等。截距增长因子的截距在所有类别中默认固定为零。斜率增长因子的截距和截距及斜率增长因子的残差方差默认被估计，增长因子残差协方差默认被估计，因为增长因子不影响模型中除其自身指标外的任何变量。斜率增长因子的截距、增长因子的残差方差和增长因子的残差协方差默认跨类别相等。可以覆盖这些默认值，但在膨胀部分释放太多参数可能导致收敛问题。在本例中，截距和斜率增长因子的方差固定为零。这意味着ii、si和qi之间的协方差固定为零。

**负二项模型**：
这部分与第一部分的差异在于，估计计数结果的增长混合模型（GMM）使用负二项模型而不是零膨胀泊松模型。负二项模型估计每个结果的离散参数。

COUNT选项用于指定哪些因变量在模型及其估计中被视为计数变量，以及估计的模型类型。u1-u8后面的括号中的nb表示将估计负二项模型。每个结果的离散参数默认跨类别相等。可以使用计数变量的名称引用离散参数。
