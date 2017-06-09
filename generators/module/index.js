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
				this.log(answers);
				this.name        = answers.name || this.options.name;
				this.withRouting = answers.withRouting || this.options.withRouting || false;
				this.log(this.name,this.withRouting);
			});
	}

	configuring() {
		this.init(this.name, 'module');
	}

	writing() {
		/*this.fs.copyTpl(
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

		 this.injectIntoModule();*/
	}
};
