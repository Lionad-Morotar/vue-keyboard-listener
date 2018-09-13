<template>
  <div class="keyboard-display-page">

    <div class="path-con">
      <span class="path" v-if="showMessage.length" :data-text="showMessage">
        {{showMessage}}
      </span>
      <span class="no-path-info" v-else>
        {{placeholder}}
      </span>
    </div>

    <div class="text-effect-info">
      <span>Text Effect From `https://codepen.io/mallendeo/pen/vzddmE` By Mauricio Allende</span>
    </div>

  </div>
</template>

<script>

import { KeyboardListener } from '.././mixins/KeyboardListener.mixins.js'

export default {
  name: 'Keyboard-Display-Page',
  mixins: [ 
    KeyboardListener,
  ],

  props: {
    placeholder: {
      type: String,
      default: 'Smash Your Keyboard!',
    }
  },
  data () {
    return {

      combineKeys: [],

    }
  },

  created () {
    this.$root.eventHub.$on('KeyBoardListener::vector', keys => this.combineKeys = keys)
    this.$_setTriggerKey({ 
      type: [
        'intercept-all',
        'set-vector'
      ],
      store: {
        eventHub: this.$root.eventHub
      },
    })
  },

  computed: {
    showMessage () {
      return this.combineKeys.length ?
        this.combineKeys.join('+') :
        ''
    },
  },

  methods: {



  },
}

</script>

<style scoped>

.keyboard-display-page {
  display: block;
  user-select: none;
}

.path-con {
  height: 100vh;
  line-height: 100vh;
}

.path {
  position: relative;
  font-size: 7vh;
  color: white;
  letter-spacing: .1vh;
  font-variant: unicase;
  transform: scale3d(1, 1, 1);
}

.path::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 3px;
  right: 0;
  line-height: 1;
  color: white;
  background: #222;
  text-shadow: 3px 0 #67FF2C;
  animation: glitch-effect 3s infinite linear alternate-reverse;
}
.path::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: -3px;
  right: 0;
  line-height: 1;
  color: white;
  background: #222;
  text-shadow: -3px 0 #FF2C5E;
    animation: glitch-effect 2s infinite linear alternate-reverse;
}

.no-path-info {
  font-size: 10vh;
  color: #151515;
}

.text-effect-info {
  position: absolute;
  bottom: 10px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: #454545;
}

