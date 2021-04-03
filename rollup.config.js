import postcss from 'rollup-plugin-postcss';
import browsersync from 'rollup-plugin-browsersync';
import postcssNormalize from 'postcss-normalize';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import injectEnv from 'rollup-plugin-inject-env';
import {
    terser
} from "rollup-plugin-terser";
import {
    babel
} from '@rollup/plugin-babel';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

export default {
    input: 'src/scripts/index.js',
    output: {
        file: 'public/giphy.js',
        format: 'iife'
    },

    plugins: [
        resolve(),
        injectEnv(),
        !isDevelopment && terser(),
        commonjs(),
        babel({
            babelHelpers: 'bundled'
        }),
        isDevelopment && browsersync({
            server: 'public'
        }),
        postcss({
            sourceMap: isDevelopment,
            plugins: [postcssNormalize(), autoprefixer(), cssnano()],
            extract: true
        })
    ]
};