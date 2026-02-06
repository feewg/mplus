/**
 * 输出解析器 - 解析 Mplus 输出文件
 */

import { MplusOutputSummary } from '../types';

export class OutputParser {
  /**
   * 解析 Mplus 输出文件内容
   */
  parse(content: string): MplusOutputSummary {
    const output: MplusOutputSummary = {
      title: '',
      warnings: [],
      errors: [],
      summary: {}
    };

    const lines = content.split('\n');

    lines.forEach(line => {
      // 解析标题
      const titleMatch = line.match(/^\s*TITLE:\s*(.+)$/);
      if (titleMatch) {
        output.title = titleMatch[1].trim();
      }

      // 解析警告
      if (line.includes('WARNING')) {
        output.warnings.push(line.trim());
      }

      // 解析错误
      if (line.includes('ERROR')) {
        output.errors.push(line.trim());
      }

      // 解析摘要信息
      const obsMatch = line.match(/Number of observations\s+(\d+)/);
      if (obsMatch) {
        output.summary.observations = parseInt(obsMatch[1]);
      }

      const paramsMatch = line.match(/Number of free parameters\s+(\d+)/);
      if (paramsMatch) {
        output.summary.parameters = parseInt(paramsMatch[1]);
      }

      const logLikelihoodMatch = line.match(/Loglikelihood\s+\(H0 value\)\s+(-?\d+\.\d+)/);
      if (logLikelihoodMatch) {
        output.summary.logLikelihood = parseFloat(logLikelihoodMatch[1]);
      }

      const aicMatch = line.match(/AIC\s+(-?\d+\.\d+)/);
      if (aicMatch) {
        output.summary.aic = parseFloat(aicMatch[1]);
      }

      const bicMatch = line.match(/BIC\s+(-?\d+\.\d+)/);
      if (bicMatch) {
        output.summary.bic = parseFloat(bicMatch[1]);
      }
    });

    return output;
  }

  /**
   * 检查输出文件是否包含错误
   */
  hasErrors(summary: MplusOutputSummary): boolean {
    return summary.errors.length > 0;
  }

  /**
   * 检查输出文件是否包含警告
   */
  hasWarnings(summary: MplusOutputSummary): boolean {
    return summary.warnings.length > 0;
  }
}
