export const KeyboardListener = {

    data () {
        return {

            // 用户在页面上的键盘记录
            keyboardPath: [],
            
            // 记录同时按下的按键
            keyboardVector: [],

            // 用来存储需要执行检查的按键
            // 若是组合按键，会被拆分成单个按键存入
            sinTriggerKeyStore: {},
            // 用来储存要执行的函数名
            handlerStore: {},
            paramsStore: {},
            confStore: {
                type: [],
            },

        }
    },

    computed: {

        canSetVector () {
            return this.confStore.type.includes('set-vector')
        },

    },

    created () {
        
    },
    beforeDestroy () {
        let body = document.querySelector('body')
            body && body.removeEventListener('keydown', this.$_keyboardListener)
            body && body.addEventListener('keyup', this.$_clearVector)
    },
    methods: {

        $_initKeyBoardListenerEvent () {
            let body = document.querySelector('body')
                body && body.addEventListener('keydown', this.$_keyboardListener)
                body && body.addEventListener('keyup', this.$_clearVector)
        },

        $_keyboardListener (e) {
            console.log(e.key)

            let pushIn = (type = ['path', 'vector']) => {
                if (
                    // vector长度为0强制存入
                    this.keyboardVector.length == 0 ||
                    // 相同的按键只存一次结果
                    this.keyboardPath[this.keyboardPath.length - 1] != e.key
                ) {
                    type.includes('path') && this.keyboardPath.push(e.key)
                    type.includes('vector') && this.keyboardVector.push(e.key)
                }
            }

            // check type
            if (this.confStore.type.includes('intercept-all')) {
                e.preventDefault()
            }
            if (this.canSetVector) {
                pushIn()
            }
            if (this.confStore.store) {
                this.confStore.store.eventHub && 
                    this.confStore.store.eventHub.$emit('KeyBoardListener::vector', this.keyboardVector)
            }

            // check trigger
            if (this.$_checkKeyIsTrigger(e.key)) {
                pushIn()
                // check
                // console.log(e.key, this.keyboardVector)
                // handler
                let combined = this.toLowerCase(this.keyboardVector.join('+'))
                if (this.handlerStore[combined]) {
                    e.preventDefault()
                    this.handlerStore[combined](
                        this.paramsStore[combined]
                    )
                    this.$root.eventHub && 
                        this.$root.eventHub.$emit && 
                        this.$root.eventHub.$emit(`${this.pagePrefix || 'KeyBoardListener::'}${e.key}`)
                }
            }
        },

        $_clearVector (e) {
            if (this.$_checkKeyIsTrigger(e.key) || this.canSetVector) {
                this.keyboardVector.shift()
                e.preventDefault()
            }
        },

        $_setTriggerKey (conf = {}, keys = []) {
            
            // set trigger event
            this.$_initKeyBoardListenerEvent()

            // set conf store
            this.confStore = conf

            // check type
            if (this.confStore.store) {
                this.confStore.store.resultTarget = this.keyboardVector
            }

            // set key store
            let checkKey = '+'
            keys.map(o => {
                let handle = o.key.split(checkKey)
                let isCombined = handle.length > 1
                // single key store
                isCombined && o.key != checkKey ?
                    handle.map(key => {
                        this.sinTriggerKeyStore[this.toLowerCase(key)] = true
                    }) :
                    this.sinTriggerKeyStore[this.toLowerCase(o.key)] = true
                // handler store
                this.handlerStore[this.toLowerCase(o.key)] = o.handler
                this.paramsStore[this.toLowerCase(o.key)] = o.params
            })
            // console.log
            // console.log(this.sinTriggerKeyStore, this.handlerStore)
        },

        /** Calculation Function */

        $_checkKeyIsTrigger (key) {
            return this.sinTriggerKeyStore[this.toLowerCase(key)]
        },

        toLowerCase (char) {
            return char.replace(/[A-Z]/g, (match) => {
                return match.toLowerCase()
            })
        },

    },

}