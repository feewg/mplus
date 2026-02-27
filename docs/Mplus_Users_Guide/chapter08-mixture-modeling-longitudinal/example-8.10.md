# EXAMPLE 8.10: LCGA for a three-category outcome

## Description
这个例子展示了三类结果的潜类别增长分析（LCGA）。与例8.9的区别在于结果变量是有序分类（序数）变量而不是二元变量。本例还展示了如何为阈值和增长因子均值提供起始值（注释掉的语句）。

## Mplus Input
```mplus
TITLE: this is an example of a LCGA for a three-
category outcome
DATA: FILE IS ex8.10.dat;
VARIABLE: NAMES ARE u1-u4;
CLASSES = c(2);
CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
MODEL:
%OVERALL%
i s | u1@0 u2@1 u3@2 u4@3;
! [u1$1-u4$1*-.5] (1);
! [u1$2-u4$2* .5] (2);
! %c#1%
! [i*1 s*0];
! %c#2%
! [i@0 s*0];
OUTPUT: TECH1 TECH8;
```

## Explanation
这个例子与例8.9的区别在于结果变量是有序分类（序数）变量而不是二元变量。注意，注释掉的语句不是必需的。这导致与例8.9相同的输入。显示这些语句是为了说明如何在模型中为阈值和增长因子均值提供起始值（如果需要）。

由于结果是一个三类变量，它有两个阈值。第一个阈值（u1$1到u4$1）和第二个阈值（u1$2到u4$2）可以使用括号语句来指定起始值。星号(*)后跟数值用于分配起始值，括号中的数字(1)和(2)是等式约束标签，用于保持跨时间点的阈值相等。

LCGA模型中，增长因子的方差在不使用ALGORITHM=INTEGRATION时默认固定为零，这意味着类别内不允许个体差异。此类分析的默认估计量是带稳健标准误的最大似然。
