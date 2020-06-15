const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('atom');
    this.option('molecule');
    this.option('organism');
    this.option('template');

    this.esVersion = this.config.get('version');
    this.typescript = this.config.get('typescript');

    this.isAtom = this.options.atom;
    this.isMolecule = this.options.molecule;
    this.isOrganism = this.options.organism;
    this.isTemplate = this.options.template;
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
    const extension = this.typescript ? '.tsx' : '.js';

    if (this.isAtom) {
      componentPath = `${basePath}/atoms/${this.answers.name}`;
    } else if (this.isMolecule) {
      componentPath = `${basePath}/molecules/${this.answers.name}`;
    } else if (this.isOrganism) {
      componentPath = `${basePath}/organisms/${this.answers.name}`;
    } else if (this.isTemplate) {
      componentPath = `${basePath}/templates/${this.answers.name}`;
    } else {
      componentPath = `${basePath}/pages/${this.answers.name}`;
    }

    this.fs.copyTpl(
      this.templatePath(folderPath),
      this.destinationPath(`${componentPath}/${this.answers.name}${extension}`),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath('style.sass'),
      this.destinationPath(`${componentPath}/${this.answers.name}.sass`),
    );
  }
};