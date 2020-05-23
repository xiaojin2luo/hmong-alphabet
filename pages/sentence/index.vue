<template>
	<view class="container">
		<view class="app-header">
			<view class="muneItems">
				常用苗语口语示例
			</view>
		</view>
		<view class="content">
			<view v-for="sentence in sentences" @click="playSound($event)" :data-sound="sentence.sound" :data-group="sentence.group" class="sentence">
				<view class="sentence-hmong">
					{{sentence.hmong}}
				</view>
				<view class="sentence-chinese">
					{{sentence.chinese}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import sentences from "../../public/sentences.js";
	
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false;
	innerAudioContext.loop = false;
	innerAudioContext.onCanplay(function(){
		innerAudioContext.play();
	})
	innerAudioContext.onError(function(err){
		console.error(err.errMsg);
	})
	
	export default{
		data(){
			return{
				sentences:sentences.sentences
			}
		},
		methods:{
			playSound:function(event){
				let data = {
					group:event.currentTarget.dataset.group,
					sound:event.currentTarget.dataset.sound
				};
				if(innerAudioContext.src != "../../static/audio/"+data.group+"/"+data.sound+".mp3"){
					innerAudioContext.src = "../../static/audio/"+data.group+"/"+data.sound+".mp3";
				}else{
					innerAudioContext.play();
				}
			}
		}
	}
</script>

<style>
	.muneItems{
		position: fixed;
		width: 100%;
		background-color: rgb(255, 214, 179);
		overflow: hidden;
		height: 32px;
		line-height: 32px;
		text-align: center;
		font-size: 16px;
		z-index: 99;
	}
	.content{
		padding: 32px 16px 0px 16px;
	}
	.sentence{
		border-bottom: 1px solid #666;
	}
	.sentence-chinese,.sentence-hmong{
		font-size: 16px;
		line-height: 24px;
	}
</style>
