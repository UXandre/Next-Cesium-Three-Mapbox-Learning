/** @type {import('next').NextConfig} */

import pkg from 'webpack';

const webpack = pkg

const nextConfig = {
    reactStrictMode: false,
    webpack: (config, { webpack, isServer }) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify('/Cesium'),
            })
        )
        config.resolve.exportsFields = []
        // return {...config, resolve: {...config.resolve, exportsFields:[]}}
        return config
    },
};

export default nextConfig;
