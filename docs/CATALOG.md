# Mplus 文档目录 (Catalog)

本文档包含所有拆分后的Mplus EXAMPLE的完整目录，便于快速检索和查找。

---

## 目录结构概览

```
docs/
├── CATALOG.md                           # 本文档 - 完整目录索引
├── PROJECT_STATUS.md                    # 项目状态报告
├── Mplus_Users_Guide/                   # 主用户指南 (950页)
│   ├── index.md                         # 主索引
│   ├── chapter01-introduction/          # 第1章：介绍
│   ├── chapter02-getting-started/       # 第2章：入门
│   ├── chapter03-regression-path-analysis/         # 第3章：回归和路径分析 (18例)
│   ├── chapter04-exploratory-factor-analysis/      # 第4章：探索性因子分析 (6例)
│   ├── chapter05-confirmatory-factor-analysis-sem/ # 第5章：验证性因子分析和SEM (33例)
│   ├── chapter06-growth-survival-time-series/      # 第6章：增长模型、生存分析和时间序列 (28例)
│   ├── chapter07-mixture-modeling-cross-sectional/ # 第7章：潜类别分析-截面数据 (30例)
│   ├── chapter08-mixture-modeling-longitudinal/    # 第8章：潜类别分析-纵向数据 (10例)
│   ├── chapter09-multilevel-modeling/              # 第9章：多层模型 (12例)
│   ├── chapter10-complex-survey-data/              # 第10章：复杂调查数据 (4例)
│   ├── chapter11-monte-carlo/                      # 第11章：蒙特卡洛模拟 (8例)
│   ├── chapter12-special-features/                 # 第12章：蒙特卡洛模拟研究 (11例)
│   └── chapter13-new-features/                     # 第13章：特殊功能 (8例)
├── mplus-diagrammer.md                  # Mplus Diagrammer 使用指南
├── addendum-v8.5-language.md            # Version 8.5 语言更新
├── addendum-v8.1-language.md            # Version 8.1 语言更新
├── addendum-v8.9-8.10-8.11.md           # Version 8.9/8.10/8.11 更新
└── addendum-v9.md                       # Version 9 更新说明
```

---

## Addendum 和工具文档索引

### 工具文档
| 文档 | 描述 | 文件路径 |
|------|------|----------|
| Mplus Diagrammer | Mplus图形化建模工具使用指南 | mplus-diagrammer.md |

### 版本更新说明 (Addendum)
| 版本 | 描述 | 文件路径 |
|------|------|----------|
| Version 8.5 | 贝叶斯估计增强、Logit链接、数据插补 | addendum-v8.5-language.md |
| Version 8.1 | RDSEM、潜变量分解、随机斜率 | addendum-v8.1-language.md |
| Version 8.9/8.10/8.11 | 测量不变性、PSEM、CT-RDSEM、H5文件 | addendum-v8.9-8.10-8.11.md |
| Version 9 | 贝叶斯结构方程建模、因子分析、多元回归 | addendum-v9.md |


---

## 按主题分类索引

