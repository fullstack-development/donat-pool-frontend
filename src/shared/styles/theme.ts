import { type Theme } from './types';

const dark100 = '#1f2041';
const dark100RGBCode = '31, 32, 65';
const primary = '#bc9cff';
const theme: Theme = {
  colors: {
    dark100,
    dark75: `rgba(${dark100RGBCode}, 0.75)`,
    dark50: `rgba(${dark100RGBCode}, 0.5)`,
    dark25: `rgba(${dark100RGBCode}, 0.25)`,
    dark10: `rgba(${dark100RGBCode}, 0.1)`,
    dark5: `rgba(${dark100RGBCode}, 0.05)`,

    primary,
    secondary: '#6fcf97',
    white: '#fff',
    primaryGradient: `linear-gradient(180deg, ${primary} 0%, #8ba4f9 100%)`,
    primaryGradient50:
      'linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%)',
    primaryGradient25:
      'linear-gradient(180deg, rgba(188, 156, 255, 0.25) 0%, rgba(139, 164, 249, 0.25) 100%)',
    secondaryGradient: 'linear-gradient(180deg, $secondary 0%, #66d2ea 100%)',
  },
};

export { theme };