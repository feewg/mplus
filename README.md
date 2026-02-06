# Mplus VS Code Extension

一个为 Mplus 统计软件提供语法高亮和执行功能的 VS Code 扩展，现已全面升级！

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

### 代码片段

提供 20+ 个常用 Mplus 代码片段，快速插入常用代码块：

- `title` - TITLE 块
- `data` - DATA 块
- `var` - VARIABLE 块
- `analysis` - ANALYSIS 块
- `model` - MODEL 块
- `output` - OUTPUT 块
- `savedata` - SAVEDATA 块
- `montecarlo` - MONTECARLO 块
- `by` - 因子载荷
- `on` - 回归
- `with` - 协方差
- `mean` - 均值
- `var` - 方差
- `model.constraint` - 模型约束
- `model.test` - 模型检验
- `model.indirect` - 间接效应
- `twolevel` - 两层模型
- `mixture` - 混合模型
- `growth` - 增长模型
- `cfa` - 验证性因子分析
- `sem` - 结构方程模型

### 执行功能

本扩展提供多种方式执行 Mplus 文件：

- **编辑器按钮**：编辑器右上角的播放图标按钮
- **键盘快捷键**：按 `F5` 快速运行
- **命令面板**：通过 `Ctrl+Shift+P` 打开命令面板，选择 "Run Mplus"

**执行特性**：
- **自动保存**：执行前自动保存文件（可配置）
- **自动切换目录**：自动切换到当前文件所在目录
- **执行命令**：自动执行 `mplus 文件名.inp` 命令
- **自动打开输出**：执行完成后自动打开 .out 文件（可配置）
- **跨平台支持**：
  - Windows：使用 PowerShell 兼容的命令
  - Linux/macOS：使用标准 shell 命令
- **终端集成**：在 VS Code 集成终端中显示执行结果
- **状态栏指示器**：实时显示执行状态（空闲、运行中、错误、成功）

### 其他命令

- **停止执行**：停止正在运行的 Mplus 进程
- **打开输出文件**：快速打开对应的 .out 文件
- **清除终端**：清除 Mplus 终端内容
- **新建文件**：创建新的 Mplus 文件模板

### 诊断功能

提供实时的语法检查和错误提示：

- **必需块检查**：检查是否包含 TITLE、DATA、VARIABLE、ANALYSIS 等必需块
- **文件路径验证**：验证数据文件格式（.dat、.txt、.csv）
- **模型内容检查**：检查 MODEL 块是否包含模型定义
- **实时更新**：编辑时自动更新诊断信息

## 安装

### 从 GitHub Release 安装

由于本扩展未发布到 VS Code Marketplace，需要通过 GitHub Release 安装：

