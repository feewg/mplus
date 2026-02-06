/**
 * 清除终端命令
 */

import * as vscode from 'vscode';
import { TerminalManager } from '../services/terminalManager';

export function registerClearTerminalCommand(
  terminalManager: TerminalManager
): vscode.Disposable {
  return vscode.commands.registerCommand('mplus.clearTerminal', () => {
    terminalManager.clear();
    vscode.window.showInformationMessage('已清除 Mplus 终端');
  });
}
