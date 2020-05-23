<template>
	<view class="container">
		<view class="app-header">
			<!-- 二级菜单 -->
			<view class="muneItems">
				<view @click="clickMune(0)" :class="swiperItemCurrentIndex==0?'muneItems-item muneItems-item-active':'muneItems-item'">声母</view>
				<view @click="clickMune(1)" :class="swiperItemCurrentIndex==1?'muneItems-item muneItems-item-active':'muneItems-item'">韵母</view>
				<view @click="clickMune(2)" :class="swiperItemCurrentIndex==2?'muneItems-item muneItems-item-active':'muneItems-item'">声调</view>
				<view @click="clickMune(3)" :class="swiperItemCurrentIndex==3?'muneItems-item muneItems-item-active':'muneItems-item'">简介</view>
			</view>
		</view>
		<swiper @change="swiperChange($event)" :current="swiperItemCurrentIndex" class="swiper-container"
		 :skip-hidden-item-layout="false" :indicator-dots="false" :autoplay="false" :duration="200">
			<swiper-item>
				<!-- 声母 -->
				<view class="swiper-item">
					<scroll-view class="swiper-content" :scroll-y="true">
						<view>
							<alphabetChart @playSound="playSound" :charts="consonant"></alphabetChart>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<!-- 韵母 -->
			<swiper-item>
				<view class="swiper-item">
					<scroll-view class="swiper-content" :scroll-y="true">
						<view>
							<alphabetChart @playSound="playSound" :charts="finals"></alphabetChart>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<!-- 声调 -->
			<swiper-item>
				<view class="swipter-item">
					<scroll-view class="swiper-content" :scroll-y="true">
						<view>
							<alphabetChart @playSound="playSound" :charts="tone"></alphabetChart>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<!-- 简介 -->
			<swiper-item>
				<view class="swipter-item">
					<scroll-view scroll-y="true" class="swiper-content">
						<view>
							<text class="introduce-title">拼写规则</text>
							<text class="introduce">1、文字组成为：声母 韵母 声调（keeb suab cim）,例如“我”=>”kuv”由声母k 韵母u 声调v组成。亦或由“韵母” “声调”直接组成，例如“背”=>”ev”由韵母e声调v组成；</text>
							<text class="introduce">2、国际苗文有八个声调（相似于汉语里的“阴平”、“阳平”、“上声”、“去声”），分别为b m j v - s g d ,（为方便记忆分别使用八个字来表示： siab niam ntuj kuv ua mus neeg tod）其中 - 不标出来，例如思念写作nco，直接由声母nc韵母o组成。其次，由于v和d两个调在发音上相同，所以在书写时实际上使用的只有七个调。（至于创制8个调的原因，可能是为兼顾青苗语的书写，本人未深入研究）；</text>
							<text class="introduce">3、国际苗文只记发音，相同的发音即相同的字，例如：“我们”（三人以上）和“三”都写作“peb”；</text>
							<text class="introduce-title">文字历史</text>
							<text class="introduce">本APP内的苗文是指由羊保恩、布密尼等人于1953年在老挝琅勃拉邦创制的苗文（此版苗文亦称“老挝苗文”），关于名称和出处在此不做深究，无论如何，时至今日此苗文确实已在广大苗族人民群众中广为传播，流行于美国、法国、泰国、老挝、中国云南等诸多国家和地区。</text>
							<text class="introduce">国际苗文创制之初用于拼写白苗语和青苗语（此两种土语在国内均划分为苗语西部方言川黔滇次方言），可满足西部方言苗语的拼写。标准音为老挝琅勃拉邦野牛山口音，和国内白苗语口音一致，因此使用西部方言的国内苗族支系和国外的苗族同胞可以无障碍沟通。也因此，此版苗文在使用苗语西部方言的广大苗族群众中得到广泛传播。（至于是否可以用于苗语中部方言和东部方言的拼写，本人未知）。</text>
							<text class="introduce">此版苗文从1975年老挝战乱后沦为难民的苗族人民传播到了泰国难民营，并从泰国随着苗族人民的迁徙传播到了所有有苗族居住的西方国家，苗文曾一度成为苗族难民写信交流的基本文字。1985年此苗文传入中国。如今它已遍布世界五大洲，成了名副其实的国际苗文。</text>
							<text class="introduce">今天，世界各国的国门都在打开，使得遍布世界各地苗族人民都能来往交际，而国际苗文也将在此过程中，起到越来越重要的作用。希望普天之下的苗族人民都能随着它走向文明、美好的未来。</text>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import alphabetChart from "../../components/public/alphabet-chart.vue";
	import base from "../../public/base.js";
	import consonant from "../../public/consonant.js";
	import finals from "../../public/finals.js";
	import tone from "../../public/tone.js";
	
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false;
	innerAudioContext.loop = false;
	innerAudioContext.onCanplay(function(){
		innerAudioContext.play();
	})
	innerAudioContext.onError(function(err){
		console.error(err.errMsg);
	})
	
	export default {
		data() {
			return {
				// 当前显示的子页面的索引
				swiperItemCurrentIndex: 0,
				consonant: consonant.consonant,
				finals:finals.finals,
				tone:tone.tone
			}
		},
		methods: {
			clickMune: function(index) {
				this.swiperItemCurrentIndex = index;
			},
			swiperChange: function(event) {
				// console.log(event.detail.current);
				this.swiperItemCurrentIndex = event.detail.current;
			},
			playSound:function(data){
				// console.log('data',data);
				if(innerAudioContext.src != "../../static/audio/"+data.group+"/"+data.chart+".mp3"){
					innerAudioContext.src = "../../static/audio/"+data.group+"/"+data.chart+".mp3";
				}else{
					innerAudioContext.play();
				}
			}
		},
		components: {
			alphabetChart
		},
		onLoad: function() {
			console.log('load');
		}
	}
</script>

<style>
	/* 二级菜单 */
	.muneItems {
		background-color: rgb(255, 214, 179);
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		overflow: hidden;
		height: 32px;
	}

	.muneItems-item {
		font-size: 16px;
		line-height: 32px;
		width: 25%;
		text-align: center;
	}

	.muneItems-item-active {
		border-bottom: 2px solid #F00;
	}

	/* 内容区 */
	.swiper-container {
		height: calc(100vh - 40px);
	}

	.swiper-content {
		height: calc(100vh - 32px);
	}
	.introduce{
		padding: 0px 5px;
		display: block;
		text-indent: 2em;
		line-height: 1.5em;
	}
	.introduce-title{
		display: block;
		text-align: center;
		font-size: 24px;
		font-weight: bold;
	}
</style>
