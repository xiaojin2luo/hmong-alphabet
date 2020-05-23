<template>
	<view class="alphabet-content">
		<view v-for="chart in charts" class="content-item" @click="listenSound($event)" :data-chart="chart.alphabet" :data-group="chart.group">
			<text class="item-alphabet">{{chart.alphabet}}</text>
			<text class="item-word">{{chart.word}}</text>
			<image class="item-image" :src="'../../static/img/'+chart.group+'/'+chart.alphabet+'.jpg'" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "alphabetChart",
		data() {
			return {

			}
		},
		methods: {
			listenSound:function(event){
				// console.log(event.currentTarget.dataset.sound);
				let data = {};
				data.chart = event.currentTarget.dataset.chart;
				data.group = event.currentTarget.dataset.group;
				this.$emit('playSound',data);
			}
		},
		props: {
			charts: {
				type: Array,
				value: []
			}
		},
		created: function() {
			// console.log('alphabetChart load');
		}
	}
</script>

<style>
	.alphabet-content {
		display: flex;
		flex-wrap: wrap;
		padding: 0px;
		margin: 0px;
		font-size: 0px;
		justify-content: center;
	}
	.content-item{
		border: 1px solid rgb(211, 83, 9);
		border-radius: 8px;
		background-color: rgb(211, 146, 92);
		margin: 5px 5px 10px 0px;
	}

	.item-alphabet,
	.item-word {
		text-transform: uppercase;
		font-size: 18px;
		display: inline-block;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 50px;
	}
	.item-word{
		text-transform: lowercase;
		font-size: 14px;
	}

	.item-image {
		display: block;
		width: 100px;
		height: 80px;
	}
</style>
