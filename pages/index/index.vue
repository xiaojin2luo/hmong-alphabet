<template>
	<view class="container">
		<view class="app-title">
			Hmong Alphabet
		</view>
		<view @click="goToPage('alphabet')" class="app-mune">
			声韵母学习
		</view>
		<view @click="goToPage('words')" class="app-mune">
			常用词汇
		</view>
		<view @click="goToPage('sentence')" class="app-mune">
			句子
		</view>
		<view @click="goToPage('aboutus')" class="app-mune">
			关于开发者
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 
		}
		},
		methods: {
			goToPage:function(pageName){
				// console.log(pageName);
				uni.navigateTo({
					url:"../"+pageName+"/index"
				})
			}
		},
		// 页面生命周期函数
		onLoad:function(){
			// console.log('Index Load');
		},
		onShow:function(){
			// console.log('index show');
		},
		onReady:function(){
			// console.log('index ready');
		}
	}
</script>

<style>
	page{
		background-color: rgb(255, 214, 179);
	}
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
	}
	.app-title{
		font-size: 32px;
		font-weight: bold;
		height: calc(40vh);
		line-height: calc(40vh);
		color: rgb(211, 83, 9);
	}
	.app-mune{
		font-size: 24px;
		border: 5px solid rgb(211, 146, 92);
		border-radius: 36px;
		width: fit-content;
		margin: 14px auto;
		padding: 8px 36px;
		background-color: rgb(255, 214, 179);
		color: white;
	}
</style>
