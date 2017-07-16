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

		let shortInstances = ['directive', 'component', 'constant', 'filter'];
		let camelImports   = ['constant', 'filter'];
		let instanceName   = (shortInstances.indexOf(type) === -1) ? `${name} ${type}` : name;
		let importName     = (camelImports.indexOf(type) === -1) ? this.changeCase.pascalCase(`${name} ${type}`) : this.changeCase.camelCase(`${name} ${type}`);

		this.names = {
			raw       : name,
			dashed    : this.changeCase.paramCase(name),
			camel     : this.changeCase.camelCase(name),
			pascal    : this.changeCase.pascalCase(name),
			class     : importName,
			instance  : this.changeCase.camelCase(instanceName),
			typePlural: this.pluralize(this.type, 2),
		};

		this.baseDir = this.type === 'controller' ? 'controllers' : 'components';

		this.paths.app    = 'src/app';
		this.paths.module = `${this.paths.app}/index.module.js`;
		this.paths.route  = `${this.paths.app}/index.route.js`;
		this.paths.prefix = `${this.paths.app}/${this.baseDir}/${this.names.dashed}`;

		this.routeTarget = this.getTargetString('route');

		let appName = this.config.get('appName') || 'defaultAppName';

		this.context = {
			name         : this.names.raw,
			nameDashed   : this.names.dashed,
			nameCamel    : this.names.camel,
			namePascal   : this.names.pascal,
			appNameDashed: this.changeCase.paramCase(appName),
			nameInstance : this.names.instance,
			nameImport   : this.names.class,
			nameClass    : this.names.class
		};
	}

	injectIntoModule(classStyleInstance = false) {
		let target       = this.type;
		let classTarget  = `${this.type} import`;
		let instanceName = (this.type === 'provider') ? `${this.names.camel}Service` : classStyleInstance ? this.names.class : this.names.instance;
		let className    = (this.type === 'provider') ? `${this.names.pascal}ServiceProvider` : this.names.class;
		let type         = (this.type === 'model') ? 'constant' : this.type;

		let moduleContent = this.fs.read(this.paths.module)
			.replace(this.getTargetString(target),
				`.${type}('${instanceName}', ${className})\n\t${this.getTargetString(target)}`)
			.replace(this.getTargetString(classTarget),
				`import {${className}} from './${this.baseDir}/${this.names.dashed}/${this.names.dashed}.${this.type}';\n${this.getTargetString(classTarget)}`);

		this.fs.write(this.paths.module, moduleContent);
	}
};
