//配置文件
requirejs.config({
	baseUrl:'js',//默认是main.js所在的文件夹为基准。
	paths:{
		jquery:'jquery-1.12.4.min'//起个别名
	},
	shim: {
	'jQuery.CateNav':['jquery']
    }
});

//加载入口模块
requirejs(['index']);//从基准路径js下开始查找，谨记不能写为index.js
