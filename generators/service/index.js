'use strict';

const Subgenerator = require('./../../common/subgenerator');

module.exports = class extends Subgenerator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    this.argument('name', {type: String, required: true});
    this.init(this.options.name,'service');
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`target.${this.type}.js`),
      this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.${this.type}.js`),
      this.context);

    this.fs.copyTpl(
      this.templatePath(`target.${this.type}.spec.js`),
      this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.${this.type}.spec.js`),
      this.context);

    this.injectIntoModule();
  }
};
