/**
 * 打开输出文件命令
 */

import * as vscode from 'vscode';
import * as path from 'path';

export function registerOpenOutputCommand(): vscode.Disposable {
  return vscode.commands.registerCommand('mplus.openOutput', async () => {
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

    // 构建输出文件路径
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath);
    const outputFileName = fileName.replace('.inp', '.out');
    const outputFilePath = path.join(fileDir, outputFileName);

    // 检查输出文件是否存在
    try {
      await vscode.workspace.fs.stat(vscode.Uri.file(outputFilePath));
      
      // 打开输出文件
      const uri = vscode.Uri.file(outputFilePath);
      await vscode.commands.executeCommand('vscode.openWith', uri, 'default');
    } catch (error) {
      vscode.window.showErrorMessage(`输出文件不存在: ${outputFileName}`);
    }
  });
}
