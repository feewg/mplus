# EXAMPLE 8.3: GMM for a censored outcome using a censored model with automatic starting values and random starts

## Description
这个例子展示了如何使用审查模型（censored model）来估计审查结果的增长混合模型（GMM）。审查变量是指有下限或上限效应的变量，例如收入数据（有下限0）或测试分数（有上限）。

## Mplus Input
```mplus
TITLE: this is an example of a GMM for a censored
outcome using a censored model with
automatic starting values and random
starts
DATA: FILE IS ex8.3.dat;
VARIABLE: NAMES ARE y1-y4 x;
CLASSES = c (2);
CENSORED = y1-y4 (b);
ANALYSIS: TYPE = MIXTURE;
ALGORITHM = INTEGRATION;
MODEL:
%OVERALL%
i s | y1@0 y2@1 y3@2 y4@3;
i s ON x;
c ON x;
OUTPUT: TECH1 TECH8;
```

## Explanation
这个例子与例8.1的区别在于结果变量是审查变量而不是连续变量。CENSORED选项用于指定哪些因变量在模型及其估计中被视为审查变量，它们是从上方还是从下方审查，以及是否将估计审查或审查-膨胀模型。在上例中，y1、y2、y3和y4是审查变量。它们代表在四个等距时间点测量的结果变量。y1-y4后面的括号中的b表示y1、y2、y3和y4从下方审查，即有下限效应，并且该模型是审查回归模型。审查限制从数据中确定。

通过指定ALGORITHM=INTEGRATION，将使用带稳健标准误的最大似然估计量，使用数值积分算法。注意，随着因子数和样本量的增加，数值积分变得越来越计算密集。在本例中，使用两个维度的积分，总共225个积分点。可以使用ANALYSIS命令的ESTIMATOR选项选择不同的估计量。

在所示的增长模型参数化中，四个时间点的结果变量的截距默认固定为零。增长因子的截距和残差方差默认被估计，增长因子残差协方差默认被估计，因为增长因子不影响模型中除其自身指标外的任何变量。增长因子的截距默认不跨类别相等。增长因子的残差方差和残差协方差默认跨类别相等。
