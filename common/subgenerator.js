'use strict';

const Generator  = require('yeoman-generator');
const changeCase = require('change-case');
const pluralize  = require('pluralize');

module.exports = class Subgenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // libs
    this.changeCase = changeCase;
    this.pluralize  = pluralize;

    // Const etc
    this.names        = {};
    this.paths        = {};
  }

  getTargetString(name) {
    return `/* ${name} injection target */`;
  }

  init(name, type) {
    this.type = type.toLowerCase();

    this.names = {
      raw       : name,
      dashed    : this.changeCase.paramCase(name),
      camel     : this.changeCase.camelCase(name),
      pascal    : this.changeCase.pascalCase(name),
      class     : this.changeCase.pascalCase(name + ' ' + type),
      typePlural: this.pluralize(this.type, 2)
    };

    this.paths.app    = 'src/app';
    this.paths.module = `${this.paths.app}/index.module.js`;
    this.paths.route  = `${this.paths.app}/index.route.js`;
    this.paths.prefix = `${this.paths.app}/${this.names.typePlural}/${this.names.dashed}`;

    this.targets = {
      ctrl     : this.getTargetString('controller'),
      ctrlClass: this.getTargetString('controller class'),
      route    : this.getTargetString('route')
    };
  }

  injectIntoModule() {
    let moduleContent = this.fs.read(this.paths.module)
      .replace(this.targets.ctrl,
        `.${this.type}('${this.names.class}', ${this.names.class})\n\t${this.targets.ctrl}`)
      .replace(this.targets.ctrlClass,
        `import {${this.names.class}} from './${this.names.typePlural}/${this.names.dashed}/${this.names.dashed}.${this.type}';\n${this.targets.ctrlClass}`);

    this.fs.write(this.paths.module, moduleContent);
  }
};
