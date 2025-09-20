// src/server/lib/logger.ts
// ⭐ fsは使わない！
// import { appendFileSync } from 'fs';

// ログレベルの型を定義
type LogLevel = 'INFO' | 'WARN' | 'ERROR';

// ⭐ APIを呼び出すログ関数
function writeLog(message: string, level: LogLevel) {
  // ⭐ APIを呼び出す！
  try {
    fetch('http://localhost:3000/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // ⭐ ログレベルも送る！
      body: JSON.stringify({ message, level }),
    });
  } catch (error) {
    console.error('Failed to log from server:', error);
  }
}

// ログレベルごとの関数をエクスポート
export const serverLogger = {
  info: (message: string) => writeLog(message, 'INFO'),
  warn: (message: string) => writeLog(message, 'WARN'),
  error: (message: string) => writeLog(message, 'ERROR'),
};