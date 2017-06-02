<template>
  <transition name="fade">
    <div class="toast" v-show="visible" :class="className">
      <i class="toast-icon" :class="iconClass" :style="{'margin-bottom' : iconClass == '' ? '' : '10px'}"></i>
      <span class="toast-text">{{ text }}</span>
    </div>
  </transition>
</template>

<style scope>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,0.7);
        padding: 10px;
        border-radius: 6px;
        text-align: center;
    }
    .toast.top{
        top: 10%;
    }
    .toast.bottom{
        top: 90%;  
    }
    .toast-text {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
    }
    .toast-icon {
        display: block;
        color: #fff;
        font-size: 40px;
    }
</style>
    
<script>
  
  export default {
    props: {
      text: String,

      iconClass: {
        type: String,
        default: ''
      },

      className: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        visible: false
      };
    }

  };
</script>