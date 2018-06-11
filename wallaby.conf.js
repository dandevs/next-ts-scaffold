const wallabyWebpack = require("wallaby-webpack");

module.exports = (wallaby) => ({
    files: [
        { pattern: "+(components|libs|pages)/**/*.ts?(x)", load: false },
    ],

    tests: [
        { pattern: "tests/**/*.test.ts?(x)", load: false },
    ],

    env: {
        type: "browser",
    },

    testFramework: "mocha",
    postprocessor: wallabyWebpack(),

    compilers: {
        "**/*.ts?(x)": wallaby.compilers.babel({
            babelrc: false,
            babel: require("@babel/core"),
            presets: [
                ["@babel/preset-env", {
                    targets: {
                        browsers: "last 2 versions",
                        esmodules: false,
                    },
                }],
                "@babel/preset-typescript",
                "@babel/preset-react",
                ["@babel/preset-stage-2", { decoratorsLegacy: true, loose: true }]
            ]
        })
    },

    setup: () => {
        window.__moduleBundler.loadTests();
    },
})