const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
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
  }

  writing() {
    // copy all template files to destinationRoot()
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'),
    );

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
    );

    this.fs.copyTpl(
      this.templatePath('.yo-rc.json'),
      this.destinationPath('.yo-rc.json'),
    );

    this.fs.copyTpl(
      this.templatePath('webpack.dev.js'),
      this.destinationPath('webpack.dev.js'),
    );

    this.fs.copyTpl(
      this.templatePath('webpack.prod.js'),
      this.destinationPath('webpack.prod.js'),
    );

    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'),
    );

    this.fs.copyTpl(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js'),
    );

    this.fs.copyTpl(
      this.templatePath('src/app.js'),
      this.destinationPath('src/app.js'),
    );

    // create package.json
    const pkgJson = {
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

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    this.npmInstall();
  }
};