const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        join(__dirname, 'libs/ui/**/!(*.stories|*.spec).{ts,html}'),
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    '100': '#E1E1E1',
                    '200': '#B4B4B4',
                    '300': '#888888',
                    '400': '#5B5B5B',
                    '500': '#2E2E2E',
                    '600': '#242424',
                    '700': '#1A1A1A',
                    '800': '#101010',
                    '900': '#070707',
                },
                secondary: {
                    '100': '#FCD0D4',
                    '200': '#F88B94',
                    '300': '#F34553',
                    '400': '#DF0E20',
                    '500': '#9B0A16',
                    '600': '#790811',
                    '700': '#58060C',
                    '800': '#370308',
                    '900': '#160103',
                },
                tertiary: {
                    '50': '#FDFDFD',
                    '100': '#FBFBFB',
                    '200': '#F5F5F5',
                    '300': '#EFEFEF',
                    '400': '#E9E9E9',
                    '500': '#E4E4E4',
                    '600': '#B2B2B2',
                    '700': '#828282',
                    '800': '#515151',
                    '900': '#202020',
                }
            },
        },
    },
    plugins: [],
};
