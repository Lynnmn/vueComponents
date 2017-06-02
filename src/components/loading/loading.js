import Vue from 'vue';

const LoadingConstructor = Vue.extend(require('./loading.vue'));
let instance;

export default {
    show(options = {}) {
        if(!instance) {
            instance = new LoadingConstructor().$mount(document.createElement('div'));
        }
        if(instance.visible) return;
        instance.text = typeof options === 'string' ? options : options.text || '';
        instance.borderStyle = options.borderStyle || 'solid'    
        document.body.appendChild(instance.$el);

        Vue.nextTick( () => {
            instance.visible = true;
        });
    },

    hide() {
        if(instance){
            instance.visible = false;
        }
    }
};
