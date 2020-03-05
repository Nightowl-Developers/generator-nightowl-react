const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('atom');
    this.option('molecule');
    this.option('organism');
    this.option('template');
    this.option('page');

    this.esVersion = this.config.get('version');
    this.isAtomic = this.config.get('atomic');
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
    // TODO - create proper folderPath if atomic or not
    const folderPath = this.esVersion + '/component.js';
  
    const destinationPath = this.options.page
      ? 'pages/src/' + this.answers.name + '.js'
      : 'components/src/' + this.answers.name + '.js';

    this.fs.copyTpl(
      this.templatePath(folderPath),
      this.destinationPath(destinationPath),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath('style.css'),
      this.destinationPath('src/styles/' + this.answers.name + '.css'),
    );
  }
};