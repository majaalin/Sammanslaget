import browsersync from 'rollup-plugin-browsersync';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssNormalize from 'postcss-normalize';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

export default {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/main.js',
    format: 'iife',
  },
  plugins: [
    postcss({
      extract: true,
      sourceMap: isDevelopment,
      plugins: [postcssNormalize(), autoprefixer(), cssnano()],
    }),
    isDevelopment && browsersync({ server: 'public' }),
    isProduction && terser(),
  ],
};
