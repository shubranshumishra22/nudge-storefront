import type { Config } from 'tailwindcss'

const sharedConfig: Partial<Config> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
    },
  },
}

export default sharedConfig
