import type { Config } from 'tailwindcss'
import sharedConfig from './lib/ui-tailwind.config'

const config: Config = {
  presets: [sharedConfig],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
}

export default config