### 1. 基础统计和回归分析
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第3章 | 3.1 | Linear regression | chapter03-regression-path-analysis/example-3.1.md |
| 第3章 | 3.2 | Linear regression with covariates | chapter03-regression-path-analysis/example-3.2.md |
| 第3章 | 3.3 | Logistic regression | chapter03-regression-path-analysis/example-3.3.md |
| 第3章 | 3.4 | Logistic regression with covariates | chapter03-regression-path-analysis/example-3.4.md |
| 第3章 | 3.5 | Poisson regression | chapter03-regression-path-analysis/example-3.5.md |
| 第3章 | 3.6 | Poisson regression with covariates | chapter03-regression-path-analysis/example-3.6.md |
| 第3章 | 3.7 | Path analysis with continuous dependent variables | chapter03-regression-path-analysis/example-3.7.md |
| 第3章 | 3.8 | Path analysis with categorical dependent variables | chapter03-regression-path-analysis/example-3.8.md |
| 第3章 | 3.9 | Path analysis with categorical dependent variables using the Theta parameterization | chapter03-regression-path-analysis/example-3.9.md |
| 第3章 | 3.10 | Moderated mediation with observed continuous mediator and observed continuous moderator | chapter03-regression-path-analysis/example-3.10.md |
| 第3章 | 3.11 | Moderated mediation with observed continuous mediator and observed categorical moderator | chapter03-regression-path-analysis/example-3.11.md |
| 第3章 | 3.12 | Moderated mediation with latent continuous mediator and observed continuous moderator | chapter03-regression-path-analysis/example-3.12.md |
| 第3章 | 3.13 | Mediation with latent continuous mediator and observed categorical moderator | chapter03-regression-path-analysis/example-3.13.md |
| 第3章 | 3.14 | Moderated mediation with observed continuous mediator and latent continuous moderator | chapter03-regression-path-analysis/example-3.14.md |
| 第3章 | 3.15 | Moderated mediation with latent continuous mediator and latent continuous moderator | chapter03-regression-path-analysis/example-3.15.md |
| 第3章 | 3.16 | Two-part (semicontinuous) regression model for a continuous outcome | chapter03-regression-path-analysis/example-3.16.md |
| 第3章 | 3.17 | Two-part (semicontinuous) regression model for a count outcome | chapter03-regression-path-analysis/example-3.17.md |
| 第3章 | 3.18 | Odds ratio estimation in a two-part (semicontinuous) regression model | chapter03-regression-path-analysis/example-3.18.md |

### 2. 探索性因子分析 (EFA)
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第4章 | 4.1 | EFA with continuous factor indicators | chapter04-exploratory-factor-analysis/example-4.1.md |
| 第4章 | 4.2 | EFA with categorical factor indicators | chapter04-exploratory-factor-analysis/example-4.2.md |
| 第4章 | 4.3 | EFA with continuous and categorical factor indicators | chapter04-exploratory-factor-analysis/example-4.3.md |
| 第4章 | 4.4 | EFA with factor indicators with means threshold structure for EFA of categorical factor indicators | chapter04-exploratory-factor-analysis/example-4.4.md |
| 第4章 | 4.5 | EFA with some restrictions on factor loadings | chapter04-exploratory-factor-analysis/example-4.5.md |
| 第4章 | 4.6 | EFA with parameter constraints | chapter04-exploratory-factor-analysis/example-4.6.md |

