# EXAMPLE 8.4: GMM for a categorical outcome using automatic starting values and random starts

## Description
这个例子展示了如何估计分类结果（二元或有序分类变量）的增长混合模型（GMM）。当结果变量是分类变量时，需要使用数值积分算法进行估计。

## Mplus Input
```mplus
TITLE: this is an example of a GMM for a
categorical outcome using automatic
starting values and random starts
DATA: FILE IS ex8.4.dat;
VARIABLE: NAMES ARE u1–u4 x;
CLASSES = c (2);
CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
ALGORITHM = INTEGRATION;
MODEL:
%OVERALL%
i s | u1@0 u2@1 u3@2 u4@3;
i s ON x;
c ON x;
OUTPUT: TECH1 TECH8;
```

## Explanation
这个例子与例8.1的区别在于结果变量是二元或有序分类（序数）变量而不是连续变量。CATEGORICAL选项用于指定哪些因变量在模型及其估计中被视为二元或有序分类（序数）变量。在上例中，u1、u2、u3和u4是二元或有序分类变量。它们代表在四个等距时间点测量的结果变量。

通过指定ALGORITHM=INTEGRATION，将使用带稳健标准误的最大似然估计量，使用数值积分算法。注意，随着因子数和样本量的增加，数值积分变得越来越计算密集。在本例中，使用两个维度的积分，总共225个积分点。可以使用ANALYSIS命令的ESTIMATOR选项选择不同的估计量。

在所示的增长模型参数化中，四个时间点的结果变量的阈值默认保持相等。截距增长因子的截距在最后一个类别中固定为零，在其他类别中自由估计。斜率增长因子的截距和截距及斜率增长因子的残差方差默认被估计，增长因子残差协方差默认被估计，因为增长因子不影响模型中除其自身指标外的任何变量。增长因子的截距默认不跨类别相等。增长因子的残差方差和残差协方差默认跨类别相等。
