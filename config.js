(function(){
	module.config({
		require:false,//default false
		base:'../',
		mined:'',
		dirs:{
			'pmtest':'pm.demo/pm.test',
			'pmuitest':'../pm.ui/src/js',
			'pmmodule':'../pm.modules/dist',
			'pmplugin':'../pm.plugins/src',
			'libs':'pm.modules/libs'
		},
		alias:{
			/** pm test start */
			'increment':'{pmtest}/increment',
			'math':'{pmtest}/math',
			/** pm test end */


			/** pm ui test start */
			//'jquery':'http://code.jquery.com/jquery-1.8.3.min.js',
			//'jquery.module':'https://raw.githubusercontent.com/donghanji/modules/master/src/jquery.module.js',
			'jquery':'{libs}/jquery/jquery',
			'jquery.module':'{pmmodule}/jquery.module',
			//
			'ui.tab':'{pmuitest}/ui.tab',
			'ui.dialog':'{pmuitest}/ui.dialog',
			'ui.dropdown':'{pmuitest}/ui.dropdown',
			'ui.pagination':'{pmuitest}/ui.pagination',
			//
			//'os':'https://raw.githubusercontent.com/donghanji/plugins/master/dest/os.min.js',
			'os':'{pmplugin}/os',
			'jquery.flexslider':'{libs}/jquery.flexslider/jquery.flexslider',
			'jquery.flexslider.module':'{pmmodule}/jquery.flexslider.module'
			/** pm ui test end */

		},
		files:[],
		globals:{
			'$':'jquery.module'
		},
		defaults:{},
		debug:false
	});
})();