### 3. 验证性因子分析和结构方程模型 (CFA & SEM)
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第5章 | 5.1 | CFA with continuous factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.1.md |
| 第5章 | 5.2 | CFA with categorical factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.2.md |
| 第5章 | 5.3 | CFA with continuous and categorical factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.3.md |
| 第5章 | 5.4 | CFA with censored factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.4.md |
| 第5章 | 5.5 | Two-parameter logistic IRT model | chapter05-confirmatory-factor-analysis-sem/example-5.5.md |
| 第5章 | 5.6 | Second-order factor analysis | chapter05-confirmatory-factor-analysis-sem/example-5.6.md |
| 第5章 | 5.7 | Non-linear CFA | chapter05-confirmatory-factor-analysis-sem/example-5.7.md |
| 第5章 | 5.8 | CFA with covariates (MIMIC) with continuous factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.8.md |
| 第5章 | 5.9 | Mean structure CFA for continuous factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.9.md |
| 第5章 | 5.10 | SEM with continuous factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.10.md |
| 第5章 | 5.11 | SEM with continuous factor indicators and direct effects | chapter05-confirmatory-factor-analysis-sem/example-5.11.md |
| 第5章 | 5.12 | SEM with continuous and categorical factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.12.md |
| 第5章 | 5.13 | SEM with censored factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.13.md |
| 第5章 | 5.14 | Multiple group CFA with covariates (MIMIC) with continuous factor indicators and no mean structure | chapter05-confirmatory-factor-analysis-sem/example-5.14.md |
| 第5章 | 5.15 | Multiple group CFA with covariates (MIMIC) with continuous factor indicators and a mean structure | chapter05-confirmatory-factor-analysis-sem/example-5.15.md |
| 第5章 | 5.16 | Two-level factor analysis with continuous factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.16.md |
| 第5章 | 5.17 | Two-level factor analysis with categorical factor indicators | chapter05-confirmatory-factor-analysis-sem/example-5.17.md |
| 第5章 | 5.18 | Two-level IRT with random item effects (Random Loadings) | chapter05-confirmatory-factor-analysis-sem/example-5.18.md |
| 第5章 | 5.19 | Two-level IRT with random item effects (Random Thresholds) | chapter05-confirmatory-factor-analysis-sem/example-5.19.md |
| 第5章 | 5.20 | ESEM with target rotation | chapter05-confirmatory-factor-analysis-sem/example-5.20.md |
| 第5章 | 5.21 | ESEM with covariates (MIMIC) | chapter05-confirmatory-factor-analysis-sem/example-5.21.md |
| 第5章 | 5.22 | ESEM with direct effects | chapter05-confirmatory-factor-analysis-sem/example-5.22.md |
| 第5章 | 5.23 | ESEM with factors for EFA and CFA in the same model | chapter05-confirmatory-factor-analysis-sem/example-5.23.md |
| 第5章 | 5.24 | Multiple-group ESEM with target rotation | chapter05-confirmatory-factor-analysis-sem/example-5.24.md |
| 第5章 | 5.25 | Monte Carlo simulation of ESEM | chapter05-confirmatory-factor-analysis-sem/example-5.25.md |
| 第5章 | 5.26 | LCA with two classes and covariates | chapter05-confirmatory-factor-analysis-sem/example-5.26.md |
| 第5章 | 5.27 | Two-part (semicontinuous) growth model for a continuous outcome | chapter05-confirmatory-factor-analysis-sem/example-5.27.md |
| 第5章 | 5.28 | EFA of longitudinal data with three timepoints | chapter05-confirmatory-factor-analysis-sem/example-5.28.md |
| 第5章 | 5.29 | Bi-factor EFA with two specific factors | chapter05-confirmatory-factor-analysis-sem/example-5.29.md |
| 第5章 | 5.30 | Bi-factor ESEM with two specific factors | chapter05-confirmatory-factor-analysis-sem/example-5.30.md |
| 第5章 | 5.31 | Bi-factor EFA using target rotation with two specific factors | chapter05-confirmatory-factor-analysis-sem/example-5.31.md |
| 第5章 | 5.32 | Bi-factor ESEM using target rotation with two specific factors | chapter05-confirmatory-factor-analysis-sem/example-5.32.md |
| 第5章 | 5.33 | EFA in a multiple group with target rotation | chapter05-confirmatory-factor-analysis-sem/example-5.33.md |

