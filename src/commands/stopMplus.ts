/**
 * 停止 Mplus 命令
 */

import * as vscode from 'vscode';
import { MplusExecutor } from '../services/mplusExecutor';
import { StatusBarManager } from '../services/statusBarManager';

export function registerStopMplusCommand(
  mplusExecutor: MplusExecutor,
  statusBarManager: StatusBarManager
): vscode.Disposable {
  return vscode.commands.registerCommand('mplus.stop', () => {
    mplusExecutor.stop();
    statusBarManager.updateStatus('idle');
    vscode.window.showInformationMessage('已停止 Mplus 执行');
  });
}
