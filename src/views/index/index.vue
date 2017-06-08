<template>
    <div class="wrap">
      <slider :loop-time="2000" :speed="300" :show-indicators="true" :default-index="3">
         <slider-item class="slider slider1"></slider-item>
         <slider-item class="slider slider2"></slider-item>
         <slider-item class="slider slider3"></slider-item>
         <slider-item class="slider slider4"></slider-item>
      </slider>

      <div class="toast-wrap">
          <p>toast test</p>
          <button @click="showToast">普通toast</button>
          <button @click="showIconToast">带icon的toast</button>
          <button @click="showPositionToast">自定义位置的toast</button>
      </div>

      <div class="loading-wrap">
          <p>loading test</p>
          <button @click="showLoading">普通loading</button>
          <button @click="showDottedLoading">虚线loading</button>
          <button @click="showTextLoading">带文字的loading</button>
          <button @click="hideLoading">关闭Loading</button>
      </div>

    </div>
    
</template>

<style scope>
  .slider{
    line-height: 200px;
    font-size: 30px;
    color: #fff;
  }
  .slider1{
      background: red;
  }
  .slider2{
      background: #a0ea7a;
  }
  .slider3{
      background: #ece46d;
  }
  .slider4{
      background: #73dbec;
  }
  .toast-wrap,
  .loading-wrap,
  .wxApiWrap{
      border:1px solid #999;
      margin-top: 30px;
      text-align: center;
  }
  .toast-wrap > p,
  .loading-wrap > p,
  .wxApiWrap > p{
      margin-top: 20px;
      font-size: 20px;
  }
  button{
      display: block;
      width: 148px;
      height: 34px;
      background-color: #3ec0e4;
      text-align: center;
      line-height: 34px;
      margin: 30px;
      border: none;
      outline: none;
      border-radius: 7px;
      color: #fff;
      font-size: 14px;
  }
</style>

<script>
  import Slider from '../../components/slider/slider'
  import SliderItem from '../../components/slider/slider-item'
  import Toast from '../../components/toast/toast.js'
  import Loading from '../../components/loading/loading.js'

  export default {

    methods: {
        showToast: function(){
            Toast('网络错误');
        },
        showIconToast: function(){
            Toast({
              text:'带有icon',
              iconClass: 'iconfont icon-good'
            })
        },
        showPositionToast: function(){
            Toast({
              text:'自定义位置',
              iconClass: 'iconfont icon-good',
              position:'bottom',
              duration: 1000
            })
        },
        showLoading: function(){
            Loading.show()
        },
        showDottedLoading: function(){
            Loading.show({borderStyle:'dotted'})
        },
        showTextLoading: function(){
            Loading.show({
              borderStyle: 'dotted',
              text: '加载中...'
            })
        },
        hideLoading: function(){
            Loading.hide()
        }
    },

    components: {
      slider: Slider,
      sliderItem: SliderItem
    }

  };
</script>
