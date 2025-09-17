import { parse as tomlParse } from "toml"

import path from 'path';
import { readFileSync } from 'fs';

// process.cwd()は、プロジェクトのルートディレクトリを指すことが多いよ！
const configPath: string = path.join(process.cwd(), 'src', 'config', 'config.toml');

const configFile: string = readFileSync(configPath, 'utf8');

const config = tomlParse(configFile);

export default config;