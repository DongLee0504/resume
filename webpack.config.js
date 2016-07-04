//提出css到单独的css文件模块
var extractTextPlugin = require("extract-text-webpack-plugin");
//自动生成主页面的模块
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	plugins:[
		new htmlWebpackPlugin({
			template:"./index.html"
		}),
		new extractTextPlugin("[hash]-bundle.css")
	],
	entry:{
		main:"./main.js"
	},
	output:{
		path:"./build",
		filename:"[hash]-bundle.js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loader:extractTextPlugin.extract("css")
			},
			{
				test:/.html/,
				loader:"html"
			},
			{
				test:/.(png|gif|jpg)/,
				loader:"file-loader?name=images/[name].[ext]"
			},
			{
				test:/.(eot|woff|ttf|svg)/,
				loader:"file-loader?name=iconfont/[name].[ext]"
			}
		]
	},
	resolve:{
		extensions:["",".js"],
		alias:{
			animationCss:"./src/css/animate.min.css",
			swiperCss:"./src/css/swiper.min.css",
			// animationJs:"./src/js/swiper.animate.min.js",
			swiperJs:"./src/js/swiper.min.js"
		}
	}
}