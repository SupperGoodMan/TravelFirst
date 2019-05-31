<template>
	<div class="swiperDiv">
		<swiper :options="swiperOption">
			<swiper-slide v-for="slide of swiperSlides" :key="slide.id"><img :src="slide.imgUrl" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data() {
		return {
			swiperOption: {
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false
				}
			},
			swiperSlides: [
				{
					id: '0001',
					imgUrl: 'http://hbimg.b0.upaiyun.com/828e72e2855b51a005732f4e007c58c92417a61e1bcb1-61VzNc_fw658'
				},
				{
					id: '0002',
					imgUrl: 'http://hbimg.b0.upaiyun.com/ea52c1c9e5df4039ce5275095a0649921ad083244d20a-Lf82xv_fw658'
				},
				{
					id: '0003',
					imgUrl: 'http://k.zol-img.com.cn/dcbbs/23035/a23034716_01000.jpg'
				}
			]
		};
	}
};
</script>

<style lang="stylus" scoped>
.swiperDiv
	width: 25rem
	margin: 0 auto
	img
		height: 30rem
		width:100%
</style>
