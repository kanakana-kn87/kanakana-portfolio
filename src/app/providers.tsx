// src/app/providers.tsx

"use client"; 

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
// ⭐️ useState, createContext, useContext をインポート！
import { type ReactNode, useState, createContext, useContext, useMemo } from "react"; 
import { darkThemeConfig } from "@/theme/darkTheme";
import { lightThemeConfig } from "@/theme/lightTheme";

// ⭐️ Contextの型と作成
type ThemeMode = 'dark' | 'light';
type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void; // ⭐️ この関数が外部からの「切り替え」を可能にする！
};
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type Props = { children: ReactNode; };

const Providers = ({ children }: Props) => {
  // ⭐️ let mode の代わりに useState を使う！
  const [mode, setMode] = useState<ThemeMode>("dark"); 

  const contextValue = useMemo(() => ({ mode, setMode }), [mode]);

  return (
    // ⭐️ Context.Providerで mode と setMode を提供！
    <ThemeContext.Provider value={contextValue}>
      <Theme {...(mode === "dark" ? darkThemeConfig : lightThemeConfig)}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

export default Providers;

// ⭐️ 外部コンポーネントが切り替え関数を呼び出すためのカスタムフック
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a Providers');
  }
  return context; 
};