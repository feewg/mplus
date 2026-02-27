# EXAMPLE 8.8: GMM with known classes (multiple group analysis)

## Description
这个例子展示了带有已知类别（known classes）的增长混合模型（GMM），即多组增长混合模型分析。分析包括一个分类潜变量cg，其类别成员身份是已知的（由观测变量g定义），以及另一个分类潜变量c，其类别成员身份是未知的。

## Mplus Input
```mplus
TITLE: this is an example of GMM with known
classes (multiple group analysis)
DATA: FILE IS ex8.8.dat;
VARIABLE: NAMES ARE g y1-y4 x;
USEVARIABLES ARE y1-y4 x;
CLASSES = cg (2) c (2);
KNOWNCLASS = cg (g = 0 g = 1);
ANALYSIS: TYPE = MIXTURE;
MODEL:
%OVERALL%
i s | y1@0 y2@1 y3@2 y4@3;
i s ON x;
c ON cg x;
%cg#1.c#1%
[i*2 s*1];
%cg#1.c#2%
[i*0 s*0];
%cg#2.c#1%
[i*3 s*1.5];
%cg#2.c#2%
[i*1 s*.5];
OUTPUT: TECH1 TECH8;
```

## Explanation
这个例子与例8.1的区别在于此分析包括一个分类潜变量，其类别成员身份是已知的，从而产生多组增长混合模型。

CLASSES选项用于为模型中的分类潜变量分配名称，并指定每个分类潜变量的潜类别数。在上例中，有两个分类潜变量cg和c。两个分类潜变量都有两个潜类别。KNOWNCLASS选项用于TYPE=MIXTURE的多组分析，以识别分类潜变量，其潜类别成员身份是已知的，且等于样本中的观测组。KNOWNCLASS选项将cg识别为类别成员身份已知的分类潜变量。分类潜变量名称后面的括号中的信息使用观测变量定义已知类别。在本例中，观测变量g用于定义已知类别。第一个类别由变量g上值为0的个体组成。第二个类别由变量g上值为1的个体组成。

总体模型中的第二个ON语句描述分类潜变量c在已知类别变量cg和协变量x上的多项logistic回归。这允许类别概率在样本的观测组中变化。在模型的四个类别特定部分中，为增长因子截距给出起始值。四个类别对应于cg和c的类别的组合。它们通过使用句点(.)组合类别标签来引用。例如，cg的类别1和c的类别1的组合被称为cg#1.c#1。

此类分析的默认估计量是带稳健标准误的最大似然。可以使用ANALYSIS命令的ESTIMATOR选项选择不同的估计量。
