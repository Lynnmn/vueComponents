<style scope>
  #slider{
    position: relative;
    margin-top: 45px;
    width: 100%;
    height: 200px;
  }
  .slider-items-wrap{
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  .slider-items-wrap > div{
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    display: none;
  }
  .slider-items-wrap > div.active{
    display: block;
    -webkit-transform: none;
    transform: none;
  }
  .slider-indicators {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
  }
  .slider-indicators .slider-indicator{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.3);
    margin: 0 10px;
  }
  .slider-indicators .slider-indicator.active{
    background-color: #fff;
  }
</style>

<template>
  <div id="slider">
      <div class="slider-items-wrap" ref="wrap">
          <slot></slot>
      </div>
      <div class="slider-indicators" v-show="showIndicators">
          <div class="slider-indicator" v-for="(page,$index) in pages" :class="$index == index ? 'active' : ''"></div>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'slider',

    props: {

      loop: {  // 是否自动循环，true表示是，false表示否
        type: Boolean,
        default: true
      },

      loopTime: {   //  轮播切换时间
        type: Number,
        default: 3000
      },

      speed: {    // 动画速度
        type: Number,
        default: 300
      },

      defaultIndex: {  // 默认显示第几屏
        type: Number,
        default: 0
      },

      showIndicators: {   // 是否显示轮播下方小圆点
        type: Boolean,
        default: true
      },

      prevent: {
        type: Boolean,
        default: false
      },

      stopPropagation: {
        type: Boolean,
        default: false
      }

    },

    data() {
      return {
        ready: false,
        dragging: false,
        // userScrolling: false,
        animating: false,
        index: 0,
        pages: [],
        timer: null,
        // reInitTimer: null,
        // noDrag: false,
        // isDone: false,
        prePage:'',
        curPage:'',
        nextPage:'',
        startX: '',
        endX: ''
      };
    },

    mounted() {

      this.initPages();
      this.initTimer();

      var el = this.$el;

      el.addEventListener('touchstart', (e) => {
          if(this.prevent) e.preventDefault();
          if(this.stopPropagation) e.stopPropagation();
          if(this.animating) return;

          this.dragging = true;
          this.doTouchStart(e);
      });

      el.addEventListener('touchmove', (e) => {
          if(!this.dragging) return;
          if(this.timer) this.clearTimer();

          this.doTouchMove(e);
      });

      el.addEventListener('touchend', (e) => {
          if(!this.dragging) return;
          this.doTouchEnd(e);
          this.initTimer();
          this.dragging = false;
      })
      
    },

    methods: {
      // 初始化页面
      initPages: function(){
        var me = this;
        var children = this.$children;
        var pages = [];

        var defaultIndex = (this.defaultIndex > 0 && this.defaultIndex < children.length) ? this.defaultIndex : 0;
        this.index = defaultIndex;

        children.forEach(function(child,index){
            pages.push(child.$el);
            if(index == defaultIndex){
                me.addClass(child.$el,'active');
            }
        });

        this.pages = pages;
      },
      // 设置定时器，使slider自动循环滚动
      initTimer: function(){
          var me = this;
          if(!this.loop) return;

          if (this.loopTime > 0 && !this.timer) {
              this.timer = setTimeout(() => {
                  if (!this.dragging && !this.animating) {  // 当前没有拖动，或者当前不是动画期间
                      this.slider('left');
                  }
              }, this.loopTime);
          }

      },
      // 滚动动画
      slider:function(direction){
          var me = this;
          var children = this.$children,
              len = children.length;
          var width = this.$el.clientWidth;
          var index = this.index,
              preIndex = index == 0 ? (len-1) : (index-1),  
              nextIndex = index == (len-1) ? 0 : (index+1);
          this.curPage = children[index],
          this.prePage = children[preIndex],
          this.nextPage = children[nextIndex];

          var prePage = this.prePage;
          var curPage = this.curPage;
          var nextPage = this.nextPage;

          if(len <= 1) return;

          // 动画开始时将前一页位移到当前页左边
          if(prePage){
              prePage.$el.style.display = 'block';
              prePage.$el.style.webkitTransition = '';
              prePage.$el.style.webkitTransform = `translate3d(${-width}px,0,0)`;
          }

          /*
          * 动画开始时将后一页位移到当前页右边,
          * 如果只有两页，则nextPage和prePage是同一页面,
          * 若此时向右滑动，则不需要再把nextPage位移到右边
          */
          if(nextPage && len >= 2 && direction == 'left'){
              nextPage.$el.style.display = 'block';
              nextPage.$el.style.webkitTransition = '';
              nextPage.$el.style.webkitTransform = `translate3d(${width}px,0,0)`;
          }

          // 给前一页和后一页分别添加滑动动画
          setTimeout(function(){
              if(direction == 'left'){
                  if(nextPage){
                      me.translatePage(curPage.$el, -width, me.speed);
                      me.translatePage(nextPage.$el, 0, me.speed);
                  }
              }else{
                  if(prePage){
                      me.translatePage(curPage.$el, width, me.speed);
                      me.translatePage(prePage.$el, 0, me.speed);
                  }
              }
          },20)

          setTimeout(function(){
              me.changeIndex(direction);
          }, me.speed);

      },
      translatePage: function(el,offset,speed){
          var me = this;
          this.animating = true;  // 表示当前正在动画过程中 
          el.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
          el.style.webkitTransform = `translate3D(${offset}px,0,0)`;
      },
      // 切换一屏后改变当前index
      changeIndex: function(direction){
          var children = this.$children,
              len = children.length;
          var index = this.index;
          var newIndex = 0,
              oldPage = children[index].$el;

          if(direction == 'left'){
              if(index >= 0 && index < len-1){
                  newIndex = index + 1;
              }else if(index == len-1 && this.loop){
                  newIndex = 0;
              }
          }
          if(direction == 'right'){
              if(index > 0){
                  newIndex = index - 1;
              }else if(index == 0 && this.loop){
                  newIndex = len - 1;
              }
          }

          var newPage = children[newIndex].$el;
          this.removeClass(oldPage,'active');
          this.addClass(newPage,'active');
          this.index = newIndex;

          this.stopTransition(this.prePage.$el)

          if(this.prePage){
              this.prePage.$el.style.display = '';
              this.stopTransition(this.prePage.$el)
          }
          if(this.nextPage){
              this.nextPage.$el.style.display = '';
              this.stopTransition(this.nextPage.$el);
          }
          this.timer = null;
          this.animating = false;  // 动画停止
          
          this.initTimer();
      },
      // 当前动画结束时，初始化所有page的动画
      stopTransition: function(el){
          el.style.webkitTransition = '';
          el.style.webkitTransform = '';
      },
      doTouchStart: function(e){
          this.clearTimer();
          var startX = (e.touches && e.touches[0] ? e.touches[0] : e).pageX;
          this.startX = startX;
      },
      doTouchMove: function(e){
          var endX = (e.touches && e.touches[0] ? e.touches[0] : e).pageX;
          this.endX = endX;
      },
      doTouchEnd: function(e){
          var startX = this.startX,
              endX = this.endX;
          if(endX - startX > 60){
              this.slider('right');
          }
          if(startX - endX > 60){
              this.slider('left');
          }
      },
      // 清除定时器
      clearTimer: function(){
          if(this.timer){
              clearTimeout(this.timer);
          }
      },
      // 封装addClass方法
      addClass: function(el,className){
          if(!el) return;
          if(!className) return;
          if(el.className.indexOf(className) !== -1 ) return;

          var classList = el.classList;
          var newclasses = className.split(' ');

          for(var i = 0, len = newclasses.length; i < len; i++ ){
              var newclass = newclasses[i];
              if(!newclass) continue;
              classList.add(newclass);
          }
      },
      // 封装removeClass方法
      removeClass: function(el,className){
          if(!el) return;
          if(!className) return;
          if(el.className.indexOf(className) == -1 ) return;

          var classList = el.classList;
          var newclasses = className.split(' ');

          for(var i = 0, len = newclasses.length; i < len; i++ ){
              var newclass = newclasses[i];
              if(!newclass) continue;
              classList.remove(newclass);
          }
      }

    }

  };
</script>
