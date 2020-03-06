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

    if (this.isAtomic) {
      this.isAtom = this.config.get('atom');
      this.isMolecule = this.config.get('molecule');
      this.isOrganism = this.config.get('organism');
      this.isTemplate = this.config.get('template');
    } else {
      this.isPage = this.config.get('page');
    }
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
    const basePath = `src/components`;
    let componentPath = '';

    if (this.isAtomic) {
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
    } else {
      if (this.isPage) {
        componentPath = 'src/pages';
      } else {
        componentPath = basePath;
      }
    }

    this.fs.copyTpl(
      this.templatePath(folderPath),
      this.destinationPath(`${componentPath}/${this.answers.name}.js`),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath('style.css'),
      this.destinationPath(`${componentPath}/${this.answers.name}.css`),
    );
  }
};