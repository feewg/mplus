/**
 * Mplus 扩展的类型定义
 */

import * as vscode from 'vscode';

/**
 * Mplus 配置选项
 */
export interface MplusConfig {
  /** Mplus 可执行文件的路径 */
  executablePath: string;
  /** 执行完成后自动打开 .out 文件 */
  autoOpenOutput: boolean;
  /** 执行前清除终端 */
  clearTerminal: boolean;
  /** 执行前自动保存文件 */
  saveBeforeRun: boolean;
}

/**
 * Mplus 执行状态
 */
export type MplusExecutionStatus = 'idle' | 'running' | 'error' | 'success';

/**
 * Mplus 输出文件摘要
 */
export interface MplusOutputSummary {
  /** 标题 */
  title: string;
  /** 警告列表 */
  warnings: string[];
  /** 错误列表 */
  errors: string[];
  /** 摘要信息 */
  summary: {
    /** 观测数 */
    observations?: number;
    /** 参数数 */
    parameters?: number;
    /** 对数似然 */
    logLikelihood?: number;
    /** AIC */
    aic?: number;
    /** BIC */
    bic?: number;
  };
}

/**
 * Mplus 终端管理器接口
 */
export interface ITerminalManager {
  /** 获取或创建终端 */
  getOrCreateTerminal(): vscode.Terminal;
  /** 显示终端 */
  show(): void;
  /** 清除终端 */
  clear(): void;
  /** 发送文本到终端 */
  sendText(text: string): void;
  /** 销毁终端 */
  dispose(): void;
}
