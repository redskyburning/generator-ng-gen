'use strict';

const Subgenerator = require('./../../common/subgenerator');

module.exports = class extends Subgenerator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    this.argument('name', {type: String, required: true});
    this.option('parent', { default:false, type:String });
    this.init(this.options.name,'controller',this.options.parent);
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
    let routeName = this.parent ? `main.${this.names.parentDashed}.${this.names.dashed}` : `main.${this.names.dashed}`;
    let templateBase = this.parent ? `app/${this.names.typePlural}/${this.names.parentDashed}` : `app/${this.names.typePlural}`;
    routeContent = routeContent.replace(this.routeTarget, `.state('${routeName}', {
			url         : '${this.names.dashed}',
			templateUrl : '${templateBase}/${this.names.dashed}/${this.names.dashed}.html',
			controller  : '${this.names.class}',
			controllerAs: 'vm'
		})\n\t\t${this.routeTarget}`);
    this.fs.write(this.paths.route, routeContent);
  }
};
