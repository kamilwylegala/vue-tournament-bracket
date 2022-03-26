module.exports = {
    presets: ["@vue/app"],
    /**
     *  https://stackoverflow.com/a/56283408/4520203
     *  Problem with requiring recursiveBracket for test (commonjs require) and for build (es6 import)
     */
    sourceType: "unambiguous"
};
