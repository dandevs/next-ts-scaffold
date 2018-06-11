const withTypescript = require("@zeit/next-typescript");
const lodashPlugin = require("lodash-webpack-plugin");

module.exports = withTypescript({
    webpack: (config) => {
        config.plugins.push(new lodashPlugin({
            currying:     true,
            placeholders: true,
        }));

        return config;
    },
});