1. 访问本项目的 [GitHub Releases](https://github.com/feewg/mplus/releases) 页面
2. 下载最新版本的 `.vsix` 文件
3. 打开 VS Code
4. 按 `Ctrl+Shift+P` 打开命令面板
5. 输入 "Install from VSIX"
6. 选择下载的 `.vsix` 文件
7. 重启 VS Code

### 从源码安装

如果您想从源码安装最新版本：

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
   npm run package
   ```
5. 在 VS Code 中安装：
   - 按 `Ctrl+Shift+P` 打开命令面板
   - 输入 "Install from VSIX"
   - 选择项目根目录下的 `.vsix` 文件

## 使用方法

### 语法高亮

语法高亮会自动应用于所有 `.inp` 和 `.out` 文件。只需打开文件即可看到高亮效果。

### 使用代码片段

在编辑器中输入代码片段的前缀（如 `data`、`model` 等），然后按 `Tab` 键即可插入对应的代码模板。

### 执行 Mplus 文件

**方法一：使用按钮**
1. 打开一个 `.inp` 文件
2. 点击编辑器右上角的播放图标按钮

**方法二：使用快捷键**
1. 打开一个 `.inp` 文件
2. 按 `F5` 键

**方法三：使用命令面板**
1. 打开一个 `.inp` 文件
2. 按 `Ctrl+Shift+P` 打开命令面板
3. 输入 "Run Mplus" 并选择

### 查看执行状态

状态栏右侧会显示当前执行状态：
- `$(play) Mplus` - 空闲状态
- `$(loading~spin) Mplus 运行中...` - 正在运行
- `$(check) Mplus 完成` - 执行成功
- `$(error) Mplus 错误` - 执行出错

### 打开输出文件

**方法一：自动打开**
执行完成后，如果配置了 `mplus.autoOpenOutput` 为 `true`，会自动打开输出文件。

**方法二：手动打开**
1. 打开 `.inp` 文件
2. 按 `Ctrl+Shift+O`（Mac: `Cmd+Shift+O`）
3. 或通过命令面板选择 "Open Output File"

### 新建 Mplus 文件

1. 按 `Ctrl+Alt+N`（Mac: `Cmd+Alt+N`）
2. 或通过命令面板选择 "New Mplus File"
3. 输入文件名
4. 扩展会创建包含基本模板的 `.inp` 文件

## 要求

- VS Code 版本 >= 1.96.0
- Mplus 软件已安装并可在系统 PATH 中访问

## 配置

本扩展提供以下配置选项，可在 VS Code 设置中修改：

```json
{
  "mplus.executablePath": "mplus",
  "mplus.autoOpenOutput": true,
  "mplus.clearTerminal": true,
  "mplus.saveBeforeRun": true
}
```

### 配置说明

- **mplus.executablePath**（默认：`"mplus"`）
  - Mplus 可执行文件的路径
  - 如果 Mplus 不在系统 PATH 中，可以指定完整路径

- **mplus.autoOpenOutput**（默认：`true`）
  - 执行完成后是否自动打开 .out 文件
  - 设置为 `false` 可禁用自动打开

- **mplus.clearTerminal**（默认：`true`）
  - 执行前是否清除终端
  - 设置为 `false` 可保留终端历史

- **mplus.saveBeforeRun**（默认：`true`）
  - 执行前是否自动保存文件
  - 设置为 `false` 可禁用自动保存

### 编辑器配置

您还可以通过创建 `.vscode/settings.json` 文件来自定义编辑器设置：

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

| 快捷键 | 功能 | 平台 |
|--------|------|------|
| `F5` | 运行 Mplus | 所有 |
| `Ctrl+Shift+O` | 打开输出文件 | Windows/Linux |
| `Cmd+Shift+O` | 打开输出文件 | macOS |
| `Ctrl+Alt+N` | 新建 Mplus 文件 | Windows/Linux |
| `Cmd+Alt+N` | 新建 Mplus 文件 | macOS |
| `Ctrl+Shift+K` | 清除终端 | Windows/Linux |
| `Cmd+Shift+K` | 清除终端 | macOS |

您可以在 VS Code 的键盘快捷键设置中自定义这些快捷键。

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

### 打包

```bash
npm run package
```

这将生成一个 `.vsix` 文件，可以用于分发或安装。

## 项目结构

```
mplus/
├── src/
│   ├── extension.ts          # 扩展主入口
│   ├── commands/            # 命令模块
│   │   ├── runMplus.ts
│   │   ├── stopMplus.ts
│   │   ├── openOutput.ts
│   │   ├── clearTerminal.ts
│   │   └── newFile.ts
│   ├── services/            # 服务模块
│   │   ├── terminalManager.ts
│   │   ├── mplusExecutor.ts
│   │   ├── outputParser.ts
│   │   ├── statusBarManager.ts
│   │   └── diagnostics.ts
│   └── types/              # 类型定义
│       └── index.ts
├── snippets/               # 代码片段
│   └── mplus.code-snippets
├── syntaxes/               # 语法高亮
│   └── mplus.tmLanguage.json
└── package.json
```

## 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT-NC 许可证（非商业使用）。详情请参阅 [LICENSE](LICENSE) 文件。

**重要提示**：本软件**不允许商业使用**。如果您希望将本软件用于商业目的，必须从版权持有者处获得单独的商业许可证。

## 致谢

- 感谢 [paulinadupin/mplus-syntax](https://github.com/paulinadupin/mplus-syntax) 项目提供的语法高亮参考
- 感谢 Mplus 软件的开发者

## 问题反馈

如果您遇到任何问题或有功能建议，请在 [GitHub Issues](https://github.com/feewg/mplus/issues) 中提交。

## 更新日志

### v0.1.0 (2026-02-06)
- 🎉 重大版本升级！
- 🏗️ 重构代码结构，实现模块化设计
- ⚙️ 添加配置选项（executablePath、autoOpenOutput、clearTerminal、saveBeforeRun）
- 🎯 添加新命令：run、stop、openOutput、clearTerminal、newFile
- 📝 添加代码片段支持（20+ 常用 Mplus 代码片段）
- ⌨️ 添加键盘快捷键（F5 运行、Ctrl+Shift+O 打开输出等）
- 📊 添加状态栏指示器显示执行状态
- 🔍 添加诊断服务提供实时语法检查
- 📄 添加输出解析器解析 .out 文件
- 💡 改进错误处理和用户体验
- 📚 完善文档和示例

### v0.0.2 (2026-02-05)
- 增强了语法高亮，添加了全面的 Mplus 关键词支持
- 添加了对 .out 文件的支持
- 添加了更多 DATA、VARIABLE、ANALYSIS、OUTPUT、PLOT、SAVEDATA、MONTECARLO 关键词
- 添加了数学函数、统计函数、分布函数高亮
- 添加了逻辑运算符高亮
- 添加了变量范围、字符串字面量、常量高亮
- 所有关键词支持大小写不敏感匹配
- 添加了 GitHub Release 发布说明

### v0.0.1 (2026-02-05)
- 初始版本发布
- 基本的 Mplus 语法高亮
- 执行按钮功能
- 支持 .inp 文件
