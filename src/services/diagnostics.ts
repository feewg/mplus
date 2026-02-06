/**
 * 诊断服务 - 提供 Mplus 文件的语法检查和诊断
 */

import * as vscode from 'vscode';
import * as path from 'path';

export class DiagnosticsService {
  private diagnosticCollection: vscode.DiagnosticCollection;

  constructor() {
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection('mplus');
  }

  /**
   * 验证文档
   */
  validateDocument(document: vscode.TextDocument): void {
    const diagnostics: vscode.Diagnostic[] = [];
    const text = document.getText();
    const lines = text.split('\n');

    // 检查必需的命令块
    const requiredBlocks = ['TITLE', 'DATA', 'VARIABLE', 'ANALYSIS'];
    const foundBlocks: string[] = [];

    lines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim();
      
      // 检查命令块格式
      const blockMatch = trimmedLine.match(/^([A-Z]+)\s*:/);
      if (blockMatch) {
        const blockName = blockMatch[1];
        foundBlocks.push(blockName);
      }

      // 检查文件路径
      if (trimmedLine.toUpperCase().startsWith('FILE')) {
        const pathMatch = trimmedLine.match(/FILE\s*=\s*["']?([^"';\s]+)/i);
        if (pathMatch) {
          const filePath = pathMatch[1];
          if (!filePath.endsWith('.dat') && !filePath.endsWith('.txt') && !filePath.endsWith('.csv')) {
            const range = new vscode.Range(
              new vscode.Position(lineIndex, 0),
              new vscode.Position(lineIndex, line.length)
            );
            diagnostics.push(new vscode.Diagnostic(
              range,
              '数据文件通常应该是 .dat、.txt 或 .csv 格式',
              vscode.DiagnosticSeverity.Warning
            ));
          }
        }
      }

      // 检查模型语法
      if (trimmedLine.toUpperCase().startsWith('MODEL:')) {
        // 检查模型是否为空
        let hasModelContent = false;
        for (let i = lineIndex + 1; i < lines.length; i++) {
          const nextLine = lines[i].trim();
          if (nextLine === '' || nextLine.startsWith('!')) {
            continue;
          }
          if (nextLine.match(/^[A-Z]+\s*:/)) {
            break;
          }
          hasModelContent = true;
        }
        
        if (!hasModelContent) {
          const range = new vscode.Range(
            new vscode.Position(lineIndex, 0),
            new vscode.Position(lineIndex, line.length)
          );
          diagnostics.push(new vscode.Diagnostic(
            range,
            'MODEL 块应该包含模型定义',
            vscode.DiagnosticSeverity.Warning
          ));
        }
      }
    });

    // 检查缺失的必需块
    const missingBlocks = requiredBlocks.filter(block => !foundBlocks.includes(block));
    if (missingBlocks.length > 0) {
      const range = new vscode.Range(0, 0, 0, 10);
      diagnostics.push(new vscode.Diagnostic(
        range,
        `缺少必需的命令块: ${missingBlocks.join(', ')}`,
        vscode.DiagnosticSeverity.Error
      ));
    }

    this.diagnosticCollection.set(document.uri, diagnostics);
  }

  /**
   * 清除文档的诊断信息
   */
  clearDiagnostics(uri: vscode.Uri): void {
    this.diagnosticCollection.delete(uri);
  }

  /**
   * 清除所有诊断信息
   */
  clearAll(): void {
    this.diagnosticCollection.clear();
  }

  /**
   * 销毁诊断服务
   */
  dispose(): void {
    this.diagnosticCollection.dispose();
  }
}
