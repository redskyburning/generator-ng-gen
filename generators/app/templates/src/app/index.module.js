/* global malarkey:false, moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {HomeController} from './controllers/home/home.controller';
/* controller import injection target */
import {GithubContributorService} from '../app/components/githubContributor/githubContributor.service';
import {WebDevTecService} from '../app/components/webDevTec/webDevTec.service';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import {MalarkeyDirective} from '../app/components/malarkey/malarkey.directive';
/* directive import injection target */

angular.module('<%= appNameDashed %>', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap'])
	.constant('malarkey', malarkey)
	.constant('moment', moment)
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	.service('githubContributor', GithubContributorService)
	.service('webDevTec', WebDevTecService)
	.directive('acmeNavbar', NavbarDirective)
	.directive('acmeMalarkey', MalarkeyDirective)
	/* directive injection target */
	.controller('HomeController', HomeController)
	/* controller injection target */
	.controller('MainController', MainController);
