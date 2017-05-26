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
    this.fs.copyTpl(
      this.templatePath(`target.${this.type}.js`),
      this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.${this.type}.js`),
      this.context);

    this.fs.copyTpl(
      this.templatePath('target.html'),
      this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.html`),
      this.context);

    this.fs.copyTpl(
      this.templatePath('target.scss'),
      this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.scss`),
      this.context);

    this.injectIntoModule(true);

    let routeContent  = this.fs.read(this.paths.route);
    routeContent = routeContent.replace(this.routeTarget, `.state('main.${this.names.dashed}', {
			url         : '${this.names.dashed}',
			templateUrl : 'app/${this.names.typePlural}/${this.names.dashed}/${this.names.dashed}.html',
			controller  : '${this.names.instance}',
			controllerAs: 'vm'
		})\n\t\t${this.routeTarget}`);
    this.fs.write(this.paths.route, routeContent);
  }
};
