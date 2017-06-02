# util 

* [函数 misc.js](#misc)
* [url参数格式化 querystring.js](#querystring)
* [本地存储 storage.js](#storage)
* [日期格式化 date.js](#date)
* [cookie操作 cookie.js](#cookie)
* [自定义事件类 eventemitter.js](#eventemitter)

## misc #

> forEach(arr, fun, exe, scope = this)

* 数据循环执行
* @param {Array、Object} arr 循环的数据
* @param {Function} fun 每次循环执行函数
* @param {Array|Object} exe fun return后推入exe中
* @param {*} scope fun this指向 


> loadJS(url, callback, charset)

* 动态加载 javascript
* @param url
* @param callback
* @param charset
* @returns {Element}

> getUUID()

* 获取页面唯一的 id 值
* @returns {string}

> getFullUrl(url)

* 获得url的真实地址(短路径 -> 全路径)
* @param url
* @returns {string}

> isEqual(a, b)

* 判断两组数据是否相同，深度匹配每个基本数据的值是否相同
* @param {*} a 
* @param {*} b 
* @returns {Boolean}

## querystring #

> parse(str)

* 将querystring字符串转 object
* @param {String} 
* a=1&b=2&b=3  -> {a:1,b:[2,3]} 

## cookie #

> getItem(key, str = location.search)

* 获取str中对应key的值
* @param {String} key 
* @param {String} str = location.search

> stringify(json)

* 将数据转换为 querystring 字符串 , 与 parse 相反
* @param {JSON} Object 数据对象
* @return {String} 
* {a:1,b:[2,3]} -> a=1&b=2&b=3


## storage #
本地存储可以设置过期时间，数据不存cookie

> getItem(key)

* 获取本地存储
* @param {String} key 

> setItem(key, value, expiration)

* 设置本地存储 item
* @param {String} key 
* @param {*} value 
* @param {Number|String|Date} expiration 0:进程，-1:永久，数字:天数，字符串，日期

> removeItem(key)

* 移除数据
* @param {String} key 


## date #

> create(date)

* 转换为Date对象
* @param {Number, String, Date} , 为空，为当前本地时间

> format(date, formatStr = 'YYYY-MM-DD')

* 将date格式化为固定格式的字符串
* @param {Number, String, Date} date 
* @param {String} formatStr  YYYY(年4) YY(年2) MM(月2) M(月) DD(日2) D(日) hh(时2) h(时) mm(分2) m(分) ss(秒2) s(秒)
* @return {String} 格式化过后的字符串

## cookie #
> getItem(key)

* 获取cookie
* @param {String} key 

> setItem(key, value, expiration, path, domain)

* 设置cookie
* @param {String} key 
* @param {String} value 
* @param {Number|String|Date} expiration 0:进程，-1:永久，数字:天数，字符串，日期
* @param {String} path 文档路径
* @param {String} domain 域名，可以设置主域名

> removeItem(key, path, domain)

* 移除cookie
* @param {*} key 
* @param {*} path 文档路径
* @param {*} domain 域名，可以设置主域名

## eventemitter #

用于处理自定义事件的，或者拦截器
> EventEmitter 这个是类

**以下列出的是原型方法**

> on(type, fun)

* 绑定事件
* @param type 事件名称
* @param fun 事件方法
* @returns {EventEmitter}

> hasEvent(type)

* 判断是否还有特定事件
* @param type
* @returns {Boolean}

> onec(type, fun)

* 只有执行一次的事件
* @param type 事件名称
* @param fun 事件方法
* @returns {EventEmitter}

> off(type[, fun])

* 移除事件
* @param type 事件名称
* @param fun 事件方法
* @returns {EventEmitter}

> emit(type, ...args)

* 触发事件
* @param {String} type 事件名称
* @param {*} ag 传递的参数

> assign(...args)

* 对自身 this 的扩展