// src/app/api/log/route.ts
import { NextResponse } from 'next/server';
import { existsSync, mkdirSync, appendFileSync, writeFileSync } from 'fs';
import path from 'path';

// ログディレクトリのパスを定義
const logDir = path.join(process.cwd(), 'log');
// 日付をフォーマットする関数
const getFormattedDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// サーバー再起動時にapp.logをクリアするためのフラグ
let isAppLogCleared = false;

export async function POST(request: Request) {
  const data = await request.json();
  const { message, level } = data;

  // ログディレクトリがなければ作成
  if (!existsSync(logDir)) {
    mkdirSync(logDir);
  }

  // ⭐ サーバー再起動ごとにapp.logをクリアする！
  if (!isAppLogCleared) {
    writeFileSync(path.join(logDir, 'app.log'), '');
    isAppLogCleared = true;
  }

  // ログファイルパスを定義
  const appLogPath = path.join(logDir, 'app.log');
  const dateLogPath = path.join(logDir, `${getFormattedDate()}.log`);
  
  // ログレベルをメッセージに追加
  const logMessage = `[${new Date().toISOString()}] [${level}] ${message}\n`;

  try {
    // app.logと日付.logにログを追記
    appendFileSync(appLogPath, logMessage);
    appendFileSync(dateLogPath, logMessage);

    return NextResponse.json({ success: true, message: 'Log written successfully' });
  } catch (error) {
    console.error('Failed to write log:', error);
    return NextResponse.json({ success: false, message: 'Failed to write log' }, { status: 500 });
  }
}
