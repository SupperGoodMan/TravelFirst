<template>
	<div id="app">
		<div class="head">
			<div class="head-div">
				<router-link to="/logo">
					<span class="iconfont">&#xe60e;</span>
					<span>登陆</span>
				</router-link>
			</div>
			<div class="head-div">
				<router-link to="/">
					<span class="iconfont">&#xe615;</span>
					<span>首页</span>
				</router-link>
			</div>
		</div>
		<div class="swiperCompent"><swiper></swiper></div>
		<!-- 
		* 
		*  <keep-alive></keep-alive>
		* 	这个标签是vue自带的
		* 	用它包裹之后第一次进来会执行mounted()这个生命周期
		* 	第二次进来就不会执行
		* 	但是他每一次进来都会执行这个生命周期 activated ()
		* 
		*  -->
		
		
		<div class="showView"><router-view></router-view></div>
	</div>
</template>

<script>
import swiper from '@/components/swiper';
import axios from 'axios'; //导入执行ajax的插件

export default {
	name: 'app',
	components: {
		swiper: swiper
	},
	methods: {
		getAjax() {
			/* axios
				.get('http://localhost:8888/bill/bill/queryMax') //发送ajax请求
				.then(result => {
					console.log(result.data);
				})
				.catch(error => {
					console.log(error);
				}); */
		}
	},
	mounted() {
		this.getAjax();
	}/* ,
	activated () {
		
	} */
};
</script>
<style lang="stylus" scoped>
.head
	display: flex
	.head-div
		width:100%
		text-align: center
.showView
	width: 100%
	height: 10rem
</style>
