<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script >
  import BScroll from 'better-scroll'

  const DIRECTION_H = 'horizontal'
  const DIRECTION_V = 'vertical'
  const COMPONENT_NAME = 'scroll'

  export default {
    name: COMPONENT_NAME,
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: true
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      direction: {
        type: String,
        default: DIRECTION_V
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        console.log('init')
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
        })

        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }

        if (this.pullup) {
         console.log(this.scroll.maxScrollY + 50)
            console.log(this.scroll.y )
          this.scroll.on('scrollEnd', () => {
            console.log('scrollEndscrollEnd')
            console.log(this.scroll.maxScrollY + 50)
            console.log(this.scroll.y )
            if (this.scroll.y <= (this.scroll.maxScrollY )) {
              this.$emit('scrollToEnd')
            }
          })
        }

        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {

            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data() {
        console.log('dataList')
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>


