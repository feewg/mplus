# Chapter 13: Special Features

## 1. Chapter Overview

This chapter covers special MPlus features and advanced capabilities.

**Topics Covered:**
- Alignment optimization
- Model constraint
- Model test

## 2. Examples

### Example 13.1: Alignment Optimization

```mplus
TITLE: alignment optimization
DATA: FILE IS ex13.1.dat;
VARIABLE: NAMES ARE u1-u10 group;
          CATEGORICAL ARE u1-u10;
          GROUPING IS group (1-20);
ANALYSIS: TYPE = MIXTURE;
          ALIGNMENT = FREE;
MODEL: %OVERALL%
        f BY u1-u10;
OUTPUT: STDYX ALIGN;
```

### Example 13.2: Model Constraint

```mplus
TITLE: model constraint
DATA: FILE IS ex13.2.dat;
VARIABLE: NAMES ARE y x1 x2;
MODEL: y ON x1 (b1);
        y ON x2 (b2);
        MODEL CONSTRAINT:
        b1 = 2*b2;
OUTPUT: STDYX;
```

## 3. Related Chapters

- [Chapter 17: MODEL Command](ch17_model_command.md)
