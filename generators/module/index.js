'use strict';

const Subgenerator = require('./../../common/subgenerator');

module.exports = class extends Subgenerator {
	constructor(args, opts) {
		super(args, opts);
	}

	prompting() {
		this.argument('name', {
			type    : String,
			required: false
		});
		this.option('with-routing');

		return this.prompt([
			{
				type    : 'input',
				name    : 'name',
				message : 'Enter the name of your module (dashed format): ',
				when    : () => {
					return !this.options.name
				},
				validate: (input) => {
					return (input && typeof input === 'string');
				}
			},
			{
				type   : 'confirm',
				name   : 'withRouting',
				default: false,
				message: 'Would you like routes and an example controller?',
				when   : () => {
					return !this.options.withRouting
				}
			}
		])
			.then((answers) => {
				this.name        = answers.name || this.options.name;
				this.withRouting = answers.withRouting || this.options.withRouting || false;
			});
	}

	configuring() {
		this.init(this.name, 'module');
	}

	writing() {
		this.fs.copyTpl(
			this.templatePath(`target.${this.type}.js`),
			this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.${this.type}.js`),
			Object.assign({},this.context,{withRouting:this.withRouting}));

		if(this.withRouting){
			this.fs.copyTpl(
				this.templatePath(`target.routes.js`),
				this.destinationPath(`${this.paths.prefix}/${this.names.dashed}.routes.js`),
				this.context);
		}

		let target = 'module';
		let importTarget = 'module import';

		let moduleContent = this.fs.read(this.paths.module)
			.replace(this.getTargetString(target),
				`, '${this.names.dashed}'${this.getTargetString(target)}`)
			.replace(this.getTargetString(importTarget),
				`import {} from './${this.baseDir}/${this.names.dashed}/${this.names.dashed}.module';\n${this.getTargetString(importTarget)}`);

		this.fs.write(this.paths.module, moduleContent);
	}
};
