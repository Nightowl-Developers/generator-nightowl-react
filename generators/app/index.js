const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('typescript');

    this.esVersion = this.options.typescript
      ? 'typescript'
      : 'es6';
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your react app\'s name.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your react app\'s description.'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Your name?',
      },
      {
        type: 'list',
        name: 'linter',
        message: 'Select your preferred linter profile.',
        choices: [
            'airbnb',
            'prettier',
            'none',
        ]
      },
      {
        type: 'list',
        name: 'style',
        message: 'Select your preferred method of styling components.',
        choices: [
          'css',
          'less',
          'sass',
          'styled-components',
        ]
      }
    ]);

    this.answers = answers;
  }

  paths() {
    // use the templates directory for the react app template files
    this.sourceRoot();

    // use the cwd or the closest parent with a .yo-rc.json
    this.destinationPath();
  }

  writing() {
    const extension = (this.esVersion === 'typescript') ? 'tsx' : 'js';

    // copy all template files to destinationRoot()
    this.fs.copyTpl(
      this.templatePath(`${this.esVersion}/.babelrc`),
      this.destinationPath(`${this.answers.name}/.babelrc`),
    );

    // this.fs.copyTpl(
    //   this.templatePath(this.esVersion + '/.gitignore'),
    //   this.destinationPath(this.answers.name + '/.gitignore'),
    // );

    /* Copy ESLint Config Files */
    this.fs.copyTpl(
        this.templatePath(`${this.esVersion}/eslint/eslint.base.js`),
        this.destinationPath(`${this.answers.name}/eslint/eslint.base.js`),
    );

    this.fs.copyTpl(
        this.templatePath(`${this.esVersion}/eslint/eslint.airbnb.js`),
        this.destinationPath(`${this.answers.name}/eslint/eslint.airbnb.js`),
    );

    this.fs.copyTpl(
        this.templatePath(`${this.esVersion}/eslint/eslint.prettier.js`),
        this.destinationPath(`${this.answers.name}/eslint/eslint.prettier.js`),
    );

    /* Copy Webpack Config Files */
    this.fs.copyTpl(
        this.templatePath(`${this.esVersion}/webpack/webpack.dev.js`),
        this.destinationPath(`${this.answers.name}/webpack/webpack.dev.js`),
    );

    this.fs.copyTpl(
      this.templatePath(`${this.esVersion}/webpack/webpack.base.js`),
      this.destinationPath(`${this.answers.name}/webpack/webpack.base.js`),
    );

    this.fs.copyTpl(
        this.templatePath(`${this.esVersion}/webpack/style/webpack.css.js`),
        this.destinationPath(`${this.answers.name}/webpack/style/webpack.css.js`),
    );

    this.fs.copyTpl(
      this.templatePath(`${this.esVersion}/webpack/style/webpack.less.js`),
      this.destinationPath(`${this.answers.name}/webpack/style/webpack.less.js`),
    );

    this.fs.copyTpl(
      this.templatePath(`${this.esVersion}/webpack/style/webpack.sass.js`),
      this.destinationPath(`${this.answers.name}/webpack/style/webpack.sass.js`),
    );

    /* Copy Util Files */
    this.fs.copyTpl(
        this.templatePath(`${this.esVersion}/utils/dependencies.js`),
        this.destinationPath(`${this.answers.name}/utils/dependencies.js`),
    );

    /* Copy Public Files */
    this.fs.copyTpl(
      this.templatePath(`${this.esVersion}/public/index.html`),
      this.destinationPath(`${this.answers.name}/public/index.html`),
    );

    /* Copy App Files */
    this.fs.copyTpl(
      this.templatePath(`${this.esVersion}/src/index.${extension}`),
      this.destinationPath(`${this.answers.name}/src/index.${extension}`),
    );

    this.fs.copyTpl(
      this.templatePath(`${this.esVersion}/src/app.${extension}`),
      this.destinationPath(`${this.answers.name}/src/app.${extension}`),
    );

    // check if the typescript flag was used
    if (this.options.typescript) {
      this.fs.copyTpl(
        this.templatePath(this.esVersion + '/tsconfig.json'),
        this.destinationPath(this.answers.name + '/tsconfig.json'),
      );
    }

    const reactDependencies = {
      react: '16.12.0',
      'react-dom': '16.12.0',
      'react-router-dom': '5.2.0',
    };

    const babelDependencies = {
      '@babel/core': '7.8.6',
      '@babel/cli': '7.8.4',
      '@babel/preset-env': '7.8.7',
      '@babel/preset-react': '7.8.3',
    };

    const webpackDependencies = {
      'babel-loader': '8.0.6',
      'file-loader': '6.0.0',
      'html-webpack-plugin': '3.2.0',
      webpack: '4.41.6',
      'webpack-cli': '3.3.11',
      'webpack-dev-server': '3.10.3',
      'webpack-merge': '4.2.2',
    };

    const eslintBaseDependencies = {
      'eslint': '7.4.0',
    };

    const airbnbDependencies = {
      'eslint-config-airbnb': '18.2.0',
      'eslint-plugin-import': '2.22.0',
      'eslint-plugin-react': '7.20.3',
      'eslint-plugin-react-hooks': '4.0.5',
      'eslint-plugin-jsx-a11y': '6.3.1',
    };

    const prettierDependencies = {
      'eslint-plugin-prettier': '3.1.4',
      'eslint-config-prettier': '6.11.0',
      'prettier': '2.0.5',
    };

    const cssDependencies = {
      'css-loader': '3.5.3',
      'style-loader': '1.2.1',
    };

    const lessDependencies = {
      'css-loader': '3.5.3',
      'less-loader': '6.2.0',
      'style-loader': '1.2.1',
    };

    const sassDependencies = {
      'sass': '1.26.9',
      'css-loader': '3.5.3',
      'sass-loader': '8.0.2',
      'style-loader': '1.2.1',
    };

    const styledComponentsDependencies = {
      'styled-components': '5.1.1',
    };

    const jestDependencies = {
      'enzyme': '3.11.0',
      'enzyme-adapter-react-16': '1.15.0',
      jest: '25.1.0',
    };

    const typescriptDependencies = {
      //
    };

    const packageJson = {
      name: this.answers.name,
      version: '0.0.1',
      description: this.answers.description,
      author: this.answers.author,
      scripts: {
        start: 'webpack-dev-server --config webpack/webpack.base.js',
        lint: 'eslint --config eslint/eslint.base.js src/**/*.js',
        'lint:fix': 'eslint --config eslint/eslint.base.js src/**/*.js --fix',
        test: 'jest',
        'test:coverage': '',
      },
      main: 'src/index.js',
      dependencies: {
        ...reactDependencies,
        'path': '0.12.7'
      },
      devDependencies: {
        ...(this.answers.linter === 'airbnb' && airbnbDependencies),
        ...babelDependencies,
        ...(this.answers.style === 'css' && cssDependencies),
        ...eslintBaseDependencies,
        ...jestDependencies,
        ...(this.answers.style === 'less' && lessDependencies),
        ...(this.answers.linter === 'prettier' && prettierDependencies),
        ...(this.answers.style === 'sass' && sassDependencies),
        ...(this.answers.style === 'styled-components' && styledComponentsDependencies),
        ...webpackDependencies,
      }
    };

    // write package.json
    this.fs.extendJSON(this.destinationPath(this.answers.name + '/package.json'), packageJson);

    this.destinationPath(path.join(__dirname, '/' + this.answers.name));

    // set configc in .yo-rc.json
    this.config.set('version', this.esVersion);

    // move .yo-rc.json into project
    this.fs.copy(`${this.destinationRoot()}\\.yo-rc.json`, `${this.destinationRoot()}\\${this.answers.name}\\.yo-rc.json`);
  }

  // install() {
  //   // need to cd into this.answers.name directory to fix install
  //   this.npmInstall();
  // }
};