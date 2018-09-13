# vue-keyboard-listener

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

