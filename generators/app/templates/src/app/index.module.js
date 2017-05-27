/* global malarkey:false, moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {HomeController} from './controllers/home/home.controller';
/* constant import injection target */
/* controller import injection target */
/* service import injection target */
/* factory import injection target */
/* provider import injection target */
/* directive import injection target */

angular.module('<%= appNameDashed %>', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap'])
	.constant('malarkey', malarkey)
	.constant('moment', moment)
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	/* constant injection target */
	/* service injection target */
	/* factory injection target */
	/* provider injection target */
	/* directive injection target */
	.controller('HomeController', HomeController)
	/* controller injection target */
	.controller('MainController', MainController);
