import Vue from 'vue'
import App from './App.vue'
import router from './vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper' //导入轮播图插件
import Axios from 'axios' //导入执行ajax的插件
//import Vuex from 'vuex' //导入vuex模块

//Vue.use(Vuex) //使用vuex来管理模块之间调用的数据

//import BetterScroll from 'better-scroll' //导入滚动的插件



import 'swiper/dist/css/swiper.css' // require styles
import './assets/css/iconfont.css'
//import fastClick from 'faseclick' //解决首页端click时间延迟300毫米的问题
//import './assets/css/reset.css' 
//import './assets/css/border.css' 

//fastClick.attach(document.body) //解决首页端click时间延迟300毫米的问题
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.prototype.$axios = Axios //配置ajax
Axios.defaults.headers.post['Content-Type'] = 'application/json'; //配置ajax返回值

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')


//本项目安装了axios发送ajax获取数据
/* 
	ajax放在mounted里面
	
	new Vue{
		methods () {
			getAjax () {
				axios.get('url')
					.then(this.getResult)
			},
			getResult (result) {
				console.log(result)
				console.log(result.data)
			}
		},
		mounted () {
			this.getAjax()
		}
	}
 
 
 */

/* 
	滚动插件的使用
 
	moutend () {
		this.scroll = new BetterScroll(dom); //this.scroll不需要在data里面 dom使用$refs获取
	}
	
	
 */
