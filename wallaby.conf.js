module.exports = (wallaby) => ({
    files: [
        "+(components|libs|pages)/**/*.ts?(x)"
    ],

    tests: [
        "tests/**/*.test.ts?(x)"
    ],

    env: {
        type: "node",
        runner: "node"
    },

    testFramework: "jest",

    compilers: {
        "**/*.ts?(x)": wallaby.compilers.babel({
            babel: false,
            presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                "@babel/preset-react",
                ["@babel/preset-stage-2", { decoratorsLegacy: true, loose: true }]
            ]
        })
    },
})