// src/theme/radix-config.ts

import { Theme } from "@radix-ui/themes";
import { ComponentProps } from 'react';

type RadixThemeProps = ComponentProps<typeof Theme>;
// ⭐️ テーマ設定をオブジェクトとして定義！
//    ThemePropsの型をインポートすることで、自動補完が効いてミスを防げるよ。
export const lightThemeConfig: RadixThemeProps = {
  // 以前試したカスタマイズをここに集約！
  
  // 1. 強調色と灰色
  accentColor: "cyan",    // 例：強調色を深い紫に
  grayColor: "slate",     // 例：灰色をモダンなスレート系に
  
  // 2. コンポーネントの見た目
  radius: "large",        // 例：角丸を大きく
  scaling: "100%",        // 例：コンポーネントのサイズ
  
  // 3. 全体の明るさ（ライトモード/ダークモード）
  appearance: "light",    // 'light' または 'dark' を設定できるよ
};