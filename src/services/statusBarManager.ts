/**
 * 状态栏管理器 - 管理状态栏显示
 */

import * as vscode from 'vscode';
import { MplusExecutionStatus } from '../types';

export class StatusBarManager {
  private statusBarItem: vscode.StatusBarItem;
  private currentStatus: MplusExecutionStatus = 'idle';

  constructor() {
    this.statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Right,
      100
    );
    this.statusBarItem.command = 'mplus.run';
    this.updateStatus('idle');
    this.statusBarItem.show();
  }

  /**
   * 更新状态
   */
  updateStatus(status: MplusExecutionStatus): void {
    this.currentStatus = status;

    switch (status) {
      case 'idle':
        this.statusBarItem.text = '$(play) Mplus';
        this.statusBarItem.tooltip = '运行 Mplus';
        this.statusBarItem.backgroundColor = undefined;
        break;
      case 'running':
        this.statusBarItem.text = '$(loading~spin) Mplus 运行中...';
        this.statusBarItem.tooltip = 'Mplus 正在运行';
        this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBar.warningBackground');
        break;
      case 'error':
        this.statusBarItem.text = '$(error) Mplus 错误';
        this.statusBarItem.tooltip = 'Mplus 执行出错';
        this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBar.errorBackground');
        break;
      case 'success':
        this.statusBarItem.text = '$(check) Mplus 完成';
        this.statusBarItem.tooltip = 'Mplus 执行完成';
        this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBar.prominentBackground');
        break;
    }
  }

  /**
   * 获取当前状态
   */
  getCurrentStatus(): MplusExecutionStatus {
    return this.currentStatus;
  }

  /**
   * 销毁状态栏
   */
  dispose(): void {
    this.statusBarItem.dispose();
  }
}
