/**
 * Mplus 执行器 - 负责执行 Mplus 文件
 */

import * as vscode from 'vscode';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import { MplusConfig, MplusOutputSummary } from '../types';
import { TerminalManager } from './terminalManager';
import { OutputParser } from './outputParser';

export class MplusExecutor {
  private terminalManager: TerminalManager;
  private outputParser: OutputParser;
  private config: MplusConfig;

  constructor(terminalManager: TerminalManager, config: MplusConfig) {
    this.terminalManager = terminalManager;
    this.outputParser = new OutputParser();
    this.config = config;
  }

  /**
   * 执行 Mplus 文件
   */
  async execute(filePath: string): Promise<boolean> {
    try {
      // 验证文件
      if (!fs.existsSync(filePath)) {
        throw new Error(`文件不存在: ${filePath}`);
      }

      if (!filePath.endsWith('.inp')) {
        throw new Error('请选择 .inp 文件');
      }

      // 获取配置
      const workspaceConfig = vscode.workspace.getConfiguration('mplus');
      const saveBeforeRun = workspaceConfig.get<boolean>('saveBeforeRun', true);
      const autoOpenOutput = workspaceConfig.get<boolean>('autoOpenOutput', true);
      const clearTerminal = workspaceConfig.get<boolean>('clearTerminal', true);
      const executablePath = workspaceConfig.get<string>('executablePath', 'mplus');

      // 保存文件
      if (saveBeforeRun) {
        const document = await vscode.workspace.openTextDocument(filePath);
        await document.save();
      }

      // 获取文件信息
      const fileDir = path.dirname(filePath);
      const fileName = path.basename(filePath);
      const outputFileName = fileName.replace('.inp', '.out');

      // 构建命令
      const command = this.buildCommand(fileDir, fileName, executablePath);

      // 清除终端
      if (clearTerminal) {
        this.terminalManager.clear();
      }

      // 执行命令
      this.terminalManager.sendText(command);
      this.terminalManager.show();

      // 监听输出文件
      if (autoOpenOutput) {
        await this.waitForOutputFile(fileDir, outputFileName);
      }

      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      vscode.window.showErrorMessage(`执行失败: ${errorMessage}`);
      return false;
    }
  }

  /**
   * 构建执行命令
   */
  private buildCommand(fileDir: string, fileName: string, executable: string): string {
    const platform = os.platform();

    if (platform === 'win32') {
      // Windows: 使用 PowerShell
      return `Set-Location "${fileDir}"; ${executable} "${fileName}"`;
    } else {
      // Unix-like systems (Linux, macOS)
      return `cd "${fileDir}" && ${executable} "${fileName}"`;
    }
  }

  /**
   * 等待输出文件生成并打开
   */
  private async waitForOutputFile(dir: string, fileName: string): Promise<void> {
    const outputPath = path.join(dir, fileName);
    const maxWaitTime = 30000; // 30秒
    const checkInterval = 500;

    const startTime = Date.now();

    while (Date.now() - startTime < maxWaitTime) {
      if (fs.existsSync(outputPath)) {
        // 检查文件是否正在写入（文件大小稳定）
        const stats1 = fs.statSync(outputPath);
        await new Promise(resolve => setTimeout(resolve, 500));
        const stats2 = fs.statSync(outputPath);

        if (stats1.size === stats2.size && stats2.size > 0) {
          // 文件大小稳定，打开文件
          const uri = vscode.Uri.file(outputPath);
          await vscode.commands.executeCommand('vscode.openWith', uri, 'default');
          return;
        }
      }
      await new Promise(resolve => setTimeout(resolve, checkInterval));
    }
  }

  /**
   * 解析输出文件
   */
  parseOutput(filePath: string): MplusOutputSummary | null {
    try {
      if (!fs.existsSync(filePath)) {
        return null;
      }

      const content = fs.readFileSync(filePath, 'utf-8');
      return this.outputParser.parse(content);
    } catch (error) {
      console.error('解析输出文件失败:', error);
      return null;
    }
  }

  /**
   * 停止执行
   */
  stop(): void {
    const platform = os.platform();
    let stopCommand: string;

    if (platform === 'win32') {
      stopCommand = 'Ctrl+C';
    } else {
      stopCommand = '\x03'; // Ctrl+C
    }

    this.terminalManager.sendText(stopCommand);
  }
}
