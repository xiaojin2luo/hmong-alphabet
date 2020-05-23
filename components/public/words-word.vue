<template>
	<view class="words-word">
		<view v-for="word in words" @click="clickSound($event)" :data-word="word.hmong" :data-group="word.group" class="word">
			<text class="word-hmong">{{word.hmong}}</text>
			<text class="word-chinese">{{word.chinese}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		name:"wordsWord",
		data(){
			return{
				// 
			}
		},
		methods:{
			clickSound:function(event){
				let data = {
					word:event.currentTarget.dataset.word,
					group:event.currentTarget.dataset.group
				};
				// console.log(data);
				this.$emit('playSound',data);
			}
		},
		props:{
			words:{
				type:Array,
				value:[]
			}
		},
		created:function(){
			// console.log('wordsword created');
		}
	}
</script>

<style>
	.word{
		display: flex;
		justify-content: center;
		margin: 5px 0px;
		border-bottom: 1px solid #666;
	}
	.word-hmong{
		text-align: left;
		width: 50%;
		padding: 5px 0px 5px 16px;
	}
	.word-chinese{
		text-align: right;
		width: 50%;
		padding: 5px 16px 5px 0px;
	}
</style>
