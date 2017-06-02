# message 包含 toast、alert、confirm、message

> 全局引入
```javascript
import Message from '@/components/message/index'
Vue.use(Message, {
    // toast 默认值， this.$toast
    toast = 'toast',
    // alert 默认值， this.$alert
    alert = 'alert',
    // confirm 默认值， this.$confirm
    confirm = 'confirm',
    // message 默认值， this.$message
    message = 'message'
} = {});
```

## toast 实例

```javascript
this.$toast({
    // 内容
    message: '这个是toast内容',
    // 不自动关闭 toast
    duration: -1,
    // 顶部显示
    position: 'top',
    // 需要自定义icon的class，用来显示 icon
    iconClass: 'my-icon'
})
```


## 一个confirm实例

```javascript
this.$confirm({
    // 弹窗上 加一个自定义class
    customClass: 'my-class',
    // 标题
    title: '这个是标题',
    // 内容
    message: '这个是弹窗内容',
    // 点击蒙版，不关闭
    maskHide: false,
    buttons: [
        {
            // 覆盖第一个按钮的 文字
            text: 'cancel'
        },
        {
            text: '知道了',
            callback: function(index){
                // ... 处理相关事务

                // 执行全局的 callback，需要显式调用
                return this.callback(index);
            }
        }
    ],
    // callback，不设置， 按钮中就不能调用 this.callback
    callback: function(){
        // 处理 关闭

        // 需要取消关闭，请返回 false
    }
})
```

## toast

> this.$toast(message)

* Vue 实例中显示 toast 提示
* @param {String} message 显示内容

> this.$toast({message, duration, position, iconClass})

* Vue 实例中显示 toast 提示
* @param {String} message 显示内容
* @param {Number} duration 显示时间，默认 3000ms
* @param {String} position 位置， 三个选项， top bottom middle , 默认bottom
* @param {String} iconClass 增加一个icon显示，需要自己写样式

## message

> this.$message(message)

* Vue 实例中显示 message 提示，点击蒙版可以关闭 弹窗
* @param {String} message 显示内容

> this.$message({customClass, title, message, maskHide, buttons = [...{text,isLight, callback}], callback})

* Vue 实例中显示 message 提示
* @param {String} customClass 增加一个自定义弹窗头部的样式
* @param {String} title 弹窗标题
* @param {String} message 显示内容
* @param {Boolean} maskHide 点击蒙版是否触发关闭弹窗
* @param {Array} buttons 弹窗按钮
* @param {String} text 按钮显示文字
* @param {String} isLight 需要高亮的按钮
* @param {Function} callback 按钮中的点击按钮触发的事件
* @param {Function} callback 通用的关闭弹窗触发函数，接收一个参数，按钮的位置的index + 1, 0为点击蒙版关闭

## alert

使用同 message 一样，只是默认设置了一个按钮，text为确定

## confirm

使用同 message 一样，只是默认设置了二个按钮，text为 取消和确定， 确定按钮，默认高亮