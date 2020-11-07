const dependencies = require('../package.json').dependencies;
const devDependencies = require('../package.json').devDependencies;

function doesHaveDependency (dependencyName) {
    return (
        dependencies.hasOwnProperty(dependencyName) ||
        devDependencies.hasOwnProperty(dependencyName)
    );
}

module.exports = {
    doesHaveDependency,
};