### 4. 增长模型、生存分析和时间序列
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第6章 | 6.1 | Linear growth model for a continuous outcome | chapter06-growth-survival-time-series/example-6.1.md |
| 第6章 | 6.2 | Linear growth model for a categorical outcome | chapter06-growth-survival-time-series/example-6.2.md |
| 第6章 | 6.3 | Linear growth model for a continuous outcome with time-invariant and time-varying covariates | chapter06-growth-survival-time-series/example-6.3.md |
| 第6章 | 6.4 | Linear growth model for a categorical outcome with time-invariant and time-varying covariates | chapter06-growth-survival-time-series/example-6.4.md |
| 第6章 | 6.5 | Quadratic growth model for a continuous outcome | chapter06-growth-survival-time-series/example-6.5.md |
| 第6章 | 6.6 | Linear growth model for a continuous outcome with time-varying covariates with variation on within and between levels | chapter06-growth-survival-time-series/example-6.6.md |
| 第6章 | 6.7 | Piecewise growth model for a continuous outcome | chapter06-growth-survival-time-series/example-6.7.md |
| 第6章 | 6.8 | GMM for a continuous outcome using automatic starting values and random starts | chapter06-growth-survival-time-series/example-6.8.md |
| 第6章 | 6.9 | GMM for a continuous outcome using user-specified starting values without random starts | chapter06-growth-survival-time-series/example-6.9.md |
| 第6章 | 6.10 | Latent transition analysis (LTA) for a latent class indicator with covariates | chapter06-growth-survival-time-series/example-6.10.md |
| 第6章 | 6.11 | Discrete-time survival analysis | chapter06-growth-survival-time-series/example-6.11.md |
| 第6章 | 6.12 | Continuous-time survival analysis using the Cox regression model | chapter06-growth-survival-time-series/example-6.12.md |
| 第6章 | 6.13 | Continuous-time survival analysis using a parametric proportional hazards model | chapter06-growth-survival-time-series/example-6.13.md |
| 第6章 | 6.14 | N=1 time series analysis with a univariate first-order autoregressive AR(1) model for a continuous dependent variable | chapter06-growth-survival-time-series/example-6.14.md |
| 第6章 | 6.15 | N=1 time series analysis with a univariate first-order autoregressive AR(1) model for a categorical dependent variable | chapter06-growth-survival-time-series/example-6.15.md |
| 第6章 | 6.16 | N=1 time series analysis with a bivariate cross-lagged model for continuous dependent variables | chapter06-growth-survival-time-series/example-6.16.md |
| 第6章 | 6.17 | Latent transition analysis (LTA) for two timepoints with a binary covariate influencing the latent transition probabilities | chapter06-growth-survival-time-series/example-6.17.md |
| 第6章 | 6.18 | Latent transition analysis (LTA) with two timepoints and a covariate with measurement invariance of intercepts across gender | chapter06-growth-survival-time-series/example-6.18.md |
| 第6章 | 6.19 | Two-level continuous-time survival analysis using Cox regression with a random intercept | chapter06-growth-survival-time-series/example-6.19.md |
| 第6章 | 6.20 | Two-level continuous-time survival analysis using Cox regression with a random slope | chapter06-growth-survival-time-series/example-6.20.md |
| 第6章 | 6.21 | Two-level continuous-time survival analysis using Cox regression with two random slopes | chapter06-growth-survival-time-series/example-6.21.md |
| 第6章 | 6.22 | Two-level continuous-time survival analysis using Cox regression with two random slopes and a frailty | chapter06-growth-survival-time-series/example-6.22.md |
| 第6章 | 6.23 | Two-level continuous-time survival analysis using a parametric proportional hazards model | chapter06-growth-survival-time-series/example-6.23.md |
| 第6章 | 6.24 | Two-level growth model for a categorical outcome (three-level analysis) | chapter06-growth-survival-time-series/example-6.24.md |
| 第6章 | 6.25 | Two-level growth model for a continuous outcome with estimated time scores (three-level analysis) | chapter06-growth-survival-time-series/example-6.25.md |
| 第6章 | 6.26 | Two-level growth model for a categorical outcome with estimated time scores (three-level analysis) | chapter06-growth-survival-time-series/example-6.26.md |
| 第6章 | 6.27 | Multiple indicator linear growth model for continuous outcomes with measurement invariance across timepoints | chapter06-growth-survival-time-series/example-6.27.md |
| 第6章 | 6.28 | Multiple indicator linear growth model for categorical outcomes with measurement invariance across timepoints | chapter06-growth-survival-time-series/example-6.28.md |

