var platAuto = false;

$(function () {
  videoPlay();
});
function videoPlay() {
  var options = {
    autoplay: false,// 自动播放：true/false
    controls: true, // 是否显示底部控制栏：true/false
    aspectRatio: "16:9", // 将播放器置于流体模式下（如“16:9”或“4:3”）
    loop: false, // 是否循环播放:true/false
    muted: false, // 设置默认播放音频：true/false
    preload: "auto",
    fluid: true, // 是否自适应布局
    inactivityTimeout: 0, // 闲置超时
    nativeControlsForTouch: false, // 是否使用浏览器原生的控件
    language: 'zh-CN',
    controlBar: {
      children: [
        { name: 'playToggle' }, // 播放按钮
        { name: 'currentTimeDisplay' }, // 当前已播放时间
        { name: 'progressControl' }, // 播放进度条
        { name: 'durationDisplay' }, // 总时间
        {
          name: 'volumePanel', // 音量控制
          inline: false, // 不使用水平方式
        },
        { name: 'FullscreenToggle' } // 全屏
      ]
    }
  }

  var myPlayer = videojs('videoPlayExecute', options, function () {
    // 准备好播放
    // 在回调函数中，this代表当前播放器，
    var myPlayer = this;
    if (platAuto === true) {
      myPlayer.on("loadstart", function () {
        myPlayer.play();
      });
      myPlayer.play();
    }
  });
}
