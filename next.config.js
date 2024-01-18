/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // cssModules: {
    //     // Disable CSS Modules globally
    //     enable: false,
    // },
}

module.exports = nextConfig