### 5. 潜类别分析 - 截面数据
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第7章 | 7.1 | LCA with binary latent class indicators using automatic starting values with random starts | chapter07-mixture-modeling-cross-sectional/example-7.1.md |
| 第7章 | 7.2 | LCA with binary latent class indicators using user-specified starting values without random starts | chapter07-mixture-modeling-cross-sectional/example-7.2.md |
| 第7章 | 7.3 | LCA with binary latent class indicators using automatic starting values with random starts and user-specified start values for the threshold parameters | chapter07-mixture-modeling-cross-sectional/example-7.3.md |
| 第7章 | 7.4 | LCA with unordered categorical (nominal) latent class indicators | chapter07-mixture-modeling-cross-sectional/example-7.4.md |
| 第7章 | 7.5 | LCA with unordered categorical (nominal) latent class indicators using the misclassification parameterization | chapter07-mixture-modeling-cross-sectional/example-7.5.md |
| 第7章 | 7.6 | LCA with unordered categorical (nominal) latent class indicators using the misclassification parameterization with equalities for the misclassification probabilities | chapter07-mixture-modeling-cross-sectional/example-7.6.md |
| 第7章 | 7.7 | LCA with ordered categorical (ordinal) latent class indicators | chapter07-mixture-modeling-cross-sectional/example-7.7.md |
| 第7章 | 7.8 | LCA with ordered categorical (ordinal) latent class indicators using the theta parameterization | chapter07-mixture-modeling-cross-sectional/example-7.8.md |
| 第7章 | 7.9 | LCA with continuous latent class indicators | chapter07-mixture-modeling-cross-sectional/example-7.9.md |
| 第7章 | 7.10 | LCA with censored latent class indicators | chapter07-mixture-modeling-cross-sectional/example-7.10.md |
| 第7章 | 7.11 | LCA with count latent class indicators | chapter07-mixture-modeling-cross-sectional/example-7.11.md |
| 第7章 | 7.12 | LCA with binary, censored, unordered, and count latent class indicators | chapter07-mixture-modeling-cross-sectional/example-7.12.md |
| 第7章 | 7.13 | LCA with binary latent class indicators, covariates, and direct effects | chapter07-mixture-modeling-cross-sectional/example-7.13.md |
| 第7章 | 7.14 | LCA with binary latent class indicators using a semiparametric approach (non-parametric maximum likelihood) | chapter07-mixture-modeling-cross-sectional/example-7.14.md |
| 第7章 | 7.15 | LCA with binary latent class indicators using a semiparametric approach (non-parametric maximum likelihood) with two categorical latent variables | chapter07-mixture-modeling-cross-sectional/example-7.15.md |
| 第7章 | 7.16 | LCA with two categorical latent variables | chapter07-mixture-modeling-cross-sectional/example-7.16.md |
| 第7章 | 7.17 | LCA with three categorical latent variables | chapter07-mixture-modeling-cross-sectional/example-7.17.md |
| 第7章 | 7.18 | LCA with partial conditional independence | chapter07-mixture-modeling-cross-sectional/example-7.18.md |
| 第7章 | 7.19 | LCA with a distal outcome | chapter07-mixture-modeling-cross-sectional/example-7.19.md |
| 第7章 | 7.20 | LCA with two latent classes and a covariate with measurement invariance across gender | chapter07-mixture-modeling-cross-sectional/example-7.20.md |
| 第7章 | 7.21 | LCA with a second-order factor | chapter07-mixture-modeling-cross-sectional/example-7.21.md |
| 第7章 | 7.22 | LCA with a second-order factor and covariates | chapter07-mixture-modeling-cross-sectional/example-7.22.md |
| 第7章 | 7.23 | Factor mixture analysis with binary latent class indicators | chapter07-mixture-modeling-cross-sectional/example-7.23.md |
| 第7章 | 7.24 | Factor mixture analysis with continuous latent class indicators | chapter07-mixture-modeling-cross-sectional/example-7.24.md |
| 第7章 | 7.25 | LCA with partial conditional independence using the PARAMETERIZATION=LOGLINEAR option | chapter07-mixture-modeling-cross-sectional/example-7.25.md |
| 第7章 | 7.26 | LCA with structural zeros using the PARAMETERIZATION=LOGLINEAR option | chapter07-mixture-modeling-cross-sectional/example-7.26.md |
| 第7章 | 7.27 | LCA with unordered categorical latent class indicators using the PARAMETERIZATION=LOGLINEAR option | chapter07-mixture-modeling-cross-sectional/example-7.27.md |
| 第7章 | 7.28 | LCA with a covariate and direct effects using the PARAMETERIZATION=LOGLINEAR option | chapter07-mixture-modeling-cross-sectional/example-7.28.md |
| 第7章 | 7.29 | LCA with two categorical latent variables using the PARAMETERIZATION=LOGLINEAR option | chapter07-mixture-modeling-cross-sectional/example-7.29.md |
| 第7章 | 7.30 | Factor mixture analysis with continuous latent class indicators using automatic starting values with random starts | chapter07-mixture-modeling-cross-sectional/example-7.30.md |

