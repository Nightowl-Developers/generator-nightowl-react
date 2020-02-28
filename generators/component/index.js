const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // adds support for --page flag
    this.option('page');

    //adds support for the --es6 flag
    this.option('es5');

    // check if the --es6 flag was used
    this.esVersion = this.options.es5 ? 'es5' : 'es6';
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
    const folderPath = this.esVersion + '/component.js';
    const destinationPath = this.options.page
      ? 'pages/' + this.answers.name + '.js'
      : 'components/' + this.answers.name + '.js';

    this.fs.copyTpl(
      this.templatePath(folderPath),
      this.destinationPath(destinationPath),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath('style.css'),
      this.destinationPath('styles/' + this.answers.name + '.css'),
    );
  }
};