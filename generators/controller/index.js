'use strict';

const Subgenerator = require('./../../common/subgenerator');

module.exports = class extends Subgenerator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    this.argument('name', {type: String, required: true});
    this.init(this.options.name,'controller');
  }

  writing() {
    let context    = {
      name      : this.names.raw,
      nameDashed: this.names.dashed,
      namePascal: this.names.pascal
    };

    this.fs.copyTpl(
      this.templatePath('target.controller.js'),
      this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.controller.js`),
      context);

    this.fs.copyTpl(
      this.templatePath('target.html'),
      this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.html`),
      context);

    this.fs.copyTpl(
      this.templatePath('target.scss'),
      this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.scss`),
      context);

    /*let moduleContent = this.fs.read(this.paths.module);

    moduleContent = moduleContent.replace(
      this.targets.ctrl,
      `.controller('${this.names.class}', ${this.names.class})\n\t${this.targets.ctrl}`
    );
    moduleContent = moduleContent.replace(
      this.targets.ctrlClass,
      `import {${this.names.class}} from './controllers/${this.names.dashed}/${this.names.dashed}.controller';\n${this.targets.ctrlClass}`
    );

    this.fs.write(this.paths.module, moduleContent);*/

    this.injectIntoModule();

    let routeContent  = this.fs.read(this.paths.route);
    routeContent = routeContent.replace(this.targets.route, `.state('main.${this.names.dashed}', {
			url         : '${this.names.dashed}',
			templateUrl : 'app/${this.names.typePlural}/${this.names.dashed}/${this.names.dashed}.html',
			controller  : '${this.names.class}',
			controllerAs: 'vm'
		})\n\t\t${this.targets.route}`);
    this.fs.write(this.paths.route, routeContent);
  }
};
