import browsersync from 'rollup-plugin-browsersync'
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
        })
    ]

};