/**
 * 运行 Mplus 命令
 */

import * as vscode from 'vscode';
import * as path from 'path';
import { MplusExecutor } from '../services/mplusExecutor';
import { StatusBarManager } from '../services/statusBarManager';

export function registerRunMplusCommand(
  mplusExecutor: MplusExecutor,
  statusBarManager: StatusBarManager
): vscode.Disposable {
  return vscode.commands.registerCommand('mplus.run', async () => {
    // 获取活动的编辑器
    const activeEditor = vscode.window.activeTextEditor;
    
    if (!activeEditor) {
      vscode.window.showErrorMessage('没有活动的编辑器');
      return;
    }

    // 获取文件路径
    const filePath = activeEditor.document.uri.fsPath;
    
    // 检查是否为 .inp 文件
    if (!filePath.endsWith('.inp')) {
      vscode.window.showErrorMessage('请在 .inp 文件上运行此命令');
      return;
    }

    // 更新状态栏
    statusBarManager.updateStatus('running');

    // 执行 Mplus
    const success = await mplusExecutor.execute(filePath);

    // 更新状态栏
    if (success) {
      statusBarManager.updateStatus('success');
      
      // 3秒后恢复为空闲状态
      setTimeout(() => {
        statusBarManager.updateStatus('idle');
      }, 3000);
    } else {
      statusBarManager.updateStatus('error');
      
      // 5秒后恢复为空闲状态
      setTimeout(() => {
        statusBarManager.updateStatus('idle');
      }, 5000);
    }
  });
}
