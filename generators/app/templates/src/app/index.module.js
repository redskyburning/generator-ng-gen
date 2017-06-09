/* global moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './controllers/main/main.controller';
import {HomeController} from './controllers/home/home.controller';
/* constant import injection target */
import {StyleGuideController} from './controllers/style-guide/style-guide.controller';
import {StyleGuideModalController} from './controllers/style-guide-modal/style-guide-modal.controller';
/* controller import injection target */
/* service import injection target */
/* factory import injection target */
/* provider import injection target */
/* directive import injection target */
/* component import injection target */
/* filter import injection target */

angular.module('<%= appNameDashed %>', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap'])
	.constant('moment', moment)
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	/* constant injection target */
	/* service injection target */
	/* factory injection target */
	/* provider injection target */
	/* directive injection target */
	/* component injection target */
	/* filter injection target */
	.controller('HomeController', HomeController)
	.controller('StyleGuideController', StyleGuideController)
	.controller('StyleGuideModalController', StyleGuideModalController)
	/* controller injection target */
	.controller('MainController', MainController);
