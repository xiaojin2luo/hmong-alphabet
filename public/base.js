export default{
// 打开页面
gotoPage:function(pageUrl){
	console.log(pageUrl);
	// uni.navigateTo({
	// 	url:pageUrl,
	// 	animationDuration:300,
	// 	animationType:"pop-in"
	// })
	uni.redirectTo({
		url:pageUrl,
	})
},	
// 退出页面
quitPage:function(){
		// 
},
clickMune:function(index){
	console.log(index);
	index = parseInt(index);
	switch (index) {
		case 0:
			this.gotoPage("./index");
			break;
		case 1:
			this.gotoPage('./finals');
			break;
		case 2:
			this.gotoPage('./tone');
			break;
		case 3:
			this.gotoPage('./introduce');
			break;
		default:
			break;
	}
}
}