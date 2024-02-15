import { config } from '@hanzo/ui/tailwind'

export default {
  presets: [config],
  content: {
    files: [
      "src/**/*.{ts,tsx}",
      './node_modules/@hanzo/ui/**/*.{ts,tsx}'
    ]
  },
} 
