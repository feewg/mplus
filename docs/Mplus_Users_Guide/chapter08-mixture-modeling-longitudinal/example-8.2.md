# EXAMPLE 8.2: GMM for a continuous outcome using user-specified starting values and random starts

## Description
这个例子与例8.1类似，但使用用户指定的起始值而不是自动起始值来估计连续结果的增长混合模型（GMM）。通过为增长因子的截距提供特定的起始值，可以帮助模型更快地收敛到最优解。

## Mplus Input
```mplus
TITLE: this is an example of a GMM for a
continuous outcome using user-specified
starting values and random starts
DATA: FILE IS ex8.2.dat;
VARIABLE: NAMES ARE y1–y4 x;
CLASSES = c (2);
ANALYSIS: TYPE = MIXTURE;
MODEL:
%OVERALL%
i s | y1@0 y2@1 y3@2 y4@3;
i s ON x;
c ON x;
%c#1%
[i*1 s*.5];
%c#2%
[i*3 s*1];
OUTPUT: TECH1 TECH8;
```

## Explanation
这个例子与例8.1的区别在于使用用户指定的起始值而不是自动起始值。在MODEL命令中，为截距和斜率增长因子的截距给出了用户指定的起始值。使用括号语句引用截距。星号(*)用于为参数分配起始值。它放在参数之后，后跟起始值。

在类别1中，为截距增长因子给出起始值1，为斜率增长因子给出起始值0.5。在类别2中，为截距增长因子给出起始值3，为斜率增长因子给出起始值1。此类分析的默认估计量是带稳健标准误的最大似然。可以使用ANALYSIS命令的ESTIMATOR选项选择不同的估计量。
