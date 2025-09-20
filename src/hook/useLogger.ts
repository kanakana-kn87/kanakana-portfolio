// src/app/hooks/useLogger.ts
"use client";

import { useCallback } from 'react';

// ログレベルを定義
type LogLevel = 'INFO' | 'WARN' | 'ERROR';

// ログを送るカスタムフック
export function useLogger() {
  // サーバーにログを送信する関数をメモ化
  const sendLog = useCallback(async (message: string, level: LogLevel) => {
    try {
      await fetch('/api/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, level }),
      });
    } catch (error) {
      console.error('Failed to send log:', error);
    }
  }, []);

  // ログレベルごとの関数を定義
  const info = useCallback((message: string) => {
    sendLog(message, 'INFO');
  }, [sendLog]);

  const warn = useCallback((message: string) => {
    sendLog(message, 'WARN');
  }, [sendLog]);

  const error = useCallback((message: string) => {
    sendLog(message, 'ERROR');
  }, [sendLog]);

  // フックとして関数を返す
  return { info, warn, error };
}