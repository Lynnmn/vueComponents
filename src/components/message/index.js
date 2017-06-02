import Toast from './toast'
import Modal from './modal'

export default function(vue, {
    // 默认值
    toast = 'toast',
    alert = 'alert',
    confirm = 'confirm',
    message = 'message'
} = {}){
    Toast(vue, toast);
    Modal(vue, {
        alertName: alert,
        confirmName: confirm,
        messageName: message
    });
}