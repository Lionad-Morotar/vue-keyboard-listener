# vue-keyboard-listener

> 只实现了Mixin混入效果, 如想制作Vue插件, 欢迎 Pull Request

[≡项目地址≡](https://github.com/Lionad-Morotar/vue-keyboard-listener "≡项目地址≡")

> 如果预览地址打不开, 说明服务器挂了... 那就Clone下来本地跑吧, 见下图

[≡预览地址≡](https://github.com/Lionad-Morotar/vue-keyboard-listener "≡预览地址≡")

> [点击预览](http://www.vue-keyboard-listener.mgear.club)

![效果展示](https://i.imgur.com/tI1MrRW.gif)

## 项目说明

这是一个使用VueJS混入(Vue Mixins)监听项目键盘事件的组件.

在引用的组件中, 可以直接调用$_setTriggerKey进行初始化

* 使用'+'号进行多按键组合, 不区分大小写
* 使用handler指向触发调用的函数, params负责参数传递

使用示例:
```
// ...
this.$_setTriggerKey([
    {
        key: 'control+shift+s',
        handler: this.Save,
        params: ['save'],
    },
    {
        key: 'f12',
        handler: () => { return false },
    },
])
// ...
```

TODO:

* params函数化

## 测试运行

1. 安装依赖
```
npm install
```

2. 本地运行
```
npm run serve
```

