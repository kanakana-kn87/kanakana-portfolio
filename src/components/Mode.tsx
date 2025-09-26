// ⭐️ 任意のクライアントコンポーネント (例: src/components/Header.tsx)
"use client";

import { Select, Flex, Text } from '@radix-ui/themes';
import { useTheme } from '@/app/providers';;

const ThemeToggler = () => {
  // ⭐️ フックを呼び出して、必要な機能を取り出す！
  const { mode, setMode } = useTheme();

  const handleThemeChange = (value: string) => {
    // ⭐️ setMode に正しい型 ('dark' | 'light') を渡してテーマを切り替える
    setMode(value as "dark" | "light");
  };
  return (
        <Flex align="center" gap="2">
      <Text size="2">テーマ:</Text>
      
      {/* ⭐️ Select.Root がテーマの状態を管理する役割を担う！ */}
      <Select.Root 
        size="2"
        value={mode} // 👈 現在のテーマが自動で選択される
        onValueChange={handleThemeChange} // 👈 選択が変わると setMode が実行される
      >
        <Select.Trigger placeholder="テーマを選択" />
        <Select.Content position="popper">
          
          {/* 🌙 ダークモードの選択肢 */}
          <Select.Item value="dark">🌙 ダーク</Select.Item>
          
          {/* 💡 ライトモードの選択肢 */}
          <Select.Item value="light">💡 ライト</Select.Item>
          
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default ThemeToggler;
