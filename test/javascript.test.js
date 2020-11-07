const assert = require('assert');
const helpers = require('yeoman-test');
const path = require('path');
const fs = require('fs-extra');

describe('nightowl-react', () => {
    it('should generate the project', () => {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .inTmpDir((dir) => {
                console.log(`TMP DIR: ${dir}`)
                const done = this.async();
                fs.copy(path.join(__dirname, './scaffolded'), dir, done);
            })
            .withPrompts({
                name: 'js',
                description: 'The nightowl developers javscript and css project.',
                author: 'nightowl-developers',
                linter: 'airbnb',
                style: 'css'
            })
            .then((dir) => {
                // assertions
                assert.file(`${dir}eslint/eslint.airbnb.js`);
                assert.file(`${dir}eslint/eslint.base.js`);
                assert.file(`${dir}eslint/eslint.prettier.js`);
                assert.file(`${dir}public/index.html`);
                assert.file(`${dir}src/app.jsx`);
                assert.file(`${dir}src/index.js`);
                assert.file(`${dir}utils/dependencies.js`);
                assert.file(`${dir}webpack/style/webpack.css.js`);
                assert.file(`${dir}webpack/style/webpack.less.js`);
                assert.file(`${dir}webpack/style/webpack.sass.js`);
                assert.file(`${dir}webpack/webpack.base.js`);
                assert.file(`${dir}webpack/webpack.dev.js`);
                assert.file(`${dir}.babelrc`);
                assert.file(`${dir}.gitignore`);
                assert.file(`${dir}package.json`);
            });
    });

//     it('should have css dependencies', () => {
//         return helpers.run(path.join(__dirname, '../generators/app'))
//             .inTmpDir((dir) => {
//                 fs.copySync(path.join(__dirname, './scaffolded'), dir);
//             })
//             .withPrompts({
//                 name: 'css',
//                 description: 'The nightowl developers javscript and css project.',
//                 author: 'nightowl-developers',
//                 linter: 'airbnb',
//                 style: 'css'
//             })
//             .then(() => {
//                 // assertions
//             });
//     });

//     it('should have less dependencies', () => {
//         return helpers.run(path.join(__dirname, '../generators/app'))
//             .inTmpDir((dir) => {
//                 fs.copySync(path.join(__dirname, './scaffolded'), dir);
//             })
//             .withPrompts({
//                 name: 'less',
//                 description: 'The nightowl developers javscript and less project.',
//                 author: 'nightowl-developers',
//                 linter: 'airbnb',
//                 style: 'less'
//             })
//             .then(() => {
//                 // assertions
//             });
//     });

//     it('should have sass dependencies', () => {
//         return helpers.run(path.join(__dirname, '../generators/app'))
//             .inTmpDir((dir) => {
//                 fs.copySync(path.join(__dirname, './scaffolded'), dir);
//             })
//             .withPrompts({
//                 name: 'sass',
//                 description: 'The nightowl developers javscript and sass project.',
//                 author: 'nightowl-developers',
//                 linter: 'airbnb',
//                 style: 'sass'
//             })
//             .then(() => {
//                 // assertions
//             });
//     });

//     it('should have styled-components dependencies', () => {
//         return helpers.run(path.join(__dirname, '../generators/app'))
//             .inTmpDir((dir) => {
//                 fs.copySync(path.join(__dirname, './scaffolded'), dir);
//             })
//             .withPrompts({
//                 name: 'styled-components',
//                 description: 'The nightowl developers javscript and styled-components project.',
//                 author: 'nightowl-developers',
//                 linter: 'airbnb',
//                 style: 'styled-components'
//             })
//             .then(() => {
//                 // assertions
//             });
//     });

//     it('should have airbnb dependencies', () => {
//         return helpers.run(path.join(__dirname, '../generators/app'))
//             .inTmpDir((dir) => {
//                 fs.copySync(path.join(__dirname, './scaffolded'), dir);
//             })
//             .withPrompts({
//                 name: 'airbnb',
//                 description: 'The nightowl developers javscript and airbnb project.',
//                 author: 'nightowl-developers',
//                 linter: 'airbnb',
//                 style: 'css'
//             })
//             .then(() => {
//                 // assertions
//             });
//     });

//     it('should have prettier dependencies', () => {
//         return helpers.run(path.join(__dirname, '../generators/app'))
//             .inTmpDir((dir) => {
//                 fs.copySync(path.join(__dirname, './scaffolded'), dir);
//             })
//             .withPrompts({
//                 name: 'prettier',
//                 description: 'The nightowl developers javscript and prettier project.',
//                 author: 'nightowl-developers',
//                 linter: 'prettier',
//                 style: 'css'
//             })
//             .then(() => {
//                 // assertions
//             });
//     });

//     it('should generate yo-rc.json', () => {
//         return helpers.run(path.join(__dirname, '../generators/app'))
//             .inTmpDir((dir) => {
//                 fs.copySync(path.join(__dirname, './scaffolded'), dir);
//             })
//             .withPrompts({
//                 name: 'yorc',
//                 description: 'The nightowl developers javscript project.',
//                 author: 'nightowl-developers',
//                 linter: 'airbnb',
//                 style: 'css'
//             })
//             .then(() => {
//                 // assertions
//             });
//     });
});