<template>
  <transition name="fade">
    <div class="loading" v-show="visible">
      <div class="loading-icon" :class="borderStyle"></div>
      <span class="loading-text" :style="{'margin-top' : text === '' ? '' : '10px', 'display':text === '' ? '' : 'inline-block'}">{{ text }}</span>
    </div>
  </transition>
</template>

<style scope>
    .loading{
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,0.7);
        padding: 20px;
        border-radius: 6px;
        text-align: center;
    }
    .loading-icon {
        width: 32px;
        height: 32px;
        margin: 0 auto;
        border-radius: 50%;
        -webkit-animation: loading-rotate 1s infinite linear;
        animation: loading-rotate 1s infinite linear;
        box-sizing: border-box;
    }
    .loading-icon.solid{
        border: 3px solid transparent;
        border-bottom-color: rgb(204,204,204);
        border-top-color: rgb(204,204,204);
        border-right-color: rgb(204,204,204);
    }
     .loading-icon.dotted{
        border: 3px dotted transparent;
        border-bottom-color: rgba(255,255,255,1);
        border-right-color: rgba(255,255,255,0.9);
    }
    @-webkit-keyframes loading-rotate {
        0%{
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg); 
        }
        100%{
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg); 
        }
    }
    @keyframes loading-rotate {
        0%{
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg); 
        }
        100%{
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg); 
        }
    }
    .loading-text{
        color: #fff;
        font-size: 14px;
    }
    
</style>
    
<script>
  
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      borderStyle:{
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