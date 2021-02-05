const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // pull data from config files
    this.esVersion = this.config.get('version');
    this.style = this.config.get('style');
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
    // the template directory
    const versionTemplateDirectory = this.version === 'typescript'
      ? 'typescript'
      : 'javascript';

    // the component extension
    const componentExtension = this.version === 'typescript'
      ? '.tsx'
      : '.jsx';

    // the style extension
    const styleExtension = this.style;

    // path to save files
    const baseComponentPath = `src/components/${this.answers.type}/${this.answers.name}`;
    const baseStylePath = `src/components/${this.answers.type}/${this.answers.name}/style`;

    this.fs.copyTpl(
      this.templatePath(`${versionTemplateDirectory}/${styleExtension}.${componentExtension}`),
      this.destinationPath(`${baseComponentPath}/${this.answers.name}${componentExtension}`),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath(`${versionTemplateDirectory}/${styleExtension}.${componentExtension}`),
      this.destinationPath(`${baseStylePath}/${this.answers.name}${componentExtension}`),
    );
  }
};
