<template>
    <transition name="koi-modal">
        <div class="koi-modal-mask" :class="customClass" v-show="visible" @click="close(-1)">
            <div class="koi-modal-box" @click.stop=""><div class="koi-modal-rel">
                <div class="koi-modal-title" v-show="title !== ''">{{title}}</div>
                <div class="koi-modal-context">{{message}}</div>
                <div class="koi-modal-btnc" v-show="buttons.length > 0">
                    <div v-for="btn,i in buttons" class="koi-modal-btn"  :class="{'koi-modal-btn-light':btn.isLight}" @click="close(i)">{{btn.text}}</div>
                </div>
            </div></div>
        </div>
    </transition>
</template>

<style lang="less">
    @import "message.less";
</style>

<script>
export default {
    props: {
        // 弹窗消息
        message: String,
        // 自定义 class
        customClass: {
            type: String,
            default: ''
        },
        // 点击蒙版，触发关闭弹窗
        maskHide: {
            type: Boolean,
            default: true
        },
        // 弹窗 标题
        title: {
            type: String,
            default: ''
        },
        // 弹窗按钮数组
        buttons: {
            type: Array,
            default (){
                return []
            }
        }
    },
    data() {
        return {
            // 弹窗是否可见
            visible: false,
            // 设置是否可以 销毁弹窗
            // 作为零时的变量
            canClose: true
        }
    },
    methods:{
        // 关闭弹窗方法
        // index 是按钮的 index 值
        close: function(index){
            if(!this.maskHide && index == -1){
                return ;
            }
            // 实际触发事件，index 为序号 + 1
            this.$emit('close', index + 1);
            if(this.canClose){
                this.visible = false;
            }
        }
    },
    
    mounted: function(){}
}
</script>