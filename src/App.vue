<template>
  <div id="app">

    <div class="tc-header" v-show="">
        <span class="tc-header-icon tc-fl js_tag_click_back">
            <i class="icon-tag_click_back"></i>
        </span>
      <span class="tc-header-btn tc-fr js_cc">
            <a href="javascript:void(0)" class="train-myinfo"></a>
        </span>
      <h1 class="tc-page-title js_title"> 火车票预订 </h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  @import 'assets/styles/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tc-header {
  position: fixed;
  left: 0;
  right: 0;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  top: 0;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #fff;
  color: #333;
  z-index: 1000;
}
.tc-header .tc-header-icon {
  width: 50px;
  height: 45px;
  display: inline-block;
  text-align: center;
}
.tc-fl {
  float: left;
}

.tc-fr {
  float: right;
}
.icon-back, .icon-tag_click_back {
  width: 44px;
  height: 44px;
  line-height: 44px;
}
.icon-back::before, .icon-tag_click_back::before {
  content: '';
  display: block;
  width: 18px;
  height: 16px;
  margin: 17px 0 0 15px;
  background: url(//img1.40017.cn/cn/sl/dzs-mhotel/front-hotel-h5app/1.0.0.0/nv-direct.png) no-repeat;
  background-size: contain;
}
.tc-header .tc-header-btn {
  padding: 0 10px;
}
.tc-right {
  float: right;
}

.train-myinfo {
  right: 0;
  background: url(//img1.40017.cn/touch/hb/c/hcp/my.png) center no-repeat;
  background-size: 50%;
}
.train-go2index, .train-myinfo {
  position: absolute;
  top: 1px;
  width: 41px;
  height: 41px;
  display: block;
}
.tc-header .tc-page-title {
  line-height: 45px;
  font-size: 18px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tc-header:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e4e4e4;
  color: #e4e4e4;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.tc-header .tc-page-title {
  position: absolute;
  left: 88px;
  right: 88px;
}
.tc-header .tc-page-title {
  line-height: 44px!important;
  font-weight: 700;
}
  h1{
    margin: 0;
  }
</style>
