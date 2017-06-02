import Modal from './modal.vue';

const toString = Object.prototype.toString;
// 深度克隆
function assign(target, ...objs) {
    objs.forEach(function(source){
        for (var n in source) {
            if (source.hasOwnProperty(n)) {
                var item = source[n];
                if (typeof item == 'object') {
                    if(target[n] == null || (toString.call(target[n]) != toString.call(item))){
                        // 发现 原来 target 存在相同的数据，不在此覆盖数据
                        // 于 Object.assign 不同在于此
                        target[n] = item instanceof Array ? [] : {};
                    }
                    assign(target[n], item);
                } else {
                    target[n] = item;
                }
            }
        }
    })
}

// Vue, 实例， 等初始化后，在赋值
let ModalConstructor, Vue;

// 用户初始化 alert 、 confirm 等预设值的 弹窗
function init(defOption = {}){

    // 关闭时 触发的事件
    function onClose(index){
        let buttons = this.buttons;
        let i = index - 1;
        let callback = buttons[i] && buttons[i].callback || this.callback;
        let flag = callback && callback.call(this, index) === false || false;

        if(this.canClose = !flag){
            let el = this.$el;
            el.parentNode.removeChild(el);

            // 销毁实例
            this.$destroy();
        }
    }

    return function (options = {}){
        if(typeof options === 'string'){
            options = {message: options};
        }

        // 新建一个实例
        let instance = new ModalConstructor({
            el: document.createElement('div')
        });
        instance.$on('close', onClose);
        // 将相关的参数 设置到 实例 instance 上面
        assign(instance, defOption, options);

        // 加入文档流
        document.body.appendChild(instance.$el);
        Vue.nextTick(function() {
            instance.visible = true;
        });
        return instance;
    }
}

// alert 预设值为 一个按钮
export let alert = init({
    buttons: [
        {
            text: '确定'
        }
    ]
});

// confirm 预设值为 两个按钮
export let confirm = init({
    buttons: [
        {
            text: '取消'
        },
        {
            text: '确定',
            isLight: true
        }
    ]
});

// message 无预设值
export let message = init();

// 这个是用来注册 插件用的 install
export default function install(vue, {
    alertName,
    confirmName,
    messageName
} = {}){
    if(Vue){
        return ;
    }
    Vue = vue;
    ModalConstructor = vue.extend(Modal);
    Vue.prototype['$' + alertName] = alert;
    Vue.prototype['$' + confirmName] = confirm;
    Vue.prototype['$' + messageName] = message;
}