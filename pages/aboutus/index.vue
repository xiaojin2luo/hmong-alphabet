<template>
	<view class="container">
		<view class="content">
			<image src="../../static/img/cover.jpg" class="cover" mode="aspectFit"></image>
			<view>Hmong Alphabet<text class="edition">v1.0.0</text></view>
			<view @click="visitWeb">苗族青年网出品</view>
			<view @click="visitWeb">www.w3hmoob.top</view>
			<view @click="visitWeb" id="click-url">点击这里访问网站</view>
			<view>感谢您的使用</view>
			<view>email: xiaojin_luo@foxmail.com</view>
			<view>QQ:2406827375</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// 
			}
		},
		methods:{
			visitWeb:function(){
				uni.showModal({
					title:'Hmong Alphabet',
					content:'确定打开浏览器访问苗族青年网？',
					success:function(rec){
						if(rec.confirm){
							plus.runtime.openURL('https://www.w3hmoob.top',function(){
								// console.log('打开外部应用失败！');
							})
						}
					}
				})
			}
		},
		onLoad:function(){
			// console.log('aboutus load');
		}
	}
</script>

<style>
	.content{
		text-align: center;
	}
	.cover{
		width: 50%;
		margin-top: calc(10vh);
	}
	.edition{
		font-size: 14px;
	}
	#click-url{
		color: #FF0000;
	}
</style>
