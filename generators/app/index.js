const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // adds support for the --es6 flag
    this.option('es5');

    // adds support for the --typescript flag
    this.option('typescript');

    // check if the --typescript flag was used
    this.esVersion = this.options.typescript
      ? 'typescript'
      : this.options.es5 ? 'es5' : 'es6';
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your react app\'s name.',
        default: this.appname,
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
      }
    ]);

    this.answers = answers;
  }

  paths() {
    // use the templates directory for the react app template files
    this.sourceRoot();

    // use the cwd or the closest parent with a .yo-rc.json
    this.destinationPath();

    console.log(this.destinationPath());
  }

  writing() {
    const extension = (this.esVersion === 'typescript') ? 'tsx' : 'js';

    // copy all template files to destinationRoot()
    this.fs.copyTpl(
      this.templatePath(this.esVersion + '/.babelrc'),
      this.destinationPath(this.answers.name + '/.babelrc'),
    );

    this.fs.copyTpl(
      this.templatePath(this.esVersion + '/.gitignore'),
      this.destinationPath(this.answers.name + '/.gitignore'),
    );

    this.fs.copyTpl(
      this.templatePath(this.esVersion + '/webpack.dev.js'),
      this.destinationPath(this.answers.name + '/webpack.dev.js'),
    );

    this.fs.copyTpl(
      this.templatePath(this.esVersion + '/webpack.prod.js'),
      this.destinationPath(this.answers.name + '/webpack.prod.js'),
    );

    this.fs.copyTpl(
      this.templatePath(this.esVersion + '/public/index.html'),
      this.destinationPath(this.answers.name + '/public/index.html'),
    );

    this.fs.copyTpl(
      this.templatePath(this.esVersion + '/src/index.' + extension),
      this.destinationPath(this.answers.name + '/src/index.' + extension),
    );

    this.fs.copyTpl(
      this.templatePath(this.esVersion + '/src/app.' + extension),
      this.destinationPath(this.answers.name + '/src/app.' + extension),
    );

    // check if the typescript flag was used
    if (this.options.typescript) {
      this.fs.copyTpl(
        this.templatePath(this.esVersion + '/tsconfig.json'),
        this.destinationPath(this.answers.name + '/tsconfig.json'),
      );
    }

    // create package.json
    const jsJson = {
      name: this.answers.name,
      version: '0.0.1',
      description: this.answers.description,
      author: this.answers.author,
      scripts: {
        build: 'webpack',
        dev: 'webpack-dev-server --config webpack.dev.js',
        prod: 'webpack-dev-server --config webpack.prod.js',
        test: 'jest',
      },
      main: 'src/index.js',
      dependencies: {
        react: '16.12.0',
        'react-dom': '16.12.0',
        'path': '0.12.7',
      },
      devDependencies: {
        '@babel/core': '7.8.6',
        '@babel/cli': '7.8.4',
        '@babel/preset-env': '7.8.6',
        '@babel/preset-react': '7.8.3',
        'babel-loader': '8.0.6',
        jest: '25.1.0',
        webpack: '4.41.6',
        'webpack-cli': '3.3.11',
        'webpack-dev-server': '3.10.3',
        'html-webpack-plugin': '3.2.0',
        'mini-css-extract-plugin': '0.9.0',
        'uglifyjs-webpack-plugin': '2.2.0',
      }
    };

    const tsJson = {
      name: this.answers.name,
      version: '0.0.1',
      description: this.answers.description,
      author: this.answers.author,
      scripts: {
        build: 'webpack',
        dev: 'webpack-dev-server --config webpack.dev.js',
        prod: 'webpack-dev-server --config webpack.prod.js',
        test: 'jest',
      },
      main: 'src/index.js',
      dependencies: {
        react: '16.12.0',
        'react-dom': '16.12.0',
        'path': '0.12.7',
      },
      devDependencies: {
        '@babel/core': '7.8.6',
        '@babel/cli': '7.8.4',
        '@babel/preset-typescript': '7.8.3',
        '@babel/preset-env': '7.8.6',
        '@babel/preset-react': '7.8.3',
        '@types/react': '16.9.23',
        '@types/react-dom': '16.9.5',
        'babel-loader': '8.0.6',
        jest: '25.1.0',
        webpack: '4.41.6',
        'webpack-cli': '3.3.11',
        'webpack-dev-server': '3.10.3',
        'html-webpack-plugin': '3.2.0',
        'mini-css-extract-plugin': '0.9.0',
        'uglifyjs-webpack-plugin': '2.2.0',
      }
    };

    const pkgJson = this.options.typescript ? tsJson : jsJson;

    this.fs.extendJSON(this.destinationPath(this.answers.name + '/package.json'), pkgJson);

    this.destinationPath(path.join(__dirname, '/' + this.answers.name));

    this.config.set('version', this.esVersion);

    this.fs.copy(`${this.destinationRoot()}\\.yo-rc.json`, `${this.destinationRoot()}\\${this.answers.name}\\.yo-rc.json`);
  }

  // install() {
  //   // need to cd into this.answers.name directory to fix install
  //   this.npmInstall();
  // }
};