const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const fs = require('fs-extra')

describe('nightowl-react', () => {
    const generatorFile = path.join(__dirname, '../generators/app')

    it('should generate the javascript project', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'js',
                description: 'The nightowl developers javscript and css project.',
                author: 'nightowl-developers',
                esVersion: 'javascript',
                linter: 'eslint:recommended',
                style: 'css'
            })
            .then((dir) => {
                // assertions
                assert.file(`${dir}/js/eslint/eslint.airbnb.js`)
                assert.file(`${dir}/js/eslint/eslint.base.js`)
                assert.file(`${dir}/js/eslint/eslint.prettier.js`)
                assert.file(`${dir}/js/public/index.html`)
                assert.file(`${dir}/js/src/app.jsx`)
                assert.file(`${dir}/js/src/index.js`)
                assert.file(`${dir}/js/utils/dependencies.js`)
                assert.file(`${dir}/js/webpack/style/webpack.css.js`)
                assert.file(`${dir}/js/webpack/style/webpack.less.js`)
                assert.file(`${dir}/js/webpack/style/webpack.sass.js`)
                assert.file(`${dir}/js/webpack/webpack.base.js`)
                assert.file(`${dir}/js/webpack/webpack.dev.js`)
                assert.file(`${dir}/js/.babelrc`)
                // assert.file(`${dir}/js/package.json`)
            })
    })

    it('should generate the typescript project', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'ts',
                description: 'The nightowl developers javscript and css project.',
                author: 'nightowl-developers',
                esVersion: 'typescript',
                linter: 'eslint:recommended',
                style: 'css'
            })
            .then((dir) => {
                // assertions
                assert.file(`${dir}/ts/eslint/eslint.airbnb.js`)
                assert.file(`${dir}/ts/eslint/eslint.base.js`)
                assert.file(`${dir}/ts/eslint/eslint.prettier.js`)
                assert.file(`${dir}/ts/public/index.html`)
                assert.file(`${dir}/ts/src/app.tsx`)
                assert.file(`${dir}/ts/src/index.ts`)
                assert.file(`${dir}/ts/utils/dependencies.js`)
                assert.file(`${dir}/ts/webpack/style/webpack.css.js`)
                assert.file(`${dir}/ts/webpack/style/webpack.less.js`)
                assert.file(`${dir}/ts/webpack/style/webpack.sass.js`)
                assert.file(`${dir}/ts/webpack/webpack.base.js`)
                assert.file(`${dir}/ts/webpack/webpack.dev.js`)
                assert.file(`${dir}/ts/.babelrc`)
                // assert.file(`${dir}/js/.gitignore`)
                // assert.file(`${dir}/js/package-lock.json`)
                assert.file(`${dir}/ts/package.json`)
            })
    })

    it('should have prompted values in package.json', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'ts',
                description: 'The nightowl developers javascript and css project.',
                author: 'nightowl-developers',
                esVersion: 'typescript',
                linter: 'eslint:recommended',
                style: 'css'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/ts/package.json`)
                
                const packageName = packageJson.name
                const packageDescription = packageJson.description
                const packageAuthor = packageJson.author
            
                assert(packageName === 'ts', '')
                assert(packageDescription === 'The nightowl developers javascript and css project.', ''),
                assert(packageAuthor === 'nightowl-developers', '')
            })
    })

    it('should have typescript dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'ts',
                description: 'The nightowl developers javscript and css project.',
                author: 'nightowl-developers',
                esVersion: 'typescript',
                linter: 'eslint:recommended',
                style: 'css'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/ts/package.json`)

                const hasBabelPresetTypescript = packageJson.devDependencies.hasOwnProperty('@babel/preset-typescript')
                const hasNodeTypes = packageJson.devDependencies.hasOwnProperty('@types/node')
                const hasReactTypes = packageJson.devDependencies.hasOwnProperty('@types/react')
                const hasReactDomTypes = packageJson.devDependencies.hasOwnProperty('@types/react-dom')
                const hasTypescript = packageJson.devDependencies.hasOwnProperty('typescript')
            
                assert(hasBabelPresetTypescript, '')
                assert(hasNodeTypes, ''),
                assert(hasReactTypes, '')
                assert(hasReactDomTypes, '')
                assert(hasTypescript, '')
            })
    })

    it('should have react@16 dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'less',
                description: 'The nightowl developers javscript and less project.',
                author: 'nightowl-developers',
                linter: 'airbnb',
                style: 'less'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/less/package.json`)

                const hasReact = packageJson.dependencies.hasOwnProperty('react')
                const hasReactDom = packageJson.dependencies.hasOwnProperty('react-dom')
                const hasReactRouter = packageJson.dependencies.hasOwnProperty('react-router-dom')
                const reactVersion = packageJson.dependencies.react
                const reactDomVersion = packageJson.dependencies['react-dom']
                const reactRouterDomVersion = packageJson.dependencies['react-router-dom']

                assert(hasReact, '')
                assert(hasReactDom, '')
                assert(hasReactRouter, '')
                assert(reactVersion.startsWith('^16'), '')
                assert(reactDomVersion.startsWith('^16'), '')
                assert(reactRouterDomVersion.startsWith('^5'), '')
            })
    })

    it('should have eslint dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'less',
                description: 'The nightowl developers javscript and less project.',
                author: 'nightowl-developers',
                linter: 'airbnb',
                style: 'less'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/less/package.json`)
                const hasEslint = packageJson.devDependencies.hasOwnProperty('eslint')

                assert(hasEslint, '')
            })
    })

    it('should have airbnb dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'less',
                description: 'The nightowl developers javscript and less project.',
                author: 'nightowl-developers',
                linter: 'airbnb',
                style: 'less'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/less/package.json`)
                const hasEslint = packageJson.devDependencies.hasOwnProperty('eslint')
                const hasConfigAirbnb = packageJson.devDependencies.hasOwnProperty('eslint-config-airbnb')
                const hasPluginImport = packageJson.devDependencies.hasOwnProperty('eslint-plugin-import')
                const hasPluginReact = packageJson.devDependencies.hasOwnProperty('eslint-plugin-react')
                const hasPluginReactHooks = packageJson.devDependencies.hasOwnProperty('eslint-plugin-react-hooks')
                const hasPluginJsxA11y = packageJson.devDependencies.hasOwnProperty('eslint-plugin-jsx-a11y')

                assert(hasEslint, '')
                assert(hasConfigAirbnb, '')
                assert(hasPluginImport, '')
                assert(hasPluginReact, '')
                assert(hasPluginReactHooks, '')
                assert(hasPluginJsxA11y, '')
            })
    })

    it('should have prettier dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'less',
                description: 'The nightowl developers javscript and less project.',
                author: 'nightowl-developers',
                linter: 'prettier',
                style: 'less'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/less/package.json`)
                const hasEslint = packageJson.devDependencies.hasOwnProperty('eslint')
                const hasPluginPrettier = packageJson.devDependencies.hasOwnProperty('eslint-plugin-prettier')
                const hasConfigPrettier = packageJson.devDependencies.hasOwnProperty('eslint-config-prettier')
                const hasPrettier = packageJson.devDependencies.hasOwnProperty('prettier')

                assert(hasEslint, '')
                assert(hasPluginPrettier, '')
                assert(hasConfigPrettier, '')
                assert(hasPrettier, '')
            })
    })

    it('should have css dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'less',
                description: 'The nightowl developers javscript and less project.',
                author: 'nightowl-developers',
                linter: 'airbnb',
                style: 'less'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/less/package.json`)
                const hasCssLoader = packageJson.devDependencies.hasOwnProperty('css-loader')
                const hasStyleLoader = packageJson.devDependencies.hasOwnProperty('style-loader')

                assert(hasCssLoader, '')
                assert(hasStyleLoader, '')
            })
    })

    it('should have less dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'less',
                description: 'The nightowl developers javscript and less project.',
                author: 'nightowl-developers',
                linter: 'airbnb',
                style: 'less'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/less/package.json`)
                const hasCssLoader = packageJson.devDependencies.hasOwnProperty('css-loader')
                const hasLessLoader = packageJson.devDependencies.hasOwnProperty('less-loader')
                const hasStyleLoader = packageJson.devDependencies.hasOwnProperty('style-loader')

                assert(hasCssLoader, '')
                assert(hasLessLoader, '')
                assert(hasStyleLoader, '')
            })
    })

    it('should have sass dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'sass',
                description: 'The nightowl developers javscript and less project.',
                author: 'nightowl-developers',
                linter: 'airbnb',
                style: 'sass'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/sass/package.json`)
                const hasSass = packageJson.devDependencies.hasOwnProperty('sass')
                const hasCssLoader = packageJson.devDependencies.hasOwnProperty('css-loader')
                const hasSassLoader = packageJson.devDependencies.hasOwnProperty('sass-loader')
                const hasStyleLoader = packageJson.devDependencies.hasOwnProperty('style-loader')

                assert(hasSass, '')
                assert(hasCssLoader, '')
                assert(hasSassLoader, '')
                assert(hasStyleLoader, '')
            })
    })

    it('should have styled-components dependencies', () => {
        return helpers.run(generatorFile)
            .withPrompts({
                name: 'sass',
                description: 'The nightowl developers javscript and less project.',
                author: 'nightowl-developers',
                linter: 'airbnb',
                style: 'styled-components'
            })
            .then((dir) => {
                // assertions
                const packageJson = require(`${dir}/sass/package.json`)
                const hasStyledComponents = packageJson.dependencies.hasOwnProperty('styled-components')

                assert(hasStyledComponents, '')
            })
    })

    it.skip('should run the javascript application without crashing', function () {

    })

    it.skip('should run the typescript application without crashing', function () {

    })
})
