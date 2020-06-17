const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.esVersion = this.config.get('version');
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your react components\'s name.',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select your component type.',
        choices: [
          'atom',
          'molecule',
          'organism',
          'template',
          'page',
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
    const basePath = `src/components`;
    let componentPath = '';
    let componentTemplateFile = '';
    const folderPath = this.version === 'typescript'
      ? 'typescript'
      : 'es6';
    const extension = this.version === 'typescript'
      ? '.tsx'
      : '.js';

    switch (this.answers.type) {
      case 'atom':
        componentPath = `${basePath}/atoms/${this.answers.name}`;
        componentTemplateFile = `functional${extension}`;
        break;

      case 'molecule':
        componentPath = `${basePath}/molecules/${this.answers.name}`;
        componentTemplateFile = `functional${extension}`;
        break;

      case 'organism':
        componentPath = `${basePath}/organisms/${this.answers.name}`;
        componentTemplateFile = `functional${extension}`;
        break;

      case 'template':
        componentPath = `${basePath}/templates/${this.answers.name}`;
        componentTemplateFile = `functional${extension}`;
        break;

      default:
        componentPath = `${basePath}/pages/${this.answers.name}`;
        componentTemplateFile = `page${extension}`;
        break;
    }

    this.fs.copyTpl(
      this.templatePath(`${folderPath}/${componentTemplateFile}`),
      this.destinationPath(`${componentPath}/${this.answers.name}${extension}`),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath('style.sass'),
      this.destinationPath(`${componentPath}/${this.answers.name}.sass`),
    );
  }
};