### 6. 潜类别分析 - 纵向数据
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第8章 | 8.1 | GMM for a continuous outcome using automatic starting values and random starts | chapter08-mixture-modeling-longitudinal/example-8.1.md |
| 第8章 | 8.2 | GMM for a continuous outcome using user-specified starting values without random starts | chapter08-mixture-modeling-longitudinal/example-8.2.md |
| 第8章 | 8.3 | GMM for a count outcome using a zero-inflated Poisson model using automatic starting values and random starts | chapter08-mixture-modeling-longitudinal/example-8.3.md |
| 第8章 | 8.4 | GMM for a count outcome using a zero-inflated Poisson model using user-specified starting values without random starts | chapter08-mixture-modeling-longitudinal/example-8.4.md |
| 第8章 | 8.5 | GMM with a categorical distal outcome using automatic starting values with random starts | chapter08-mixture-modeling-longitudinal/example-8.5.md |
| 第8章 | 8.6 | GMM with two categorical latent variables | chapter08-mixture-modeling-longitudinal/example-8.6.md |
| 第8章 | 8.7 | LTA for a latent class indicator using automatic starting values with random starts | chapter08-mixture-modeling-longitudinal/example-8.7.md |
| 第8章 | 8.8 | LTA for a latent class indicator using user-specified starting values without random starts | chapter08-mixture-modeling-longitudinal/example-8.8.md |
| 第8章 | 8.9 | LTA with a covariate and interaction using automatic starting values with random starts | chapter08-mixture-modeling-longitudinal/example-8.9.md |
| 第8章 | 8.10 | LTA with a covariate and interaction using user-specified starting values without random starts | chapter08-mixture-modeling-longitudinal/example-8.10.md |

### 7. 多层模型
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第9章 | 9.1 | Two-level regression for a continuous dependent variable with a random intercept | chapter09-multilevel-modeling/example-9.1.md |
| 第9章 | 9.2 | Two-level regression for a continuous dependent variable with a random slope | chapter09-multilevel-modeling/example-9.2.md |
| 第9章 | 9.3 | Two-level regression for a continuous dependent variable with a random slope and a within-level and a between-level covariate | chapter09-multilevel-modeling/example-9.3.md |
| 第9章 | 9.4 | Two-level regression for a categorical dependent variable with a random intercept | chapter09-multilevel-modeling/example-9.4.md |
| 第9章 | 9.5 | Two-level regression for a categorical dependent variable with a random slope | chapter09-multilevel-modeling/example-9.5.md |
| 第9章 | 9.6 | Two-level regression for a continuous dependent variable with a random slope and a cross-level interaction | chapter09-multilevel-modeling/example-9.6.md |
| 第9章 | 9.7 | Two-level regression for a continuous dependent variable with a random slope and observed and latent cluster-level covariates | chapter09-multilevel-modeling/example-9.7.md |
| 第9章 | 9.8 | Two-level path analysis with a random slope | chapter09-multilevel-modeling/example-9.8.md |
| 第9章 | 9.9 | Two-level path analysis with a random slope and a cross-level interaction | chapter09-multilevel-modeling/example-9.9.md |
| 第9章 | 9.10 | Two-level SEM with continuous factor indicators and a random slope for a factor | chapter09-multilevel-modeling/example-9.10.md |
| 第9章 | 9.11 | Two-level SEM with continuous factor indicators, random intercepts and random slopes | chapter09-multilevel-modeling/example-9.11.md |
| 第9章 | 9.12 | Two-level SEM with continuous factor indicators, random intercepts, random slopes and cross-level interactions | chapter09-multilevel-modeling/example-9.12.md |

### 8. 复杂调查数据
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第10章 | 10.1 | Complex survey data analysis using the TYPE=COMPLEX option of the ANALYSIS command | chapter10-complex-survey-data/example-10.1.md |
| 第10章 | 10.2 | Complex survey data analysis using the TYPE=COMPLEX option of the ANALYSIS command with a binary covariate | chapter10-complex-survey-data/example-10.2.md |
| 第10章 | 10.3 | Complex survey data analysis using the REPSE option of the VARIABLE command | chapter10-complex-survey-data/example-10.3.md |
| 第10章 | 10.4 | Complex survey data analysis using the REPSE option of the VARIABLE command with a binary covariate | chapter10-complex-survey-data/example-10.4.md |

