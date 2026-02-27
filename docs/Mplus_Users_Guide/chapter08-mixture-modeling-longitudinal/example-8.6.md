# EXAMPLE 8.6: GMM with a categorical distal outcome using automatic starting values and random starts

## Description
这个例子展示了带有分类远端结果（categorical distal outcome）的增长混合模型（GMM）。远端结果变量u通过logistic回归对分类潜变量c进行回归，这表示为u的阈值跨类别变化。

## Mplus Input
```mplus
TITLE: this is an example of a GMM with a
categorical distal outcome using automatic
starting values and random starts
DATA: FILE IS ex8.6.dat;
VARIABLE: NAMES ARE y1–y4 u x;
CLASSES = c(2);
CATEGORICAL = u;
ANALYSIS: TYPE = MIXTURE;
MODEL:
%OVERALL%
i s | y1@0 y2@1 y3@2 y4@3;
i s ON x;
c ON x;
OUTPUT: TECH1 TECH8;
```

## Explanation
这个例子与例8.1的区别在于向模型添加了二元或有序分类（序数）远端结果，如上图所示。远端结果u通过logistic回归对分类潜变量c进行回归。这表示为u的阈值跨类别变化。

CATEGORICAL选项用于指定哪些因变量在模型及其估计中被视为二元或有序分类（序数）变量。在上例中，u是二元或有序分类变量。程序确定每个指标的类别数。默认情况下，估计u的阈值并跨潜类别变化。由于使用自动起始值，不需要在模型命令中包含这些类别特定语句。

此类分析的默认估计量是带稳健标准误的最大似然。可以使用ANALYSIS命令的ESTIMATOR选项选择不同的估计量。
