/* 分享功能 */
var shareInfo = {
    appid: '',
    imgUrl: 'http://qzonestyle.gtimg.cn/aoi/sola/20140905160110_QS5sxpkPCX.jpg',
    lineLink: 'http://qzonestyle.gtimg.cn/qz-act/vip/20140905-wqun/index.html',
    descContent: '手机QQ空间5.0预约!',
    shareTitle: '手机QQ空间5.0预约！'
}
function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": shareInfo.appid,
        "img_url": shareInfo.imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": shareInfo.lineLink,
        "desc": shareInfo.descContent,
        "title": shareInfo.shareTitle
    }, function(res) {
        //_report('send_msg', res.err_msg);
    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": shareInfo.imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": shareInfo.lineLink,
        "desc": shareInfo.descContent,
        "title": shareInfo.shareTitle
    }, function(res) {
           //_report('timeline', res.err_msg);
    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": shareInfo.descContent,
        "url": shareInfo.lineLink,
    }, function(res) {
        //_report('weibo', res.err_msg);
    });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });
    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv){
        shareWeibo();
    });
}, false);