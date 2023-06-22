const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return devOnlyPages();
    },
    webpack(config, { buildId, dev, isServer, defaultLoaders, nextRuntime }) {
        applySvgr(config);
        return config
    },
}

function devOnlyPages() {
    const componentsDemo = '/components';
    const pages = [componentsDemo];

    return pages.map(source => ({
        source,
        destination: isDev ? source : '/404',
    }));
}

function applySvgr(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
            use: ['@svgr/webpack'],
        },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i
}

module.exports = nextConfig