@-webkit-keyframes glitch-effect {
  0% {
    -webkit-clip-path: inset(75% 0 23% 0);
            clip-path: inset(75% 0 23% 0);
  }
  2% {
    -webkit-clip-path: inset(47% 0 39% 0);
            clip-path: inset(47% 0 39% 0);
  }
  4% {
    -webkit-clip-path: inset(27% 0 9% 0);
            clip-path: inset(27% 0 9% 0);
  }
  6% {
    -webkit-clip-path: inset(66% 0 12% 0);
            clip-path: inset(66% 0 12% 0);
  }
  8% {
    -webkit-clip-path: inset(14% 0 70% 0);
            clip-path: inset(14% 0 70% 0);
  }
  10% {
    -webkit-clip-path: inset(26% 0 45% 0);
            clip-path: inset(26% 0 45% 0);
  }
  12% {
    -webkit-clip-path: inset(42% 0 63% 0);
            clip-path: inset(42% 0 63% 0);
  }
  14% {
    -webkit-clip-path: inset(95% 0 88% 0);
            clip-path: inset(95% 0 88% 0);
  }
  16% {
    -webkit-clip-path: inset(33% 0 26% 0);
            clip-path: inset(33% 0 26% 0);
  }
  18% {
    -webkit-clip-path: inset(23% 0 70% 0);
            clip-path: inset(23% 0 70% 0);
  }
  20% {
    -webkit-clip-path: inset(24% 0 52% 0);
            clip-path: inset(24% 0 52% 0);
  }
  22% {
    -webkit-clip-path: inset(14% 0 99% 0);
            clip-path: inset(14% 0 99% 0);
  }
  24% {
    -webkit-clip-path: inset(79% 0 31% 0);
            clip-path: inset(79% 0 31% 0);
  }
  26% {
    -webkit-clip-path: inset(70% 0 93% 0);
            clip-path: inset(70% 0 93% 0);
  }
  28% {
    -webkit-clip-path: inset(11% 0 57% 0);
            clip-path: inset(11% 0 57% 0);
  }
  30% {
    -webkit-clip-path: inset(73% 0 99% 0);
            clip-path: inset(73% 0 99% 0);
  }
  32% {
    -webkit-clip-path: inset(93% 0 97% 0);
            clip-path: inset(93% 0 97% 0);
  }
  34% {
    -webkit-clip-path: inset(77% 0 1% 0);
            clip-path: inset(77% 0 1% 0);
  }
  36% {
    -webkit-clip-path: inset(25% 0 9% 0);
            clip-path: inset(25% 0 9% 0);
  }
  38% {
    -webkit-clip-path: inset(71% 0 4% 0);
            clip-path: inset(71% 0 4% 0);
  }
  40% {
    -webkit-clip-path: inset(11% 0 16% 0);
            clip-path: inset(11% 0 16% 0);
  }
  42% {
    -webkit-clip-path: inset(8% 0 92% 0);
            clip-path: inset(8% 0 92% 0);
  }
  44% {
    -webkit-clip-path: inset(53% 0 76% 0);
            clip-path: inset(53% 0 76% 0);
  }
  46% {
    -webkit-clip-path: inset(86% 0 2% 0);
            clip-path: inset(86% 0 2% 0);
  }
  48% {
    -webkit-clip-path: inset(33% 0 21% 0);
            clip-path: inset(33% 0 21% 0);
  }
  50% {
    -webkit-clip-path: inset(38% 0 3% 0);
            clip-path: inset(38% 0 3% 0);
  }
  52% {
    -webkit-clip-path: inset(22% 0 96% 0);
            clip-path: inset(22% 0 96% 0);
  }
  54% {
    -webkit-clip-path: inset(62% 0 52% 0);
            clip-path: inset(62% 0 52% 0);
  }
  56% {
    -webkit-clip-path: inset(39% 0 4% 0);
            clip-path: inset(39% 0 4% 0);
  }
  58% {
    -webkit-clip-path: inset(57% 0 67% 0);
            clip-path: inset(57% 0 67% 0);
  }
  60% {
    -webkit-clip-path: inset(4% 0 69% 0);
            clip-path: inset(4% 0 69% 0);
  }
  62% {
    -webkit-clip-path: inset(18% 0 27% 0);
            clip-path: inset(18% 0 27% 0);
  }
  64% {
    -webkit-clip-path: inset(97% 0 37% 0);
            clip-path: inset(97% 0 37% 0);
  }
  66% {
    -webkit-clip-path: inset(88% 0 46% 0);
            clip-path: inset(88% 0 46% 0);
  }
  68% {
    -webkit-clip-path: inset(45% 0 77% 0);
            clip-path: inset(45% 0 77% 0);
  }
  70% {
    -webkit-clip-path: inset(75% 0 63% 0);
            clip-path: inset(75% 0 63% 0);
  }
  72% {
    -webkit-clip-path: inset(28% 0 12% 0);
            clip-path: inset(28% 0 12% 0);
  }
  74% {
    -webkit-clip-path: inset(59% 0 30% 0);
            clip-path: inset(59% 0 30% 0);
  }
  76% {
    -webkit-clip-path: inset(9% 0 52% 0);
            clip-path: inset(9% 0 52% 0);
  }
  78% {
    -webkit-clip-path: inset(56% 0 7% 0);
            clip-path: inset(56% 0 7% 0);
  }
  80% {
    -webkit-clip-path: inset(80% 0 81% 0);
            clip-path: inset(80% 0 81% 0);
  }
  82% {
    -webkit-clip-path: inset(28% 0 5% 0);
            clip-path: inset(28% 0 5% 0);
  }
  84% {
    -webkit-clip-path: inset(38% 0 30% 0);
            clip-path: inset(38% 0 30% 0);
  }
  86% {
    -webkit-clip-path: inset(87% 0 58% 0);
            clip-path: inset(87% 0 58% 0);
  }
  88% {
    -webkit-clip-path: inset(24% 0 2% 0);
            clip-path: inset(24% 0 2% 0);
  }
  90% {
    -webkit-clip-path: inset(86% 0 15% 0);
            clip-path: inset(86% 0 15% 0);
  }
  92% {
    -webkit-clip-path: inset(13% 0 19% 0);
            clip-path: inset(13% 0 19% 0);
  }
  94% {
    -webkit-clip-path: inset(67% 0 85% 0);
            clip-path: inset(67% 0 85% 0);
  }
  96% {
    -webkit-clip-path: inset(38% 0 28% 0);
            clip-path: inset(38% 0 28% 0);
  }
  98% {
    -webkit-clip-path: inset(91% 0 19% 0);
            clip-path: inset(91% 0 19% 0);
  }
  100% {
    -webkit-clip-path: inset(75% 0 79% 0);
            clip-path: inset(75% 0 79% 0);
  }
}

