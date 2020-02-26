const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // adds support for --page flag
    this.option('page');
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your react app\'s name.',
        default: this.appname,
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
      this.templatePath('component.js'),
      this.destinationPath('components/component.js'),
    );

    this.fs.copyTpl(
      this.templatePath('style.css'),
      this.destinationPath('styles/style.css'),
    );
  }

  install() {
    this.npmInstall();
  }
};