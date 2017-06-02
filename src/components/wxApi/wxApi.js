import Vue from 'vue';
import wx from 'weixin-js-sdk'

const wxApiContructor = Vue.extend(require('./wxApi.vue'));
let instance;

export default {
	getWxConfig() {
		wx.config({
		    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		    appId: '', // 必填，公众号的唯一标识
		    timestamp:'' , // 必填，生成签名的时间戳
		    nonceStr: '', // 必填，生成签名的随机串
		    signature: '',// 必填，签名，见附录1
		    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
	},

	console() {
		console.log(wx)
	},

	share() {
		console.log(wx.onMenuShareTimeline)
		wx.hideAllNonBaseMenuItem();
		wx.onMenuShareTimeline({
		    title: 'test', // 分享标题
		    link: 'http://10.101.68.26:3000/#/slider', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		    imgUrl: '', // 分享图标
		    success: function () { 
		        // 用户确认分享后执行的回调函数
		        alert('success')
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		    }
		});
	}


}