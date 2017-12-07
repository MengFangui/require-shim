//配置文件
requirejs.config({
	baseUrl: 'js', //默认是main.js所在的文件夹为基准。
	paths: {
		jquery: 'jquery-1.12.4.min' //起个别名
	},
	//关键配置
	shim: {
		//配置方式一：jQuery.CateNav为模块名称，jquery为依赖的js模块
		//'jQuery.CateNav': ['jquery']
		
		//配置方式二：jQuery.CateNav为模块名称，deps为配置依赖的js模块，deps数组，表明该模块的依赖性
		'jQuery.CateNav': {
			deps: ['jquery'],
			exports: "CateNav"
		}
	}
});

//加载入口模块
requirejs(['index']); //从基准路径js下开始查找index.js
