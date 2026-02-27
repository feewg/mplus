# EXAMPLE 8.9: LCGA for a binary outcome

## Description
这个例子展示了二元结果的潜类别增长分析（Latent Class Growth Analysis, LCGA）。LCGA与GMM的区别在于LCGA不允许类别内存在变异，而GMM允许类别内变异。LCGA是增长混合模型的一个特例，其中增长因子的方差被固定为零。

## Mplus Input
```mplus
TITLE: this is an example of a LCGA for a binary
outcome
DATA: FILE IS ex8.9.dat;
VARIABLE: NAMES ARE u1-u4;
CLASSES = c (2);
CATEGORICAL = u1-u4;
ANALYSIS: TYPE = MIXTURE;
MODEL:
%OVERALL%
i s | u1@0 u2@1 u3@2 u4@3;
OUTPUT: TECH1 TECH8;
```

## Explanation
这个例子与例8.4的区别在于估计二元结果的LCGA而不是GMM。这两个模型的区别在于GMM允许类别内变异，而LCGA不允许。

当选择TYPE=MIXTURE而不带ALGORITHM=INTEGRATION时，执行LCGA。在所示的增长模型参数化中，四个时间点的结果变量的阈值默认保持相等。截距增长因子均值在最后一个类别中固定为零，在其他类别中估计。斜率增长因子均值默认在所有类别中估计。

在不使用ALGORITHM=INTEGRATION的情况下，增长因子的方差默认固定为零。因此，增长因子协方差固定为零。此类分析的默认估计量是带稳健标准误的最大似然。可以使用ANALYSIS命令的ESTIMATOR选项选择不同的估计量。
