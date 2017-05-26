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
    this.names = {};
    this.paths = {};
  }

  getTargetString(name) {
    return `/* ${name} injection target */`;
  }

  init(name, type) {
    this.type = type.toLowerCase();

    let shortInstances = ['directive','constant'];
    let instanceName = (shortInstances.indexOf(type) === -1) ? `${name} ${type}` : name;

    this.names = {
      raw       : name,
      dashed    : this.changeCase.paramCase(name),
      camel     : this.changeCase.camelCase(name),
      pascal    : this.changeCase.pascalCase(name),
      class     : this.changeCase.pascalCase(name + ' ' + type),
      instance  : this.changeCase.camelCase(instanceName),
      typePlural: this.pluralize(this.type, 2)
    };

    this.baseDir = this.type === 'controller' ? 'controllers' : 'components';

    this.paths.app    = 'src/app';
    this.paths.module = `${this.paths.app}/index.module.js`;
    this.paths.route  = `${this.paths.app}/index.route.js`;
    this.paths.prefix = `${this.paths.app}/${this.baseDir}/${this.names.dashed}`;

    this.routeTarget = this.getTargetString('route');

    this.context = {
      name      : this.names.raw,
      nameDashed: this.names.dashed,
      nameCamel: this.names.camel,
      namePascal: this.names.pascal
    };
  }

  injectIntoModule(classStyleInstance = false) {
    let target      = this.type;
    let classTarget = `${this.type} import`;

    let moduleContent = this.fs.read(this.paths.module)
      .replace(this.getTargetString(target),
        `.${this.type}('${classStyleInstance ? this.names.class : this.names.instance}', ${this.names.class})\n\t${this.getTargetString(target)}`)
      .replace(this.getTargetString(classTarget),
        `import {${this.names.class}} from './${this.baseDir}/${this.names.dashed}/${this.names.dashed}.${this.type}';\n${this.getTargetString(classTarget)}`);

    this.fs.write(this.paths.module, moduleContent);
  }
};
