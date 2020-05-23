<template>
	<view class="container">
		<view class="app-header">
			<!-- 二级菜单 -->
			<view class="muneItems">
				<view @click="clickMune(0)" :class="swiperItemCurrentIndex==0?'muneItems-item muneItems-item-active':'muneItems-item'">名词</view>
				<view @click="clickMune(1)" :class="swiperItemCurrentIndex==1?'muneItems-item muneItems-item-active':'muneItems-item'">代词</view>
				<view @click="clickMune(2)" :class="swiperItemCurrentIndex==2?'muneItems-item muneItems-item-active':'muneItems-item'">介词</view>
				<view @click="clickMune(3)" :class="swiperItemCurrentIndex==3?'muneItems-item muneItems-item-active':'muneItems-item'">形容词</view>
			</view>
		</view>
		<!-- 内容区 -->
		<swiper @change="swiperChange($event)" :current="swiperItemCurrentIndex" :skip-hidden-item-layout="false" :indicator-dots="false" :autoplay="false" :duration="200" class="words-container">
			<!-- 名词 -->
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" class="words-content">
						<view>
							<wordsWord :words="noun" @playSound="playSound"></wordsWord>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<!-- 代词 -->
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" class="words-content">
						<view>
							<wordsWord :words="pronoun" @playSound="playSound"></wordsWord>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<!-- 量词 -->
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" class="words-content">
						<view>
							<wordsWord :words="quantifier" @playSound="playSound"></wordsWord>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<!-- 形容词 -->
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" class="words-content">
						<view>
							<wordsWord :words="adjective" @playSound="playSound"></wordsWord>
						</view>
					</scroll-view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import wordsWord from "../../components/public/words-word.vue";
	import noun from "../../public/noun.js";
	import pronoun from "../../public/pronoun.js";
	import quantifier from "../../public/quantifier.js";
	import adjective from "../../public/adjective.js";
	
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
				swiperItemCurrentIndex:0,
				noun:noun.noun,
				pronoun:pronoun.pronoun,
				quantifier:quantifier.quantifier,
				adjective:adjective.adjective
			}
		},
		methods: {
			clickMune:function(index){
				this.swiperItemCurrentIndex = index;
			},
			swiperChange:function(event){
				this.swiperItemCurrentIndex = event.detail.current;
			},
			playSound:function(data){
				// console.log(data);
				if(innerAudioContext.src != "../../static/audio/"+data.group+"/"+data.word+".mp3"){
					innerAudioContext.src = "../../static/audio/"+data.group+"/"+data.word+".mp3";
				}else{
					innerAudioContext.play();
				}
			}
		},
		components:{
			wordsWord
		},
		onLoad:function(){
			// console.log(this.noun);
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
	.words-container,.words-content{
		height: calc(100vh - 32px);
	}
</style>