### 9. 蒙特卡洛模拟
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第11章 | 11.1 | Growth model with missing data using a missing data correlate | chapter11-monte-carlo/example-11.1.md |
| 第11章 | 11.2 | Descriptive statistics and graphics related to dropout | chapter11-monte-carlo/example-11.2.md |
| 第11章 | 11.3 | NMAR using Diggle-Kenward selection model | chapter11-monte-carlo/example-11.3.md |
| 第11章 | 11.4 | NMAR using pattern-mixture model | chapter11-monte-carlo/example-11.4.md |
| 第11章 | 11.5 | Multiple imputation for a set of variables | chapter11-monte-carlo/example-11.5.md |
| 第11章 | 11.6 | Multiple imputation followed by growth model estimation | chapter11-monte-carlo/example-11.6.md |
| 第11章 | 11.7 | Multiple imputation of plausible values | chapter11-monte-carlo/example-11.7.md |
| 第11章 | 11.8 | Multiple imputation using two-level factor model | chapter11-monte-carlo/example-11.8.md |

### 10. 蒙特卡洛模拟研究
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第12章 | 12.1 | CFA with covariates (MIMIC) with continuous factor indicators and patterns of missing data | chapter12-special-features/example-12.1.md |
| 第12章 | 12.2 | Linear growth model for a continuous outcome with missing data where attrition is predicted by time-invariant covariates (MAR) | chapter12-special-features/example-12.2.md |
| 第12章 | 12.3 | Growth mixture model with two classes and a misspecified model | chapter12-special-features/example-12.3.md |
| 第12章 | 12.4 | Two-level growth model for a continuous outcome (three-level analysis) | chapter12-special-features/example-12.4.md |
| 第12章 | 12.5 | Exploratory factor analysis with continuous factor indicators | chapter12-special-features/example-12.5.md |
| 第12章 | 12.6 | Clustered data generation and external Monte Carlo analysis (Step 1 & 2) | chapter12-special-features/example-12.6.md |
| 第12章 | 12.7 | Using parameter estimates from real data analysis for population values (Step 1 & 2) | chapter12-special-features/example-12.7.md |
| 第12章 | 12.8 | Discrete-time survival analysis | chapter12-special-features/example-12.8.md |
| 第12章 | 12.9 | Two-part (semicontinuous) growth model for a continuous outcome | chapter12-special-features/example-12.9.md |
| 第12章 | 12.10 | Two-level continuous-time survival analysis using Cox regression with random intercept and frailty | chapter12-special-features/example-12.10.md |
| 第12章 | 12.11 | Two-level mediation model with random slopes | chapter12-special-features/example-12.11.md |

### 11. 特殊功能
| 章节 | 示例 | 标题 | 文件路径 |
|------|------|------|----------|
| 第13章 | 13.1 | A Covariance Matrix as Data | chapter13-new-features/example-13.1.md |
| 第13章 | 13.2 | Means and a Covariance Matrix as Data | chapter13-new-features/example-13.2.md |
| 第13章 | 13.3 | Reading Data with a Fixed Format | chapter13-new-features/example-13.3.md |
| 第13章 | 13.4 | Non-Numeric Missing Value Flags | chapter13-new-features/example-13.4.md |
| 第13章 | 13.5 | Numeric Missing Value Flags | chapter13-new-features/example-13.5.md |
| 第13章 | 13.6 | Selecting Observations and Variables | chapter13-new-features/example-13.6.md |
| 第13章 | 13.7 | Transforming Variables Using the DEFINE Command | chapter13-new-features/example-13.7.md |
| 第13章 | 13.8 | Freeing and Fixing Parameters and Giving Starting Values | chapter13-new-features/example-13.8.md |

---

## 关键词索引

### 按模型类型

#### 回归模型
- Linear regression: 3.1, 3.2
- Logistic regression: 3.3, 3.4
- Poisson regression: 3.5, 3.6
- Two-part/semicontinuous: 3.16, 3.17, 3.18, 5.27, 6.9, 6.10, 6.25, 6.26, 8.3, 8.4, 12.9
- Two-level regression: 9.1-9.7

#### 因子分析
- EFA (探索性): 4.1-4.6, 12.5
- CFA (验证性): 5.1-5.5, 5.8, 5.9
- Bi-factor: 5.29-5.32
- Two-level CFA: 5.16, 5.17

