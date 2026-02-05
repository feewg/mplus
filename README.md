# Mplus VS Code Extension

一个为 Mplus 统计软件提供语法高亮和执行功能的 VS Code 扩展。

## 功能特性

### 语法高亮

本扩展为 Mplus `.inp` 和 `.out` 文件提供全面的语法高亮支持，包括：

- **命令块高亮**：TITLE, DATA, VARIABLE, DEFINE, ANALYSIS, MODEL, OUTPUT, PLOT, SAVEDATA, MONTECARLO
- **模型子命令高亮**：MODEL INDIRECT, MODEL CONSTRAINT, MODEL PRIORS, MODEL MISSING, MODEL POPULATION, MODEL COVERAGE, MODEL TEST, MODEL label
- **类标签高亮**：%OVERALL%, %c1#1%, %WITHIN%, %BETWEEN% 等
- **关键词高亮**：
  - DATA: FILE, FORMAT, TYPE, NOBSERVATIONS, NGROUPS, LISTWISE, SWMATRIX 等
  - VARIABLE: NAMES, USEVARIABLES, CATEGORICAL, NOMINAL, COUNT, CENSORED, CLASSES, KNOWNCLASS 等
  - ANALYSIS: TYPE, ESTIMATOR, ALGORITHM, INTEGRATION, DISTRIBUTION, LINK 等
  - OUTPUT: SAMPSTAT, RESIDUAL, STANDARDIZED, MODINDICES, TECH1-TECH16 等
  - PLOT: PLOT1, PLOT2, PLOT3, TYPE, SERIES, FACTORS 等
  - SAVEDATA: FILE, SAVE, FORMAT, ESTIMATES, RESULTS, FSCORES 等
  - MONTECARLO: NAMES, NOBSERVATIONS, NREPS, SEED, GENERATE 等
- **模型运算符高亮**：BY, ON, WITH, PWITH, XWITH, PON, AT 等
- **函数高亮**：
  - 数学函数：ABS, EXP, LOG, SQRT, SIN, COS, TAN 等
  - 统计函数：MAX, MIN, SUM, MEAN, VARIANCE, SD, MEDIAN 等
  - 分布函数：NORMAL, LOGNORMAL, UNIFORM, GAMMA, BINOMIAL, POISSON 等
- **逻辑运算符高亮**：IF, THEN, AND, OR, NOT, EQ, NE, GT, GE, LT, LE
- **符号高亮**：@, *, ( ), [ ], { }, |, ;
- **常量高亮**：ALL, NONE, DEFAULT, ON, OFF, YES, NO, TRUE, FALSE, _MISSING
- **变量范围高亮**：y1-y3
- **字符串字面量高亮**：双引号和单引号字符串
- **数字高亮**：支持科学计数法

所有关键词都支持大小写不敏感匹配。

### 执行功能

本扩展在编辑器右上角提供了一个播放图标按钮，用于执行 Mplus 文件：

- **自动切换目录**：自动切换到当前文件所在目录
- **执行命令**：自动执行 `mplus 文件名.inp` 命令
- **跨平台支持**：
  - Windows：使用 PowerShell 兼容的命令
  - Linux/macOS：使用标准 shell 命令
- **终端集成**：在 VS Code 集成终端中显示执行结果

## 安装

### 从 VS Code Marketplace 安装

1. 打开 VS Code
2. 按 `Ctrl+Shift+X` 打开扩展面板
3. 搜索 "Mplus"
4. 点击 "Install" 安装

### 从源码安装

1. 克隆本仓库：
   ```bash
   git clone https://github.com/feewg/mplus.git
   ```
2. 进入项目目录：
   ```bash
   cd mplus
   ```
3. 安装依赖：
   ```bash
   npm install
   ```
4. 打包扩展：
   ```bash
   npm run vscode:prepublish
   ```
5. 在 VS Code 中安装：
   - 按 `Ctrl+Shift+P` 打开命令面板
   - 输入 "Install from VSIX"
   - 选择打包好的 `.vsix` 文件

## 使用方法

### 语法高亮

语法高亮会自动应用于所有 `.inp` 和 `.out` 文件。只需打开文件即可看到高亮效果。

### 执行 Mplus 文件

1. 打开一个 `.inp` 文件
2. 点击编辑器右上角的播放图标按钮
3. 扩展会自动：
   - 创建新终端
   - 切换到文件所在目录
   - 执行 `mplus 文件名.inp` 命令
4. 在终端中查看执行结果

## 要求

- VS Code 版本 >= 1.96.0
- Mplus 软件已安装并可在系统 PATH 中访问

## 配置

本扩展使用 VS Code 的默认语言配置。您可以通过创建 `.vscode/settings.json` 文件来自定义设置：

```json
{
  "[mplus]": {
    "editor.fontSize": 14,
    "editor.tabSize": 4,
    "editor.insertSpaces": true
  }
}
```

## 键盘快捷键

当前版本没有预定义的键盘快捷键。您可以在 VS Code 的键盘快捷键设置中为 `mplus.run` 命令添加自定义快捷键。

## 开发

### 设置开发环境

1. 克隆仓库：
   ```bash
   git clone https://github.com/feewg/mplus.git
   cd mplus
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 在 VS Code 中打开项目

### 运行扩展

1. 按 `F5` 启动扩展开发主机
2. 在新打开的 VS Code 窗口中，打开一个 `.inp` 文件测试功能

### 编译

```bash
npm run compile
```

### 监听模式

```bash
npm run watch
```

## 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 致谢

- 感谢 [paulinadupin/mplus-syntax](https://github.com/paulinadupin/mplus-syntax) 项目提供的语法高亮参考
- 感谢 Mplus 软件的开发者

## 问题反馈

如果您遇到任何问题或有功能建议，请在 [GitHub Issues](https://github.com/feewg/mplus/issues) 中提交。

## 更新日志

### v0.0.2 (2026-02-05)
- 增强了语法高亮，添加了全面的 Mplus 关键词支持
- 添加了对 .out 文件的支持
- 添加了更多 DATA、VARIABLE、ANALYSIS、OUTPUT、PLOT、SAVEDATA、MONTECARLO 关键词
- 添加了数学函数、统计函数、分布函数高亮
- 添加了逻辑运算符高亮
- 添加了变量范围、字符串字面量、常量高亮
- 所有关键词支持大小写不敏感匹配

### v0.0.1 (2026-02-05)
- 初始版本发布
- 基本的 Mplus 语法高亮
- 执行按钮功能
- 支持 .inp 文件
