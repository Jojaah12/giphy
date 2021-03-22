import postcss from 'rollup-plugin-postcss';
import browsersync from 'rollup-plugin-browsersync';
import postcssNormalize from 'postcss-normalize';
import autoprefixer from 'autoprefixer';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

export default {
    input: 'src/scripts/index.js',
    output: {
        file: 'public/giphy.js',
        format: 'iife'
    },

    plugins: [
        isDevelopment && browsersync({
            server: 'public'
        }),
        postcss({
            sourceMap: isDevelopment,
            plugins: [postcssNormalize(), autoprefixer()],
            extract: true
        })
    ]

};