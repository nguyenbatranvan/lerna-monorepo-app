const path = require("path");
const CracoAlias = require('craco-alias');
const rewireBabelLoader = require("craco-babel-loader-plugin");

module.exports = {
    plugins: [
        { plugin: rewireBabelLoader,
            options: {
                includes: [path.join(__dirname, "../shared")]
            }
        },
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                unsafeAllowModulesOutsideOfSrc:true,
                tsConfigPath: './tsconfig.paths.json',
            }
        }
    ],
    devServer: {
        port: 4000
    }
};
