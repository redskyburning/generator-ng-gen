'use strict';
const Generator  = require('yeoman-generator');
const chalk      = require('chalk');
const yosay      = require('yosay');
const changeCase = require('change-case');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.appPath = 'src/app';
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Time to make a ' + chalk.green('controller') + ' wot wot!'
    ));

    this.argument('name', {type: String, required: true});
  }

  writing() {
    let name    = this.options.name;
    let nameDashed = changeCase.paramCase(name);
    let namePascal = changeCase.pascalCase(name);
    let pathPrefix = `${this.appPath}/controllers/${nameDashed}`;
    let context = {
      name      : name,
      nameDashed: nameDashed,
      namePascal: namePascal
    };

    this.fs.copyTpl(
      this.templatePath('target.controller.js'),
      this.destinationPath(`${pathPrefix}/${nameDashed}.controller.js`),
      context);

    this.fs.copyTpl(
      this.templatePath('target.html'),
      this.destinationPath(`${pathPrefix}/${nameDashed}.html`),
      context);

    let modulePath = `${this.appPath}/index.module.js`;
    let targetStr = '/* Controller injection target */';
    let classTargetStr = '/* Controller class injection target */';
    let moduleContent = this.fs.read(modulePath);

    moduleContent = moduleContent.replace(
      targetStr,
      `.controller('${namePascal}Controller', ${namePascal}Controller)\n\t${targetStr}`
    );
    moduleContent = moduleContent.replace(
      classTargetStr,
      `import {${namePascal}Controller} from './controllers/${nameDashed}/${nameDashed}.controller';\n${classTargetStr}`
    );

    this.fs.write(modulePath,moduleContent)
  }
};
