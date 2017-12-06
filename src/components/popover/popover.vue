<template>
    <div class="popover">
        <component :is="popoverAlive.title"></component>
    </div>
</template>

<style scoped>
  .popover{
      z-index: 30;
      position: relative;
      width:auto;
      height: auto;
  }
</style>
<script>
  import vBalance from './balance.vue'
//品牌
  import vNewPush from '../commodity/alert/newPush.vue'
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          changeAlert: 'vDemo'
      };
    },
    components:{
     vBalance,vNewPush

    },
    methods: {
    },
    computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'popoverAlive'
      ])
    }
  };
</script>