@keyframes glitch-effect {
  0% {
    -webkit-clip-path: inset(75% 0 23% 0);
            clip-path: inset(75% 0 23% 0);
  }
  2% {
    -webkit-clip-path: inset(47% 0 39% 0);
            clip-path: inset(47% 0 39% 0);
  }
  4% {
    -webkit-clip-path: inset(27% 0 9% 0);
            clip-path: inset(27% 0 9% 0);
  }
  6% {
    -webkit-clip-path: inset(66% 0 12% 0);
            clip-path: inset(66% 0 12% 0);
  }
  8% {
    -webkit-clip-path: inset(14% 0 70% 0);
            clip-path: inset(14% 0 70% 0);
  }
  10% {
    -webkit-clip-path: inset(26% 0 45% 0);
            clip-path: inset(26% 0 45% 0);
  }
  12% {
    -webkit-clip-path: inset(42% 0 63% 0);
            clip-path: inset(42% 0 63% 0);
  }
  14% {
    -webkit-clip-path: inset(95% 0 88% 0);
            clip-path: inset(95% 0 88% 0);
  }
  16% {
    -webkit-clip-path: inset(33% 0 26% 0);
            clip-path: inset(33% 0 26% 0);
  }
  18% {
    -webkit-clip-path: inset(23% 0 70% 0);
            clip-path: inset(23% 0 70% 0);
  }
  20% {
    -webkit-clip-path: inset(24% 0 52% 0);
            clip-path: inset(24% 0 52% 0);
  }
  22% {
    -webkit-clip-path: inset(14% 0 99% 0);
            clip-path: inset(14% 0 99% 0);
  }
  24% {
    -webkit-clip-path: inset(79% 0 31% 0);
            clip-path: inset(79% 0 31% 0);
  }
  26% {
    -webkit-clip-path: inset(70% 0 93% 0);
            clip-path: inset(70% 0 93% 0);
  }
  28% {
    -webkit-clip-path: inset(11% 0 57% 0);
            clip-path: inset(11% 0 57% 0);
  }
  30% {
    -webkit-clip-path: inset(73% 0 99% 0);
            clip-path: inset(73% 0 99% 0);
  }
  32% {
    -webkit-clip-path: inset(93% 0 97% 0);
            clip-path: inset(93% 0 97% 0);
  }
  34% {
    -webkit-clip-path: inset(77% 0 1% 0);
            clip-path: inset(77% 0 1% 0);
  }
  36% {
    -webkit-clip-path: inset(25% 0 9% 0);
            clip-path: inset(25% 0 9% 0);
  }
  38% {
    -webkit-clip-path: inset(71% 0 4% 0);
            clip-path: inset(71% 0 4% 0);
  }
  40% {
    -webkit-clip-path: inset(11% 0 16% 0);
            clip-path: inset(11% 0 16% 0);
  }
  42% {
    -webkit-clip-path: inset(8% 0 92% 0);
            clip-path: inset(8% 0 92% 0);
  }
  44% {
    -webkit-clip-path: inset(53% 0 76% 0);
            clip-path: inset(53% 0 76% 0);
  }
  46% {
    -webkit-clip-path: inset(86% 0 2% 0);
            clip-path: inset(86% 0 2% 0);
  }
  48% {
    -webkit-clip-path: inset(33% 0 21% 0);
            clip-path: inset(33% 0 21% 0);
  }
  50% {
    -webkit-clip-path: inset(38% 0 3% 0);
            clip-path: inset(38% 0 3% 0);
  }
  52% {
    -webkit-clip-path: inset(22% 0 96% 0);
            clip-path: inset(22% 0 96% 0);
  }
  54% {
    -webkit-clip-path: inset(62% 0 52% 0);
            clip-path: inset(62% 0 52% 0);
  }
  56% {
    -webkit-clip-path: inset(39% 0 4% 0);
            clip-path: inset(39% 0 4% 0);
  }
  58% {
    -webkit-clip-path: inset(57% 0 67% 0);
            clip-path: inset(57% 0 67% 0);
  }
  60% {
    -webkit-clip-path: inset(4% 0 69% 0);
            clip-path: inset(4% 0 69% 0);
  }
  62% {
    -webkit-clip-path: inset(18% 0 27% 0);
            clip-path: inset(18% 0 27% 0);
  }
  64% {
    -webkit-clip-path: inset(97% 0 37% 0);
            clip-path: inset(97% 0 37% 0);
  }
  66% {
    -webkit-clip-path: inset(88% 0 46% 0);
            clip-path: inset(88% 0 46% 0);
  }
  68% {
    -webkit-clip-path: inset(45% 0 77% 0);
            clip-path: inset(45% 0 77% 0);
  }
  70% {
    -webkit-clip-path: inset(75% 0 63% 0);
            clip-path: inset(75% 0 63% 0);
  }
  72% {
    -webkit-clip-path: inset(28% 0 12% 0);
            clip-path: inset(28% 0 12% 0);
  }
  74% {
    -webkit-clip-path: inset(59% 0 30% 0);
            clip-path: inset(59% 0 30% 0);
  }
  76% {
    -webkit-clip-path: inset(9% 0 52% 0);
            clip-path: inset(9% 0 52% 0);
  }
  78% {
    -webkit-clip-path: inset(56% 0 7% 0);
            clip-path: inset(56% 0 7% 0);
  }
  80% {
    -webkit-clip-path: inset(80% 0 81% 0);
            clip-path: inset(80% 0 81% 0);
  }
  82% {
    -webkit-clip-path: inset(28% 0 5% 0);
            clip-path: inset(28% 0 5% 0);
  }
  84% {
    -webkit-clip-path: inset(38% 0 30% 0);
            clip-path: inset(38% 0 30% 0);
  }
  86% {
    -webkit-clip-path: inset(87% 0 58% 0);
            clip-path: inset(87% 0 58% 0);
  }
  88% {
    -webkit-clip-path: inset(24% 0 2% 0);
            clip-path: inset(24% 0 2% 0);
  }
  90% {
    -webkit-clip-path: inset(86% 0 15% 0);
            clip-path: inset(86% 0 15% 0);
  }
  92% {
    -webkit-clip-path: inset(13% 0 19% 0);
            clip-path: inset(13% 0 19% 0);
  }
  94% {
    -webkit-clip-path: inset(67% 0 85% 0);
            clip-path: inset(67% 0 85% 0);
  }
  96% {
    -webkit-clip-path: inset(38% 0 28% 0);
            clip-path: inset(38% 0 28% 0);
  }
  98% {
    -webkit-clip-path: inset(91% 0 19% 0);
            clip-path: inset(91% 0 19% 0);
  }
  100% {
    -webkit-clip-path: inset(75% 0 79% 0);
            clip-path: inset(75% 0 79% 0);
  }
}

</style>