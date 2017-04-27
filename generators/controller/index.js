'use strict';
const Generator  = require('yeoman-generator');
const chalk      = require('chalk');
const yosay      = require('yosay');
const changeCase = require('change-case');

module.exports = class extends Generator {
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
    let pathPrefix = `src/app/controllers/${nameDashed}`;
    let context = {
      name      : name,
      nameDashed: nameDashed,
      namePascal: changeCase.pascalCase(name)
    };

    this.fs.copyTpl(
      this.templatePath('target.controller.js'),
      this.destinationPath(`${pathPrefix}/${nameDashed}.controller.js`),
      context);

    this.fs.copyTpl(
      this.templatePath('target.html'),
      this.destinationPath(`${pathPrefix}/${nameDashed}.html`),
      context);
  }
};
