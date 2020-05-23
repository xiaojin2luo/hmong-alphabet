<script>
export default {
	onLaunch: function() {
		// console.log('App Launch');
	},
	onShow: function() {
		// console.log('App Show');
	},
	onHide: function() {
		// console.log('App Hide');
	},
	onError:function(e){
		// console.log('App Error');
		// console.log(e);
	},
	onBackPress:function(){
		// console.log('按下返回键');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
