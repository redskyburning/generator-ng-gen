'use strict';
const Generator  = require('yeoman-generator');
const chalk      = require('chalk');
const yosay      = require('yosay');
const changeCase = require('change-case');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.appPath = 'src/app';
  }

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
    let namePascal = changeCase.pascalCase(name);
    let pathPrefix = `${this.appPath}/controllers/${nameDashed}`;
    let context = {
      name      : name,
      nameDashed: nameDashed,
      namePascal: namePascal
    };

    this.fs.copyTpl(
      this.templatePath('target.controller.js'),
      this.destinationPath(`${pathPrefix}/${nameDashed}.controller.js`),
      context);

    this.fs.copyTpl(
      this.templatePath('target.html'),
      this.destinationPath(`${pathPrefix}/${nameDashed}.html`),
      context);

    this.fs.copyTpl(
      this.templatePath('target.scss'),
      this.destinationPath(`${pathPrefix}/${nameDashed}.scss`),
      context);

    let modulePath = `${this.appPath}/index.module.js`;
    let routePath = `${this.appPath}/index.route.js`;
    let crtlTarget = '/* controller injection target */';
    let classTarget = '/* controller class injection target */';
    let routeTarget = '/* route injection target */';

    let moduleContent = this.fs.read(modulePath);
    let routeContent = this.fs.read(routePath);

    moduleContent = moduleContent.replace(
      crtlTarget,
      `.controller('${namePascal}Controller', ${namePascal}Controller)\n\t${crtlTarget}`
    );
    moduleContent = moduleContent.replace(
      classTarget,
      `import {${namePascal}Controller} from './controllers/${nameDashed}/${nameDashed}.controller';\n${classTarget}`
    );

    routeContent = routeContent.replace(routeTarget,`.state('main.${nameDashed}', {
			url         : '${nameDashed}',
			templateUrl : 'app/controllers/${nameDashed}/${nameDashed}.html',
			controller  : '${namePascal}Controller',
			controllerAs: 'vm'
		})\n\t\t${routeTarget}`);

    this.fs.write(modulePath,moduleContent);
    this.fs.write(routePath,routeContent);
  }
};
