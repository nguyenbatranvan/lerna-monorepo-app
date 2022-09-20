const {getLoader, loaderByName} = require("@craco/craco");
const packages = [];
// packages.push(path.join(__dirname, "../shared"));
const path = require("path");
const fs = require("fs");
const CracoAlias = require('craco-alias');
const rewireBabelLoader = require("craco-babel-loader-plugin");

// helpers

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    plugins: [
        //This is a craco plugin: https://github.com/sharegate/craco/blob/master/packages/craco/README.md#configuration-overview
        { plugin: rewireBabelLoader,
            options: {
                includes: [path.join(__dirname, "../shared")], //put things you want to include in array here
            }
        },
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                tsConfigPath: './tsconfig.paths.json',
            }
        }
    ],
    devServer: {
        port: 4000
    },
    // webpack: {
    //     configure: (webpackConfig, arg) => {
    //         const {isFound, match} = getLoader(webpackConfig, loaderByName("babel-loader"));
    //         if (isFound) {
    //             const include = Array.isArray(match.loader.include)
    //                 ? match.loader.include
    //                 : [match.loader.include];
    //
    //             match.loader.include = include.concat(packages);
    //         }
    //         return webpackConfig;
    //     },
    // },
};
