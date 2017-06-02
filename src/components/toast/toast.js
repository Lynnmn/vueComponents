import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue'));

let removeDom = event => {
	if(event.target.parentNode){
		event.target.parentNode.removeChild(event.target);
	}
};

ToastConstructor.prototype.close = function() {
	this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
};

let Toast = (options = {}) => {
	var instance = new ToastConstructor().$mount(document.createElement('div'));

    let duration = options.duration || 2500;
    instance.text = typeof options === 'string' ? options : options.text ;
    instance.className = options.position || 'middle';
    instance.iconClass = options.iconClass || '';

    document.body.appendChild(instance.$el);
    instance.visible = true;

    Vue.nextTick(() => {
        instance.timer = setTimeout(function() {
            instance.close();
        }, duration);
    })
    return instance
};

export default Toast;
