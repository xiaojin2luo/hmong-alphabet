<template>
	<view class="muneItems">
		<view v-for="(item,index) in mune.items" :class="(mune.currentIndex==index)?'muneItems-item active':'muneItems-item'" :data-index="index">{{item}}</view>
	</view>
</template>
<script>
	export default {
		name:"muneItems",
		data() {
			return {
				// 
			}
		},
		methods:{
			// 
		},
		props:{
			mune:{
				type:Object,
				value:null
			}
		},
		created:function(){
			// console.log('二级菜单组件加载成功！');
		}
	}
</script>

<style>
.muneItems{
	background-color: rgb(221, 229, 241);
	display: flex;
	justify-content: space-around;
	flex-wrap: nowrap;
	overflow: hidden;
}
.muneItems-item{
	padding: 5px 0px;
	font-size: 24px;
	width: 25%;
	text-align: center;
}
.active{
	border-bottom: 2px solid #F00;
}
</style>
