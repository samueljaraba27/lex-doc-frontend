import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif']
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    // Tema propio: negro y dorado
    themes: [
      {
        lexdoc: {
          'color-scheme': 'dark',
          primary: '#D4AF37',
          'primary-content': '#0B0B0C',
          secondary: '#5A4A1C',
          'secondary-content': '#F5F0E1',
          accent: '#F1D98A',
          'accent-content': '#0B0B0C',
          neutral: '#151517',
          'neutral-content': '#F5F0E1',
          'base-100': '#0B0B0C',
          'base-200': '#151517',
          'base-300': '#2A2614',
          'base-content': '#F5F0E1',
          info: '#8AB4F8',
          success: '#7FB8A0',
          warning: '#D4AF37',
          error: '#E57373'
        }
      }
    ]
  }
}