#### 结构方程模型 (SEM)
- Basic SEM: 5.10-5.13
- Multiple-group SEM: 5.14, 5.15
- MIMIC: 5.8, 5.9, 12.1
- Mediation/Moderation: 3.10-3.15

#### 增长模型
- Linear growth: 6.1, 6.3, 6.6, 6.7
- Quadratic growth: 6.5
- Piecewise growth: 6.7
- Two-level growth: 6.24-6.26, 12.4

#### 潜类别/混合模型
- LCA (潜类别分析): 5.26, 7.1-7.30
- GMM (增长混合模型): 6.8, 6.9, 8.1-8.6, 12.3
- LTA (潜转换分析): 6.10, 6.17, 6.18, 8.7-8.10
- Factor mixture: 7.23, 7.24, 7.30

#### 生存分析
- Discrete-time survival: 6.11, 12.8
- Continuous-time survival (Cox): 6.12, 6.19-6.22, 12.10
- Continuous-time survival (parametric): 6.13, 6.23

#### 时间序列
- AR(1) model: 6.14, 6.15
- Cross-lagged: 6.16

#### 多层/分层模型
- Two-level regression: 9.1-9.7
- Two-level path analysis: 9.8, 9.9
- Two-level SEM: 9.10-9.12
- Two-level CFA: 5.16, 5.17
- Three-level growth: 6.24-6.26

#### IRT模型
- 2PL IRT: 5.5
- Two-level IRT: 5.18, 5.19

#### ESEM (探索性结构方程模型)
- ESEM basic: 5.20-5.25
- Bi-factor ESEM: 5.30, 5.32

#### 缺失数据处理
- Missing data correlate: 11.1, 12.2
- Diggle-Kenward selection model: 11.3
- Pattern-mixture model: 11.4
- Multiple imputation: 11.5-11.8

#### 蒙特卡洛模拟
- Monte Carlo: 5.25, 12.1-12.7
- External Monte Carlo: 12.6, 12.7

### 按数据类型

#### 连续变量
- Continuous indicators: 3.1, 3.2, 4.1, 5.1, 5.6-5.10, 5.16, 6.1, 6.3, 6.5-6.7

#### 分类变量
- Categorical indicators: 3.3, 3.4, 4.2, 4.4, 5.2, 5.3, 6.2, 6.4, 6.8
- Binary: 7.1-7.4, 7.13-7.20, 7.23, 7.28
- Ordinal: 7.7, 7.8
- Nominal: 7.4-7.6, 7.27, 7.29

#### 删失数据
- Censored: 5.4, 5.13, 7.10, 7.12

#### 计数数据
- Count: 3.5, 3.6, 7.11, 7.12, 8.3, 8.4

### 按分析方法

#### 数据特征
- Complex survey: 10.1-10.4

#### 特殊功能
- Covariance matrix input: 13.1, 13.2
- Fixed format data: 13.3
- Missing value flags: 13.4, 13.5
- Variable selection: 13.6
- DEFINE command: 13.7
- Parameter constraints: 13.8

---

## 快速查找表

### 常用模型快速索引

| 如果您需要... | 查看示例 |
|---------------|----------|
| 线性回归 | 3.1, 3.2 |
| Logistic回归 | 3.3, 3.4 |
| 简单CFA | 5.1 |
| 简单SEM | 5.10 |
| 增长模型 | 6.1, 6.3 |
| 潜类别分析 | 7.1 |
| 增长混合模型 | 6.8, 8.1 |
| 多层模型 | 9.1, 9.2 |
| 中介分析 | 3.10-3.15 |
| 调节中介 | 3.10, 3.12, 3.15 |
| 缺失数据处理 | 11.1-11.8 |
| 生存分析 | 6.11, 6.12 |
| 蒙特卡洛模拟 | 12.1-12.7 |

---

## 文件统计

- **总EXAMPLE数**: 168
- **章节数**: 13
- **文件总数**: 184 (含索引文件)

---

*目录生成时间: 2026-02-27*
*文档版本: Mplus User's Guide (Version 8)*
