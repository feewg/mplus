/**
 * Mplus VS Code Extension
 * 主入口文件
 */

import * as vscode from 'vscode';
import { MplusConfig } from './types';
import { TerminalManager } from './services/terminalManager';
import { MplusExecutor } from './services/mplusExecutor';
import { StatusBarManager } from './services/statusBarManager';
import { DiagnosticsService } from './services/diagnostics';
import { registerRunMplusCommand } from './commands/runMplus';
import { registerStopMplusCommand } from './commands/stopMplus';
import { registerOpenOutputCommand } from './commands/openOutput';
import { registerClearTerminalCommand } from './commands/clearTerminal';
import { registerNewFileCommand } from './commands/newFile';

// 全局变量
let terminalManager: TerminalManager;
let mplusExecutor: MplusExecutor;
let statusBarManager: StatusBarManager;
let diagnosticsService: DiagnosticsService;

/**
 * 扩展激活时调用
 */
export function activate(context: vscode.ExtensionContext) {
  console.log('Mplus 扩展已激活！');

  // 获取默认配置
  const defaultConfig: MplusConfig = {
    executablePath: 'mplus',
    autoOpenOutput: true,
    clearTerminal: true,
    saveBeforeRun: true
  };

  // 初始化服务
  terminalManager = new TerminalManager();
  mplusExecutor = new MplusExecutor(terminalManager, defaultConfig);
  statusBarManager = new StatusBarManager();
  diagnosticsService = new DiagnosticsService();

  // 注册命令
  const helloWorldCommand = vscode.commands.registerCommand('mplus.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from MPlus Extension!');
  });

  const runMplusCommand = registerRunMplusCommand(mplusExecutor, statusBarManager);
  const stopMplusCommand = registerStopMplusCommand(mplusExecutor, statusBarManager);
  const openOutputCommand = registerOpenOutputCommand();
  const clearTerminalCommand = registerClearTerminalCommand(terminalManager);
  const newFileCommand = registerNewFileCommand();

  // 注册到上下文
  context.subscriptions.push(helloWorldCommand);
  context.subscriptions.push(runMplusCommand);
  context.subscriptions.push(stopMplusCommand);
  context.subscriptions.push(openOutputCommand);
  context.subscriptions.push(clearTerminalCommand);
  context.subscriptions.push(newFileCommand);
  context.subscriptions.push(terminalManager);
  context.subscriptions.push(statusBarManager);
  context.subscriptions.push(diagnosticsService);

  // 监听文档变化
  const documentChangeListener = vscode.workspace.onDidChangeTextDocument((event) => {
    if (event.document.languageId === 'mplus') {
      diagnosticsService.validateDocument(event.document);
    }
  });

  // 监听文档打开
  const documentOpenListener = vscode.workspace.onDidOpenTextDocument((document) => {
    if (document.languageId === 'mplus') {
      diagnosticsService.validateDocument(document);
    }
  });

  // 监听文档保存
  const documentSaveListener = vscode.workspace.onDidSaveTextDocument((document) => {
    if (document.languageId === 'mplus') {
      diagnosticsService.validateDocument(document);
    }
  });

  context.subscriptions.push(documentChangeListener);
  context.subscriptions.push(documentOpenListener);
  context.subscriptions.push(documentSaveListener);

  // 验证当前打开的 Mplus 文件
  vscode.workspace.textDocuments.forEach((document) => {
    if (document.languageId === 'mplus') {
      diagnosticsService.validateDocument(document);
    }
  });

  console.log('Mplus 扩展所有功能已注册完成！');
}

/**
 * 扩展停用时调用
 */
export function deactivate() {
  console.log('Mplus 扩展已停用');
  
  if (terminalManager) {
    terminalManager.dispose();
  }
  
  if (statusBarManager) {
    statusBarManager.dispose();
  }
  
  if (diagnosticsService) {
    diagnosticsService.dispose();
  }
}
