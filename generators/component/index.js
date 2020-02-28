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
        message: 'Your react components\'s name.',
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

    // if --page, move component.js to pages/ else move to components/
    if (this.options.page) {
      this.fs.copyTpl(
        this.templatePath('component.js'),
        this.destinationPath('pages/' + this.answers.name + '.js'),
        { name: this.answers.name }
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('component.js'),
        this.destinationPath('components/' + this.answers.name + '.js'),
        { name: this.answers.name }
      );
    }

    this.fs.copyTpl(
      this.templatePath('style.css'),
      this.destinationPath('styles/' + this.answers.name + '.css'),
    );
  }

  install() {
    this.npmInstall();
  }
};