<% if(withRouting) { %>import { <%= nameCamel %>Routes } from './<%= nameDashed %>.routes.js';
<% } %>/* constant import injection target */
/* controller import injection target */
/* service import injection target */
/* factory import injection target */
/* provider import injection target */
/* directive import injection target */
/* component import injection target */
/* filter import injection target */

angular.module('<%= nameDashed %>',[])<% if(withRouting) { %>
	.config(<%= nameCamel %>Routes)
<% } %>	/* constant injection target */
	/* service injection target */
	/* factory injection target */
	/* provider injection target */
	/* directive injection target */
	/* component injection target */
	/* filter injection target */
	/* controller injection target */;
