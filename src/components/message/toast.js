import Tosat from './toast.vue';

let ToastConstructor, Vue;

/**
 * 关闭
 */
function onClose() {
    let i = this;
    i.$el.addEventListener('transitionend', function(){
        let node = i.$el.parentNode;
        if (node) {
            node.removeChild(i.$el);
        }
        
        // 销毁实例
        i.$destroy();
    });
}

/**
 * 显示 toast
 * @param {Object} options 
 */
function toast(options = {}) {
    // 延时关闭toast
    let duration = options.duration || 3000;
    var instance = new ToastConstructor({
        el: document.createElement('div')
    });
    // 增加close 事件
    instance.$on('close', onClose);

    if (typeof options === 'string') {
        instance.message = options;
    }
    else {
        Object.assign(instance, options);
    }

    document.body.appendChild(instance.$el);

    Vue.nextTick(function () {
        instance.visible = true;
        if(~duration){
            setTimeout(function () {
                instance.close()
            }, duration)
        }
    })
    return instance;
}

/**
 * 全局插件形式注册组件
 * @param {Vue} vue 
 * @param {String} toastName 
 */
export default function install(vue, toastName) {
    if (Vue) {
        return;
    }
    Vue = vue;
    ToastConstructor = vue.extend(Tosat);

    vue.prototype['$' + toastName] = toast;
}