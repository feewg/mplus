/**
 * 新建 Mplus 文件命令
 */

import * as vscode from 'vscode';
import * as path from 'path';

export function registerNewFileCommand(): vscode.Disposable {
  return vscode.commands.registerCommand('mplus.newFile', async () => {
    // 获取当前工作区文件夹
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
      vscode.window.showErrorMessage('没有打开的工作区');
      return;
    }

    // 询问文件名
    const fileName = await vscode.window.showInputBox({
      prompt: '请输入 Mplus 文件名（不需要扩展名）',
      placeHolder: 'example'
    });

    if (!fileName) {
      return;
    }

    // 构建文件路径
    const filePath = path.join(workspaceFolders[0].uri.fsPath, `${fileName}.inp`);

    // 检查文件是否已存在
    try {
      await vscode.workspace.fs.stat(vscode.Uri.file(filePath));
      vscode.window.showErrorMessage('文件已存在');
      return;
    } catch (error) {
      // 文件不存在，继续创建
    }

    // 创建文件
    const uri = vscode.Uri.file(filePath);
    const fileContent = `TITLE: ${fileName};

DATA:
  FILE = data.dat;
  VARIABLE:
  NAMES = ;
  USEVARIABLES = ;
  
ANALYSIS:
  TYPE = GENERAL;
  ESTIMATOR = ML;

MODEL:
  
OUTPUT:
  SAMPSTAT
  STANDARDIZED
  TECH1
  TECH4;
`;

    await vscode.workspace.fs.writeFile(uri, Buffer.from(fileContent, 'utf-8'));

    // 打开文件
    await vscode.commands.executeCommand('vscode.openWith', uri, 'default');

    vscode.window.showInformationMessage(`已创建 Mplus 文件: ${fileName}.inp`);
  });
}
