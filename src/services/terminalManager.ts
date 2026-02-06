/**
 * 终端管理器 - 管理用于执行 Mplus 的终端
 */

import * as vscode from 'vscode';
import { ITerminalManager } from '../types';

export class TerminalManager implements ITerminalManager {
  private terminal: vscode.Terminal | null = null;
  private readonly terminalName: string = 'Mplus';
  private disposable: vscode.Disposable | null = null;

  /**
   * 获取或创建终端
   */
  getOrCreateTerminal(): vscode.Terminal {
    if (!this.terminal) {
      this.terminal = vscode.window.createTerminal(this.terminalName);
      
      // 监听终端关闭事件
      this.disposable = vscode.window.onDidCloseTerminal((closedTerminal) => {
        if (closedTerminal === this.terminal) {
          this.terminal = null;
          this.disposable?.dispose();
          this.disposable = null;
        }
      });
    }
    return this.terminal;
  }

  /**
   * 显示终端
   */
  show(): void {
    const terminal = this.getOrCreateTerminal();
    terminal.show();
  }

  /**
   * 清除终端
   */
  clear(): void {
    const terminal = this.getOrCreateTerminal();
    const platform = process.platform;
    
    if (platform === 'win32') {
      terminal.sendText('Clear-Host');
    } else {
      terminal.sendText('clear');
    }
  }

  /**
   * 发送文本到终端
   */
  sendText(text: string): void {
    const terminal = this.getOrCreateTerminal();
    terminal.sendText(text);
  }

  /**
   * 销毁终端
   */
  dispose(): void {
    if (this.disposable) {
      this.disposable.dispose();
      this.disposable = null;
    }
    if (this.terminal) {
      this.terminal.dispose();
      this.terminal = null;
    }
  }
}
