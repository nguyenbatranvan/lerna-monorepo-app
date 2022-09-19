const path = require("path");
const {getLoader, loaderByName} = require("@craco/craco");
const packages = [];
packages.push(path.join(__dirname, "../shared"));
module.exports = {
    devServer: {
        port: 4000
    },
    webpack: {
        configure: (webpackConfig, arg) => {
            const {isFound, match} = getLoader(webpackConfig, loaderByName("babel-loader"));
            if (isFound) {
                const include = Array.isArray(match.loader.include)
                    ? match.loader.include
                    : [match.loader.include];

                match.loader.include = include.concat(packages);
            }

            // webpackConfig.resolve.alias={
            //     "@components": path.join(__dirname, '../shared/src/components')
            // }
            return webpackConfig;
        },
    },
};
