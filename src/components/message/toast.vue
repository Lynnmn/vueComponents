<template>
    <transition name="koi-toast-pop">
        <div class="koi-toast" v-show="visible" :class="customClass">
            <div class="koi-toast-icon" v-show="iconClass !== ''"><span :class="iconClass"></span></div>
            <span class="koi-toast-text">{{ message }}</span>
        </div>
    </transition>
</template>

<style lang="less">
    @import "message.less";
</style>

<script>
export default {
    props: {
        // toast 消息
        message: String,
        // toast 位置 bottom 、middle、 top
        position: {
            type: String,
            default: 'bottom'
        },
        // toast 增加一个显示icon的地方
        iconClass: {
            type: String,
            default: ''
        }
    },

    methods:{
        // 关不toast
        close: function(){
            this.visible = false;
            this.$emit('close');
        }
    },

    data() {
        return {
            // 显示 隐藏 toast
            visible: false
        }
    },

    computed: {
      customClass() {
        return 'is-' + this.position
      }
    }
}
</script>