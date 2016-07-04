var swiperAnimateCache = require("exports?swiperAnimateCache!./swiper.animate.min.js");
var swiperAnimate = require("exports?swiperAnimate!./swiper.animate.min.js");
var mySwiper = new Swiper('.swiper-container',{
	direction:'vertical'
	,onInit:function(swiper){
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd:function(swiper){
		swiperAnimate(swiper);
	}
});





